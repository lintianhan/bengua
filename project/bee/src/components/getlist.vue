<template >
  <!-- <a-layout>
  <a-layout-header :style="{ background: '#fff', padding: 0,height: 600, } " >-->

  <!-- </a-layout-header> -->
  <div>
    <div :style="{  margin: '2px 16px','border-radius': '6px',background: '#fff', }">
      <div :style="{  background: '#fff', minHeight: '150px' , }">
        <div :style="{ padding: '24px', background: '#fff', 'border-bottom':'1px solid #ddd', }">
          <a-button type="primary" @click="showModala()">新增</a-button>
        </div>
        <br />
        <div :style="{ padding: '24px'}">
          <p>车辆型号:</p>
          <a-input style="width: 200px" v-model="payl" @pressEnter="count" placeholder="车辆型号" />
          <a-button @click="count" type="primary">查询</a-button>
        </div>
      </div>
    </div>
    <div
      :style="{margin: '24px 16px', background: '#fff', 'border-radius': '6px',padding: ' 0px 24px',}"
    >
      <!-- style="line-height:25px" -->
      <a-modal v-model="visible" title="详情" @ok="handleOk">
        <a-row>
          <a-col :span="4">
            <p class="height-30">车型ID:</p>
          </a-col>
          {{menu1.id}}
          <br />
        </a-row>
        <a-row>
          <a-col :span="4">
            <p class="height-30">车辆型号:</p>
          </a-col>
          {{menu1.vehicleModel}}
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
            <p class="height-30">车型图片:</p>
          </a-col>
          <img class="img" :src="menu1.imageUrl" />
        </a-row>
        <template slot="footer">
          <a-button type="primary" @click.stop="()=>{visible=false}">返回</a-button>
        </template>
      </a-modal>
      <a-modal v-model="visiblea" title="修改" @ok="handleOkb">
        <a-form-model :model="menu1" :rules="rules">
          <a-form-model-item has-feedback label="车辆型号" prop="vehicleModel">
            <a-input v-model="menu1.vehicleModel" type="text" autocomplete="off" />
          </a-form-model-item>

          <br />
        </a-form-model>
        <template slot="footer">
          <a-button type="primary" @click="modification(menu1.vehicleModel,menu1.id)">确定修改</a-button>
        </template>
      </a-modal>
      <div>
        <a-modal v-model="uptxt" title="新增" @ok="handleOka">
          <a-form-model ref="ruleForm" :model="entity" :rules="rules" v-bind="layout">
            <a-form-model-item has-feedback label="车型名称" prop="vehicleModel" ref="vehicleModel">
              <a-input v-model="entity.vehicleModel" type="text" autocomplete="off" />
            </a-form-model-item>
          </a-form-model>
          <!-- <p>
            车辆型号:
            <input
              v-model="entity.vehicleModel"
              type="text"
              onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')"
            />
          </p>-->
          <!-- <p>{{menu.imageName}}</p>
          <p>{{menu.createdAt}}</p>-->

          <template slot="footer">
            <a-button type="primary" @click="upload">新增</a-button>
          </template>
        </a-modal>
      </div>
      <!-- <div class="menu-list">
          <div v-for="(names,index) in menu " :key="index">
            <div v-on:click="toggle(names,index)">
              {{names.name}}
              <div v-if="!names.visible">
                <div v-for="nam in names.children" :key="nam.id" class="menu-child">
                  <router-link :to="nam.ngUrl">{{nam.name}}</router-link>
                </div>
              </div>
            </div>
          </div>
      </div>-->
      <!-- <div @click="count">获取</div>{{adds}}
      <div @click="add">增加</div>
      <input v-model="payl" />
      <div v-for="(ids,index) in menu " :key="index">
        <p>
          {{ids.id}},
          {{ids.vehicleModel}},
          <a
            :href="ids.imageUrl"
            target="_blank"
          >{{ids.imageName|capitalize}}</a>
        </p>
      </div>
      <p>444</p>-->

      <a-table :columns="columns" :data-source="menu" :pagination="false" rowKey="id">
        <a
          slot="name"
          :href="record.imageUrl"
          target="_blank"
          slot-scope="text, record"
        >{{ text|capitalize }}</a>
        <template slot="operation" slot-scope="text, record">
          <a @click="showModaa(record)" href="javascript:;">修改</a>
          <!-- <a-popconfirm
            v-if="menu.length"
            title="Sure to delete?"
            @confirm="() => onDelete(record.id)"
          >
            <a href="javascript:;">Delete</a>
             <a href="javascript:;">  详情</a> 
          </a-popconfirm>-->
          <!-- <a-popconfirm v-if="menu.length" title="展示详情" @confirm="() => showModal(record)"> -->
          <a @click="showModal(record)" href="javascript:;">详情</a>

          <!-- </a-popconfirm> -->
          <a-popconfirm v-if="menu.length" title="确定删除?" @confirm="() => deletea(record.id)">
            <a style="color:#00000080" href="javascript:;">删除</a>
          </a-popconfirm>
        </template>
        <!-- <a-pagination show-quick-jumper :default-current="1" :total="count" @change="onChange" />  :default-current="1"-->
      </a-table>
      <div>
        <a-pagination
          show-quick-jumper
          :show-total="(counta, menu) => `${menu[0]}-${menu[1]} of ${counta} items`"
          :total="counta"
          @change="onChange"
        />
      </div>
    </div>
  </div>
  <!-- </a-layout> -->
</template>

