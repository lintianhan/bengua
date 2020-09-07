<template>
  <div class="back">
    <div class="tit">修改:</div>
    <a-form-model :model="entity" :rules="rules" v-bind="layout">
      <a-form-model-item has-feedback label="新闻标题" prop="title">
        <a-input v-model="entity.title" type="text" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="分类" prop="label">
        <a-select v-model="entity.label" @change="handleChange" style="width: 120px">
          <a-select-option value="1">推荐</a-select-option>
          <a-select-option value="2">新闻</a-select-option>
          <a-select-option value="3">品牌</a-select-option>
        </a-select>
      </a-form-model-item>
      <br />
      <br />
      <br />
      <a-form-model-item has-feedback label="新闻内容" prop="mainBody">
        <div ref="editor" style="text-align:left"></div>
      </a-form-model-item>
    </a-form-model>
    <br />
    
    <a-button class="butt" type="primary" @click="editmsg">确认修改</a-button>
    <a-button class="butt" @click="canl">返回</a-button>
    <br />
    <br />
    <!-- <a-button class="butt" type="primary" @click="editmsg">确定修改</a-button> -->
  </div>
</template>

<script>
import E from "wangeditor";
import { getNewsMsgDetail } from "../api/api";
import { modifyNewsMsg } from "../api/api";
export default {
  created: function () {
    this.getList();
  },

  data() {
    return {
      menu: [],
      rules: {
        title: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "change",
          },
          {
            min: 1,
            max: 12,
            message: "Length should be 1 to 12",
            trigger: "change",
          },
        ],
        label: [
          {
            required: true,
            message: "Please input Activity label",
            trigger: "change",
          },
        ],
        mainBody: [
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
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
      },
      entity: {
        title: "",
        label: "",
        mainBody: "",
      },
      editorContent: "",
    };
  },
  methods: {
    getList() {
      getNewsMsgDetail(this.$route.query.newsId).then((res) => {
        if (res.data.status == 0) {
          this.menu = res.data.data;
          this.entity.title = this.menu.title;
          this.entity.label = this.menu.label;
          this.editorContent = this.menu.mainBody;

          var editor = new E(this.$refs.editor);
          // this.editor.txt.html(this.editorContent);
          editor.customConfig.onchange = (html) => {
            this.editorContent = html;
          };
          editor.create();
          editor.txt.html(this.editorContent);
        }
      });
    },
    handleChange(value) {
      this.menu.label = value;
    },
    canl() {
      this.$router.push("/news");
    },
    editmsg() {
      this.menu.mainBody = this.editorContent;
      this.menu.title = this.entity.title;
      this.menu.label = this.entity.label;
      if (this.menu.mainBody) {
        // null, undefined ,'' ,false, 0
        modifyNewsMsg(this.menu).then((res) => {
          if (res.data.status === 0) {
            this.$message.info(res.data.message);
            // this.props.form.resetFields();
            // this.props.form.resetFields(['vehicleModel']);
            this.$router.push("/news");
          }
        });
      } else {
        this.$message.error(res.data.message);
      }
    },
  },
  mounted() {
    // var editor = new E(this.$refs.editor);
    // // this.editor.txt.html(this.editorContent);
    // editor.customConfig.onchange = (html) => {
    //   this.editorContent = html;
    // };
    // editor.create();
    // editor.txt.html(this.editorContent);
  },
};
</script>

<style scoped>
.tit {
    font-size: 22px;
  height: 50px;
  line-height: 50px;
  margin-left: 18%;
  margin-right: 8%;
  margin-bottom: 6px;
  border-bottom: 1px solid #ddd;

  /* background: red;s */
}
.butt {
  float: right;
  margin-right: 10px;
}
.back {
  background-color: #fff;
  border-radius: 6px;
}
</style>