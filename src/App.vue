<template>
  <div id="app">
    <div id="head">
      <img id="tubiao" src="./assets/qslb.jpg" class="img-rounded" />
      <p id="name">色即是空</p>
    </div>
    <div id="left">
      <!-- <table id="left1">
        <thead>
          <tr>
            <th>首页</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="he in hes" :key="he.id">
            <td>{{he.name}}</td>
            
          </tr>
        </tbody>
      </table>-->
      <div v-for="(menu,index) in menus" :key="index">
        <span @click="expaned(menu,index)">{{menu.name}}</span>
        <template v-if="menu.expand">
          <div
            v-for="i in menu.chlidren"
            :key="i.id"
            :class="{'active':i.active}"
            @click="changeColor(i)"
          >
            <router-link :to="i.url">{{i.name}}</router-link>
          </div>
        </template>
      </div>
    </div>
    <!-- <div id="right">
      <router-link to="/frist">首页</router-link><br>
      <router-link to="/user">用户管理</router-link><br>
      <router-link to="/product">产品管理</router-link><br>
      <router-link to="/order">订单管理</router-link>
    </div>-->
    <router-view />
    <div id="footer"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      menus: [
        {
          id: 1,
          name: "管理中心",
          parentId: null,
          expand: false,
          url: null,
          chlidren: [
            {
              id: 11,
              name: "产品",
              parentId: 1,
              url: "product",
              active: false,
            },
            {
              id: 12,
              name: "用户",
              parentId: 1,
              url: "user",
              active: false,
            },
          ],
        },
        {
          id: 2,
          name: "客户管理",
          parentId: null,
          expand: false,
          url: null,
          chlidren: [
            {
              id: 21,
              name: "产品",
              parentId: 2,
              url: "product",
              active: false,
            },
            {
              id: 22,
              name: "用户",
              parentId: 2,
              url: "user",
              active: false,
            },
          ],
        },
        {
          id: 3,
          name: "业务管理",
          chlidren: [
            {
              id: 31,
              name: "产品",
              parentId: 3,
              url: "product",
              active: false,
            },
            {
              id: 32,
              name: "用户",
              parentId: 3,
              url: "user",
              active: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    expaned(item, index) {
      item.expand = !item.expand;

      // 数组循环的三种方式

      // 1.for of
      // for (const i of this.menus) {
      //   if (i.id !== item.id) {
      //     i.expand = false;
      //   }
      // }

      // 2.forEach
      this.menus.forEach((element) => {
        if (element.id !== item.id) {
          element.expand = false;
        }
      });

      // 2.for
      // for (var i = 0; i < this.menus.length; i++) {
      //   if (i !== index) {
      //     this.menus[i].expand = false;
      //   }
      // }
    },
    changeColor(item) {
      item.active = true;
      for (const i of this.menus) {
        for (const j of i.chlidren) {
          if (item.id !== j.id) {
            j.active = false;
          }
        }
      }
    },
  },
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center;
  color: #ff9900; */
  margin-top: 1px;
}
#head {
  background: #ff9900;
  margin-top: 1px;
  width: 100%;
  height: 100px;
}
#tubiao {
  border-radius: 7px;
  margin-top: 20px;
  margin-left: 20px;
  width: 120px;
  height: 60px;
}
#name {
  text-align: center;
  font-size: 28px;
  border-radius: 7px;
  margin-top: 30px;
  float: right;
  margin-right: 20px;
  width: 120px;
  height: 60px;
}
#left {
  margin-top: 20px;
  margin-left: 2px;
  text-align: center;
  font-size: 22px;
  width: 200px;
  height: 400px;
  background: rgba(240, 237, 237, 0.548);
}
.active a {
  color: #ff9900;
}
/* #right {
  float: right;
  margin-top:-300px;
   margin-right:60px;
  text-align: center;
  font-size: 22px;
  width: 1200px;
  height: 200px;
  background: rgba(240, 237, 237, 0.548);
} */
/* #left1 {
  text-align: center;
  font-size: 28px;
} */
#footer {
  position: absolute;
  bottom: 0;
  height: 140px;
  width: 100%;
  background-color: lightgreen;
}
</style>
