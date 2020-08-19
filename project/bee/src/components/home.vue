<template >
  <div class="kuang">
    <div class="aa">
      <div class="logo">
        logo
        <a-button type="warn">Button></a-button>
      </div>
      <div class="menu-list">
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
      </div>

      <!-- <div>{{menu}}</div> v-on:click="zankai"-->
      <!-- <button v-on:click="count">点击</button> -->
    </div>
    <!-- <div class="right">
      <div class="head"></div>
    </div>-->
    <!-- <heade></heade> -->
    <div class="bao">
      <router-view />
    </div>
  </div>
</template>

<script>
import { getMenu } from "../api/api";
export default {
  name: "home",
  data() {
    return {
      menu: "",
      menu1: "",
      list: "",
      aa: "",
      show: "",
    };
  },
  created: function () {
    getMenu().then((res) => {
      if (res.data.status == 0) {
        this.menu = res.data.data;
        this.menu1 = res.data;
      }
    });
  },
  methods: {
    count() {
      getMenu().then((res) => {
        if (res.data.status == 0) {
          this.menu = res.data.data;
        }
      });
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
</script> 

<style scoped>
.menu-list {
  padding: 15px;
  text-align: left;
  font-size: 14px;
}
.menu-child {
  margin-left: 15px;
}
.kuang {
  width: 100%;
  height: 100%;
}
.aa {
  float: left;
  width: 20%;
  margin: 0;
  height: 100%;
  background: green;
  text-align: center;
}
.logo {
  width: 100%;
  height: 10%;
  background: red;
}
.right {
  float: right;
  width: 80%;
  height: 100%;
}
.head {
  width: 100%;
  height: 10%;
  background: rgb(236, 233, 240);
}
.bao {
  width: 80%;
  height: 10%;
  float: right;
}
</style> 