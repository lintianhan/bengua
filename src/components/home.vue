<template>
  <div>
    <div>
      <p>rrrrrrrrrrrrrrrr+-</p>
      <span :class="read?'red':'green'" class="span_class"></span>
      <div>{{ $store.state.name }}</div>
      <div>{{ $store.state.pass }}</div>
      <div></div>
      <button @click="count">点击</button>
      <button @click="count1">点击1</button>
      <div>{{fullName}}</div>
      <div>{{ $store.state.age }}</div>
      <div>{{ $store.state.agee }}</div>
      <button @click="changeMdel">点4444444444444击2</button>
      <input v-model="h" :disabled="read" />
    </div>
  </div>
</template>
<style scoped>
.span_class {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px dashed #000;
  display: inline-block;
}
.red {
  background: red;
}

.green {
  background: green;
}
</style>
<script>
export default {
  // name: "Home",
  data() {
    return {
      int: "",
      fullName: "",
      h: "",
      read: false,
    };
  },
  created: function () {
    this.getList();
  },
  mounted: function () {},
  methods: {
    count: function () {
      this.$store.commit("edit");
      //  alert(this.agee);
    },
    count1: function () {
      this.fullName = this.$store.getters.fullInfo;
    },
    // submit() {
    //   axios
    //     .post("http://221.215.103.126:9099/m/loginForApp", this.entity)
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    getList() {
      this.list = [];
    },
    changeMdel() {
      this.read =!this.read;
    },
  },
};
</script>
