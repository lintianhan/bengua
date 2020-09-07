<template>
  <div>
    <div :style="{ 'border-radius': '6px',margin: '-5px 16px',background: '#fff', }">
      <div
        :style="{  background: '#fff', minHeight: '150px' , 'margin-top': '6px','border-radius': '6px' }"
      >
        <div
          :style="{ padding: '24px', background: '#fff', 'border-bottom':'1px solid #ddd','border-radius': '6px'}"
        >
          <a-button type="primary" @click="showModala()">新增</a-button>
        </div>
        <br />
        <div :style="{'margin-button': '6px', padding: '24px','border-radius': '6px',}">
          <p>区号:</p>
          <a-input style="width: 200px" v-model="item.term" placeholder="区号" type="text" />
          <a-button @click="count(1)" type="primary">查询</a-button>
          <a-button @click="count(0)" type="primary">重置</a-button>
        </div>
      </div>
    </div>
    <!-- {{menu}} -->
    <div
      :style="{margin: '30px 14px 16px', background: '#fff', 'border-radius': '6px',padding: ' 0px 24px',}"
    >
      <a-table :columns="columns" :data-source="menu" :pagination="false" rowKey="id">
        <!-- <a
          slot="name"
          :href="record.imageUrl"
          target="_blank"
          slot-scope="text, record"
        >{{ text|capitalize }}</a>
        <a slot="time" slot-scope="text">{{ text|capitalize1 }}</a> -->
        <a slot="hasR" slot-scope="text,record">
          <a-switch v-model="record.commonUsed" @click="onChange(record.commonUsed,record.id)" />
        </a>
        <template slot="operation" slot-scope="text, record">
          <a @click="showModalg(record)" href="javascript:;">修改</a>
          <!-- <a @click="showModalx(record)" href="javascript:;">详情</a>
          <a-popconfirm v-if="menu.length" title="是否确认推送?" @confirm="() => pushMsg(record.id)">
            <a href="javascript:;">立即推送</a>
          </a-popconfirm> -->
          <a-popconfirm v-if="menu.length" title="确定删除?" @confirm="() => deletea(record.id)">
            <a style="color:#00000080" href="javascript:;">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
      <div class="fanye">
        <a-pagination
          show-quick-jumper
          :show-total="(counta, menu) => `当前${menu[0]}-${menu[1]} /共 ${counta} 行`"
          :total="counta"
          @change="onChange1"
        />
      </div>
    </div>

    <!-- <router-view /> -->

    <!-- <div>
        dfd
    </div>-->
  </div>
</template>

<script>
import { getCountryConfigList } from "../api/api";
import { pushMsgNow } from "../api/api";
import { recommendNews } from "../api/api";
import { deleteNewsMsg } from "../api/api";
const columns = [
  {
    title: "常用",
    dataIndex: "commonUsed",
    scopedSlots: { customRender: "hasR" },
  },
  {
    title: "区号",
    dataIndex: "areaCode",
  },
  {
    title: "国家名",
    dataIndex: "country",
  },
  {
    title: "首字母",
    dataIndex: "firstLetter",
    
  },
  {
    title: "国旗图片",
    dataIndex: "nationalFlagName",
    
  },
  {
    title: "operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" },
  },
];
export default {
  data() {
    return {
      //   payl: "",
      counta: 0,
      columns,
      menu: [],
      //   entity: {
      //     key: "",
      //     value: "",
      //   },
      payload: {
        pageSize: 10,
        pageIndex: 1,
        sort: [],
        filters: [],
        filter: {
          op: "or",
          groups: [],
          rules: [{ field: "areaCode", op: "cn" }],
        },
      },
      item: {
        field: "title",
        op: "cn",
        term: "",
      },
    };
  },
  created: function () {
    this.getList();
  },
  methods: {
    getList() {
      if (!this.item.term) {
        this.payload.filters = [];
      } else {
        this.payload.filters.push(this.item);
      }
      getCountryConfigList(this.payload).then((res) => {
        if (res.data.status == 0) {
          //   console.log(this.payload);
          this.menu = res.data.data;
          this.counta = res.data.count;
          //   this.dataa.name = res.data.data.id;
        }
      });
    },
    showModalx(record) {
      this.$router.push({
        path: `/news/detail?newsId=${record.id}`,
      });
    },
    showModalg(record) {
      this.$router.push({
        path: `/news/edit?newsId=${record.id}`,
      });
    },
    onChange(hasRecommend, id) {
      //   this.entity.key = id;
      //   this.entity.value = hasRecommend;
      const param = {
        key: id,
        value: hasRecommend,
      };
      recommendNews(param).then((res) => {
        if (res.data.status == 0) {
          this.$message.info(res.data.message);
          this.getList();
          console.log("okkkkkkkkkkkk");
        }
      });
    },
    onChange1(current) {
      this.payload.pageIndex = current;
      this.getList();
    },
    deletea(id) {
      deleteNewsMsg(id).then((res) => {
        if (res.data.status === 0) {
          this.$message.info(res.data.message);
          this.getList();
        } else {
          this.$message.error(res.data.message);
        }
      });
      // setTimeout(location.reload(),3000);
      // location.reload();
    },
    pushMsg(id) {
      deleteNewsMsg(id).then((res) => {
        if (res.data.status === 0) {
          this.$message.info(res.data.message);
        } else {
          this.$message.error(res.data.message);
        }
      });
    },
    count(type) {
      //   if (!this.item.term) {
      //     this.payload.filters = [];
      //   } else {
      //     // var ping = '[{field: "title", op: "cn", term:"' + this.payl + '"}]';
      //     // this.payload.filters = eval("(" + ping + ")");
      //     // const item = {
      //     //   field: "title",
      //     //   op: "cn",
      //     //   trem: this.payl,
      //     // };
      //     this.payload.filters.push(this.item);
      //     // console.log(this.payload.filters);
      //   }
      if (!type) {
        this.item.term = null;
      }
      this.getList();
    },
    // cant() {
    //   this.item.term = null;
    //   //   this.payload.filters = [];
    //   this.getList();
    // },

    showModala() {
      this.$router.push("/news/add");
    },
  },
};
</script>

<style scoped>
.fanye {
  float: right;
  height: 60px;

  /* text-align:center; */
  /* height: 60px;
  margin-top: 20px; */
  margin-right: 60px;
  /* line-height: 60px; */
}
.fanye ul {
  height: inherit;
  line-height: 60px;
  /* text-align:center; */
  /* height: 60px;
  margin-top: 20px; */
}
</style>
<style>
.fanye .ant-pagination-options-quick-jumper {
  height: 100%;
  line-height: 60px;
}
</style>