<script>
import { addVehicleModel } from "../api/api";
import { getVehicleModelInfoPage } from "../api/api";
import { deleteVehicleModel } from "../api/api";
import { modifyVehicleModelInfo } from "../api/api";
const columns = [
  {
    title: "车型ID",
    dataIndex: "id",
  },
  {
    title: "车辆型号",
    dataIndex: "vehicleModel",
  },
  {
    title: "车辆图片",
    dataIndex: "imageName",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" },
  },
];

export default {
  name: "home",
  data() {
    // let validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("Please input the password"));
    //   } else {
    //     if (this.ruleForm.checkPass !== "") {
    //       this.$refs.ruleForm.validateField("checkPass");
    //     }
    //     callback();
    //   }
    // };
    return {
      // entity: {
      //   vehicleModel: "",
      // },
      rules: {
        vehicleModel: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "change",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "change",
          },
        ],
        menu2: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "change",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "change",
          },
        ],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      counta:0,
      
      uptxt: false,
      visible: false,
      visiblea: false,
      menu: [],
      menu1: [],
      menu2: "",
      list: "",
      aa: "",
      show: "",
      payl: "",
      page: "",
      adds: "",
      entity: {
        imageUrl:
          "http://mifenghz.oss-cn-hangzhou.aliyuncs.com/1597973066940_000_huohu",
        vehicleModel: "",
      },
      entitys: {
        imageUrl:
          "http://mifenghz.oss-cn-hangzhou.aliyuncs.com/1597973066940_000_huohu",
        vehicleModel: "",
        id: "",
      },
      columns,
      payload: {
        pageSize: 10,
        pageIndex: 1,
        sort: [],
        filters: [],
        filter: {
          op: "or",
          groups: [],
          rules: [{ field: "vehicleModel", op: "cn" }],
        },
      },
    };
  },
  created: function () {
    this.getList();
  },
  // filters: {
  //   capitalize: function (value) {
  //     if (!value) {
  //       return "--";
  //     } else {
  //       return value;
  //     }
  //     console.log("1711");
  //   },
  // },
  methods: {
    getList() {
      getVehicleModelInfoPage(this.payload).then((res) => {
        if (res.data.status == 0) {
          //   console.log(this.payload);
          this.menu = res.data.data;
          this.counta = res.data.count;
          // this.current=this.payload.pageIndex;
          //   this.dataa.name = res.data.data.id;
        }
      });
    },
    onChange(yema) {
      
      // this.current = yema;
      this.payload.pageIndex=yema;
      this.getList();
    },
    info() {
      this.$message.info("请输入车型名称");
    },
    info1(obj) {
      this.$message.info(obj);
    },
    error(obj) {
      this.$message.error(obj);
    },
    onDelete(key) {
      const menu = [...this.menu];
      this.menu = menu.filter((item) => item.id !== key);
    },
    count() {
      if (this.payl == false) {
        this.payload.filters = [];
        console.log(this.payload.filters);
      } else {
        var ping =
          '[{field: "vehicleModel", op: "cn", term:"' + this.payl + '"}]';
        console.log(ping);
        this.payload.filters = eval("(" + ping + ")");
        console.log(this.payload.filters);
      }
      getVehicleModelInfoPage(this.payload).then((res) => {
        if (res.data.status == 0) {
          console.log("hahah");
          this.menu = res.data.data;
        }
      });
    },
    add() {
      this.adds = prompt("请输入车辆型号");
      alert();
    },
    showModal(menus) {
      this.menu1 = menus;
      this.visible = true;
    },
    showModaa(menus) {
      this.menu1 = menus;
      this.visiblea = true;
    },
    showModala() {
      this.entity.vehicleModel = null;
      this.uptxt = true;
      // this.props.form.resetFields();
      // this.$refs.entity.resetFields();
      this.$refs.ruleForm.resetFields();
      //  this.props.form.resetFields('vehicleModel',[]);
      // this.resetFields();
      console.log("haha789");
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
    tanchuang(id) {
      alert(record.imageName);
    },
    upload() {
      if (this.entity.vehicleModel) {
        // null, undefined ,'' ,false, 0
        addVehicleModel(this.entity).then((res) => {
          if (res.data.status === 0) {
            this.getList();
            this.uptxt = false;
            this.entity.vehicleModel = null;
            this.info1(res.data.message);
            // this.props.form.resetFields();
            // this.props.form.resetFields(['vehicleModel']);
            // this.$router.push("/getlist");
          }
        });
      } else {
        this.info();
      }
    },
    modification(obj, objs) {
      this.entitys.vehicleModel = obj;
      this.entitys.id = objs;
      if (this.entitys.vehicleModel) {
        // null, undefined ,'' ,false, 0
        modifyVehicleModelInfo(this.entitys).then((res) => {
          if (res.data.status === 0) {
            this.getList();
            this.visiblea = false;
            this.entitys.vehicleModel = null;
            this.info1(res.data.message);

            // this.props.form.resetFields(['vehicleModel']);
            // this.$router.push("/getlist");
          }else{
            this.$message.error(res.data.message);
          }
        });
      } else {
        this.info();
      }
    },
    deletea(id) {
      deleteVehicleModel(id).then((res) => {
        if (res.data.status === 0) {
          this.info1(res.data.message);
          this.getList();
        } else {
          this.error(res.data.message);
        }
      });
      // setTimeout(location.reload(),3000);
      // location.reload();
    },
    toggle(names, index) {
      this.menu.forEach((element) => {
        if (element.id !== names.id) {
          element.visible = true;
        }
      });
      names.visible = !names.visible;
      // zankai() {
      //   this.show = !this.show;
      // },
    },
  },
};

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 2 Lake Park, London No. 2 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];
</script> 

<style scoped>
/* a-col {
  height: 36px;
} */
.img {
  width: 100px;
  height: 100px;
}
</style>