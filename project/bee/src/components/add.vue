<template>
  <div>
    <a-form-model ref="ruleForm" :model="entity" :rules="rules" v-bind="layout">
      <h4>新增</h4>

      <a-form-model-item has-feedback label="新闻标题" prop="title" ref="vehicleModel">
        <a-input v-model="entity.title" placeholder="请输入" type="text" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="分类">
        <a-select
          placeholder="请选择"
          :v-model="entity.label"
          @change="handleChange"
          style="width: 120px"
        >
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
      <a-button type="primary" @click="addmsg">新增</a-button>
    </a-form-model>

    <button v-on:click="getContent">查看内容</button>
  </div>
</template>

<script>
import E from "wangeditor";
import { addNewsMsg } from "../api/api";
export default {
  name: "editor",
  data() {
    return {
      rules: {
        title: [
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
        label: [
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
    getContent: function () {
      alert(this.editorContent);
    },
    handleChange(value) {
      this.entity.label = value;
    },
    addmsg() {
      this.entity.mainBody = this.editorContent;
      if (this.entity.mainBody) {
        // null, undefined ,'' ,false, 0
        addNewsMsg(this.entity).then((res) => {
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
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = (html) => {
      this.editorContent = html;
    };
    editor.create();
  },
};
</script>

<style scoped>
</style>