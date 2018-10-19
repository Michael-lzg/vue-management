<template>
  <div>
    <div class="tips">vue-cropperjs：一个封装了 cropperjs 的 Vue 组件，支持图片剪裁。 访问地址：
      <a href="https://github.com/Agontuk/vue-cropperjs" target="_blank" class="c1">vue-cropperjs</a>
    </div>
    <div class="crop-demo">
      <img :src="activeImg" class="pre-img" width="150">
      <span class="crop-demo-btn">选择图片
        <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage($event)" />
      </span>
    </div>

    <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
      <vue-cropper ref='cropper' :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" style="width:100%;height:300px;"></vue-cropper>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <i class="icon-yingyongguanli iconfont"></i>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
export default {
  data () {
    return {
      defaultImg: require('../../assets/img/kobe.jpg'),
      activeImg: '',
      dialogVisible: false,
      imgSrc: ''
    }
  },
  name: 'upload',
  components: { VueCropper },
  methods: {
    setImage (e) {
      const file = e.target.files[0]
      if (!file.type.includes('image/')) {
        return
      }
      const reader = new FileReader()
      reader.onload = (event) => {
        this.dialogVisible = true
        this.imgSrc = event.target.result
        this.$refs.cropper && this.$refs.cropper.replace(event.target.result)
      }
      reader.readAsDataURL(file)
    },
    cropImage () {
      this.activeImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
    },
    cancel () {
      this.dialogVisible = false
      this.activeImg = this.defaultImg
    }
  },
  created () {
    this.activeImg = this.defaultImg
  }
}
</script>

<style scoped>
.tips {
  padding: 15px 0;
  margin: 10px 0;
}
.crop-demo-btn {
  position: relative;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-left: 30px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
}
.crop-input {
  position: absolute;
  width: 100px;
  height: 40px;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
</style>
