<template>
  <div class="back">
    <div class="tit">修改:</div>
    <div class="center">
      新闻ID:{{menu.id}}
      <br />
      <br />
      机构:{{menu.brandMerchantName}}
      <br />
      <br />
      创建时间:{{menu.createdAt|capitalize1}}
      <br />
      <br />
      更新时间:{{menu.updatedAt|capitalize1}}
      <br />
      <br />
      <div class="heng">
        <br />
        新闻标题:{{menu.title}}
        <br />
        <br />新闻内容:
        <p v-html="menu.mainBody"></p>新闻图:
        <img class="img" :src="menu.imageUrl" />
        <br />
      </div>
    </div>
    <br />
    <a-button class="bot" @click="canl">返回</a-button>
    <br /><br>
  </div>
</template>

<script>
import { getNewsMsgDetail } from "../api/api";
export default {
  data() {
    return {
      menu: [],
    };
  },
  created: function () {
    this.getList();
  },
  methods: {
    getList() {
      getNewsMsgDetail(this.$route.query.newsId).then((res) => {
        if (res.data.status == 0) {
          this.menu = res.data.data;
        }
      });
    },
    canl() {
      this.$router.push("/news");
    },
  },
};
</script>

<style scoped>
.img {
  width: 100px;
  height: 100px;
}
.back {
  background-color: #fff;
  border-radius: 6px;
}
.tit {
  font-size: 22px;
  height: 50px;
  line-height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 6px;
  border-bottom: 1px solid #ddd;
}
.center {
  margin-left: 10px;
  margin-right: 10px;
}
.heng {
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
}
.bot {
  float: right;
  margin-right: 10px;
}
</style>