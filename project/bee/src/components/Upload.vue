<template>
  <!-- <a-upload
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
 <a-upload> -->
    <!--  <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <a-icon :type="loading ? 'loading' : 'plus'" />
      <div class="ant-upload-text">
        Upload
      </div>
     </div>
     </a-upload> -->
     <div>
    <form @submit.prevent="save">
          <p>
            <b>新增</b>
          </p>
          <p class="p1">车型名称</p>
          <input type="text" name="name" v-model="entity.vehicleModel" />
          <br />
          <!-- <p class="p1">车型图片</p>
          <input type="file" name="password" v-model="entity.imageUrl" />
          <br /> -->
          <button id="anniu" class="btn btn-success" type="submit">提交</button>
        </form>
  </div>
</template>
<script>
import { addVehicleModel } from "../api/api";
// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }
export default {
  data() {
    return {
      loading: false,
      entity: {
      imageUrl: 'http://mifenghz.oss-cn-hangzhou.aliyuncs.com/1597973066940_000_huohu',
      vehicleModel:'',
      },
    };
  },
  methods: {
      save() {
      addVehicleModel(this.entity).then((res) => {
        if (res.data.status==0) {
          const response = res.data;
          
          this.$router.push("/heade");
        }
      });
    },
    // handleChange(info) {
    //   if (info.file.status === 'uploading') {
    //     this.loading = true;
    //     return;
    //   }
    //   if (info.file.status === 'done') {
    //     // Get this url from response in real world.
    //     getBase64(info.file.originFileObj, imageUrl => {
    //       this.imageUrl = imageUrl;
    //       this.loading = false;
    //     });
    //   }
    // },
    // beforeUpload(file) {
    //   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    //   if (!isJpgOrPng) {
    //     this.$message.error('You can only upload JPG file!');
    //   }
    //   const isLt2M = file.size / 1024 / 1024 < 2;
    //   if (!isLt2M) {
    //     this.$message.error('Image must smaller than 2MB!');
    //   }
    //   return isJpgOrPng && isLt2M;
    // },
  },
};
</script>
<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
