<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
         <a-sub-menu v-for="(names,index) in menu " :key="index">
            <span slot="title" type="user" v-on:click="toggle(names,index)">
              {{names.name}}</span>
              <!-- <span v-if="names.visible"> -->
                <a-menu-item  v-for="nam in names.children" :key="nam.id" class="menu-child" >
                  <router-link :to="nam.ngUrl">{{nam.name}}</router-link></a-menu-item> 
                  <!-- </span> -->
                   </a-sub-menu>
              
             <!--       
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { getMenu } from "../api/api";
export default {
  data() {
    return {
      collapsed: false,
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
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  height: 100%;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>