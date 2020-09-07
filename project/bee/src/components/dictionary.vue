<template>
  <div>
    <a-modal v-model="uptxt" title="新增" @ok="handleOka">
      <a-form-model ref="ruleForm" :model="entity" :rules="rules">
        <a-form-model-item has-feedback label="资源标识" prop="code" ref="code">
          <a-input v-model="entity.code" type="text" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="中文资源" prop="chinese" ref="chinese">
          <a-input v-model="entity.chinese" type="text" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="英文资源" prop="english" ref="english">
          <a-input v-model="entity.english" type="text" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="西班牙文资源" prop="sapnish" ref="sapnish">
          <a-input v-model="entity.sapnish" type="text" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="分组" prop="type" ref="type">
          <a-input v-model="entity.type" type="text" autocomplete="off" />
        </a-form-model-item>
      </a-form-model>
      <template slot="footer">
        <a-button type="primary" @click="upload">新增</a-button>
      </template>
    </a-modal>
    <a-modal v-model="visible" title="详情" @ok="handleOk">
      <a-row>
        <a-col :span="4">
          <p class="height-30">字典ID:</p>
        </a-col>
        {{menu1.id}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">资源标识:</p>
        </a-col>
        {{menu1.code}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">中文资源:</p>
        </a-col>
        {{menu1.chinese}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">英文资源:</p>
        </a-col>
        {{menu1.english}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">西班牙资源:</p>
        </a-col>
        {{menu1.spanish}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">分组:</p>
        </a-col>
        {{menu1.type}}
        <br />
      </a-row>
      <a-row>
        <a-col :span="4">
          <p class="height-30">创建时间:</p>
        </a-col>
        {{menu1.createdAt|capitalize1}}
        <br />
      </a-row>
      <template slot="footer">
        <a-button type="primary" @click.stop="()=>{visible=false}">关闭</a-button>
      </template>
    </a-modal>
    <a-modal v-model="visiblea" title="修改" @ok="handleOkb">
      <a-form-model :model="menu1" :rules="rules">
        <a-form-model-item has-feedback label="资源标识">
          <a-input v-model="menu1.code" type="text" :disabled="true" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="中文资源" prop="chinese">
          <a-input v-model="menu1.chinese" type="text" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="英文资源" prop="english">
          <a-input v-model="menu1.english" type="text" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="西班牙资源" prop="spanish">
          <a-input v-model="menu1.spanish" type="text" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="分组" prop="type">
          <a-input v-model="menu1.type" type="text" autocomplete="off" />
        </a-form-model-item>
        <br />
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
          <p>分组:</p>
          <a-input
            style="width: 200px"
            v-model="item.term"
            @pressEnter="count(1)"
            placeholder="分组"
            type="text"
          />
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
        >{{ text|capitalize }}</a>-->
        <!-- <a slot="time" slot-scope="text">{{ text|capitalize1 }}</a> -->
        <!-- <a slot="hasR" slot-scope="text,record">
          <a-switch v-model="record.hasRecommend" @click="onChange(record.hasRecommend,record.id)" />
        </a>-->
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
import { getCodeInfoList } from "../api/api";
import { pushMsgNow } from "../api/api";
import { recommendNews } from "../api/api";
import { deleteNewsMsg } from "../api/api";
const columns = [
  {
    title: "字典ID",
    dataIndex: "id",
    // scopedSlots: { customRender: "hasR" },
  },
  {
    title: "资源标识",
    dataIndex: "code",
  },
  {
    title: "中文资源",
    dataIndex: "chinese",
  },
  {
    title: "英文资源",
    dataIndex: "english",
    // scopedSlots: { customRender: "name" },
  },
  {
    title: "西班牙文资源",
    dataIndex: "spanish",
  },
  {
    title: "分组",
    dataIndex: "type",
  },
  // {
  //   title: "创建时间",
  //   dataIndex: "createdAt",
  //   scopedSlots: { customRender: "time" },
  // },
  {
    title: "operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" },
  },
];
export default {
  data() {
    return {
      visible: false,
      visiblea: false,
      uptxt: false,
      menu1: [],
      entity: [],
      counta: 0,
      columns,
      menu: [],
      rules: {
        chinese: [
          {
            required: true,
            message: "Please input Activity chinese",
            trigger: "change",
          },
          {
            min: 1,
            max: 12,
            message: "Length should be 1 to 12",
            trigger: "change",
          },
        ],
        spanish: [
          {
            required: true,
            message: "Please input Activity sapnish",
            trigger: "change",
          },
          {
            min: 1,
            max: 12,
            message: "Length should be 1 to 12",
            trigger: "change",
          },
        ],
        english: [
          {
            required: true,
            message: "Please input Activity english",
            trigger: "change",
          },
          {
            min: 1,
            max: 12,
            message: "Length should be 1 to 12",
            trigger: "change",
          },
        ],
        // code: [
        //   {
        //     disabled:true,

        //   },
        // ],
        type: [
          {
            required: true,
            message: "Please input Activity type",
            trigger: "change",
          },
          {
            min: 1,
            max: 12,
            message: "Length should be 1 to 12",
            trigger: "change",
          },
        ],
      },
      payload: {
        pageSize: 10,
        pageIndex: 1,
        sort: [],
        filters: [],
        filter: { op: "or", groups: [], rules: [{ field: "type", op: "cn" }] },
      },
      item: {
        field: "type",
        op: "cn",
        term: "",
      },
      rules: [
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
        // this.payload.filters.push(this.item);
        this.rules[0].data=this.item.term;
        this.payload.filter.rules = this.rules;
        this.payload.filters.push(this.item);
      }
      getCodeInfoList(this.payload).then((res) => {
        if (res.data.status == 0) {
          //   console.log(this.payload);
          this.menu = res.data.data;
          this.counta = res.data.count;
          //   this.dataa.name = res.data.data.id;
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
    showModalx(menus) {
      this.menu1 = menus;
      this.visible = true;
    },
    showModaa(menus) {
      this.menu1 = menus;
      this.visiblea = true;
    },
    showModala() {
      // this.entity.vehicleModel = null;
      this.uptxt = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleOkb(e) {
      console.log(e);
      this.visiblea = false;
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
    upload() {
      if (this.entity) {
        // null, undefined ,'' ,false, 0
        adddel(this.entity).then((res) => {
          if (res.data.status === 0) {
            this.getList();
            this.uptxt = false;
            this.entity.vehicleModel = null;
            this.$message.info(res.data.message);
          }
        });
      } else {
        this.$message.error();
        res.data.message;
      }
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