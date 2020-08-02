<template>
  <div id="right">
    <div v-for="m in msg" :key="m.id">{{m.name}}产品管理页面的内容<br>
    <p v-for="i in m.chlidren" :key="i.id">
            <!-- <span>{{i.name}}</span> -->
            <router-link :to="i.url">{{i.name}}</router-link>
          </p>
          </div>
  </div>
</template>
<script>
export default 
{
  name: 'order',
  data: function ()
   {
    return {
       msg:
        [
         {
          id: 1,
          name: "管理中心",
          parentId: null,
        //   expand: false,
          url: null,
          chlidren:
           [
            {
              id: 11,
              name: "产品",
              parentId: 1,
              url: "product",
            },
            {
              id: 12,
              name: "用户",
              parentId: 1,
              url: "user",
            },
            ],
          },
          { id: 2, name: "客户管理" },
          { id: 3, name: "业务管理" },
        ],
      };
},
};
</script>

<style scoped>
#right {
  float: right;
  margin-top: -300px;
  margin-right: 60px;
  text-align: center;
  font-size: 22px;
  width: 1200px;
  height: 200px;
  background: rgba(250, 246, 246, 0.548);
}
</style>
