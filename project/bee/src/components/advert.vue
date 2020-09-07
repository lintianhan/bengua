<template>
  <div>
    <a-modal v-model="visible" title="详情" @ok="handleOk">
      <a-row>
        <a-col :span="4">
          <p class="height-30">广告ID:</p>
        </a-col>
        {{menu1.id}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">广告标题:</p>
        </a-col>
        {{menu1.title}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">广告链接:</p>
        </a-col>3
        <!-- {{menu1.}} -->
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">机构:</p>
        </a-col>
        {{menu1.brandMerchantName}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">创建时间:</p>
        </a-col>
        {{menu1.createdAt|capitalize1}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">更新时间:</p>
        </a-col>
        {{menu1.updatedAt|capitalize1}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">图片:</p>
        </a-col>
        <img class="img" :src="menu1.imageUrl" />
      </a-row>
      <template slot="footer">
        <a-button type="primary" @click.stop="()=>{visible=false}">关闭</a-button>
      </template>
    </a-modal>
    <a-modal v-model="uptxt" title="新增" @ok="handleOka">
      <a-form-model ref="ruleForm" :model="entity" :rules="rule">
        <a-form-model-item has-feedback label="广告标题" prop="title" ref="code">
          <a-input v-model="entity.title" type="text" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="广告链接" prop="adUrl" ref="chinese">
          <a-input v-model="entity.adUrl" type="text" autocomplete="off" />
        </a-form-model-item>
      </a-form-model>
      <template slot="footer">
        <a-button type="primary" @click="upload">新增</a-button>
      </template>
    </a-modal>
    <a-modal v-model="visiblea" title="修改" @ok="handleOkb">
      <a-form-model :model="menu1" :rules="rule">
        <a-form-model-item label="广告标题" prop="title">
          <a-input v-model="menu1.title" type="text" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item label="广告链接" prop="adUrl">
          <a-input v-model="menu1.adUrl" type="text" autocomplete="off" />
        </a-form-model-item>
      </a-form-model>
      <template slot="footer">
        <a-button type="primary" @click="modification(menu1)">确定修改</a-button>
      </template>
    </a-modal>
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
          <p>广告标题:</p>
          <a-input style="width: 200px" v-model="item.term" placeholder="广告标题" type="text" />
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
        <a
          slot="name"
          :href="record.imageUrl"
          target="_blank"
          slot-scope="text, record"
        >{{ text|capitalize }}</a>
        <a slot="time" slot-scope="text">{{ text|capitalize1 }}</a>
        <a slot="hasR" slot-scope="text,record">
          <a-switch v-model="record.hasRecommend" @click="onChange(record.hasRecommend,record.id)" />
        </a>
        <template slot="operation" slot-scope="text, record">
          <a @click="showModaa(record)" href="javascript:;">修改</a>
          <a @click="showModalx(record)" href="javascript:;">详情</a>
          <!-- <a-popconfirm v-if="menu.length" title="是否确认推送?" @confirm="() => pushMsg(record.id)">
            <a href="javascript:;">立即推送</a>
          </a-popconfirm>-->
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
  </div>
</template>

<script>
import { getAdInfoList } from "../api/api";
import { addAdInfo } from "../api/api";
import { changeAdStatus } from "../api/api";
import { deleteAdInfo } from "../api/api";
import { updateAdInfo } from "../api/api";
const columns = [
  {
    title: "启用",
    dataIndex: "hasRecommend",
    scopedSlots: { customRender: "hasR" },
  },
  {
    title: "广告ID",
    dataIndex: "id",
  },
  {
    title: "广告标题",
    dataIndex: "title",
  },
  {
    title: "图片",
    dataIndex: "imageName",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    scopedSlots: { customRender: "time" },
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
      visible: false,
      counta: 0,
      columns,
      uptxt: false,
      visiblea: false,
      entitys: "",
      menu1: [],
      menu: [],
      //   entity: {
      //     key: "",
      //     value: "",
      //   },
      rule: {
        title: [
          {
            required: true,
            message: "Please input Activity title",
            trigger: "change",
          },
          {
            min: 1,
            max: 12,
            message: "Length should be 1 to 12",
            trigger: "change",
          },
        ],
        adUrl: [
          {
            required: true,
            message: "Please input Activity adUrl",
            trigger: "change",
          },
        ],
      },
      payload: {
        pageSize: 10,
        pageIndex: 1,
        sort: [],
        filters: [],
        filter: { op: "or", groups: [], rules: [{ field: "title", op: "cn" }] },
      },
      item: {
        field: "title",
        op: "cn",
        term: "",
      },
      entity: {
        adUrl: "",
        title: "",
        imageUrl:
          "http://mifenghz.oss-cn-hangzhou.aliyuncs.com/1599053293624_000_huohu",
      },
      rues: [
        {
          field: "type",
          op: "cn",
          data: "",
        },
      ],
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
        this.rues[0].data = this.item.term;
        this.payload.filter.rules = this.rues;
        this.payload.filters.push(this.item);
      }
      getAdInfoList(this.payload).then((res) => {
        if (res.data.status == 0) {
          //   console.log(this.payload);
          this.menu = res.data.data;
          this.counta = res.data.count;
          //   this.dataa.name = res.data.data.id;
        }
      });
    },
    showModalx(menus) {
      this.menu1 = menus;
      this.visible = true;
    },
    showModaa(menus) {
      this.menu1 = menus;
      this.visiblea = true;
    },
    onChange(hasRecommend, id) {
      //   this.entity.key = id;
      //   this.entity.value = hasRecommend;
      const param = {
        key: id,
        value: hasRecommend,
      };
      changeAdStatus(param).then((res) => {
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
      deleteAdInfo(id).then((res) => {
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
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleOkb(e) {
      console.log(e);
      this.visiblea = false;
    },
    upload() {
      if (this.entity) {
        // null, undefined ,'' ,false, 0
        addAdInfo(this.entity).then((res) => {
          if (res.data.status === 0) {
            this.getList();
            this.uptxt = false;
            this.entity.adUrl = null;
            this.entity.title = null;
            this.$message.info(res.data.message);
          }
        });
      } else {
        this.$message.error(res.data.message);
      }
    },
    modification(obj) {
      this.entitys = obj;
      
      if (this.entitys.id) {
        // null, undefined ,'' ,false, 0
        updateAdInfo(this.entitys).then((res) => {
          if (res.data.status === 0) {
            this.visiblea = false;
            this.entitys.id = '';
            this.entitys.title = '';
            this.$message.info(res.data.message);
            this.getList();
            // this.props.form.resetFields(['vehicleModel']);
            // this.$router.push("/getlist");
          }
        });
      } else {
        this.$message.error(res.data.message);
      }
    },
    handleOka(e) {
      console.log(e);
      this.uptxt = false;
    },
    count(type) {
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
      this.uptxt = true;
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
<style scoped>
.fanye .ant-pagination-options-quick-jumper {
  height: 100%;
  line-height: 60px;
}
.img {
  width: 100px;
  height: 100px;
}
</style>