<template>
  <div>
    <v-uploader @done="uploadDone" :preview-width="140" :preview-height="100"></v-uploader>
  </div>
</template>

<script>
import Vue from 'vue'
import vUploader from 'v-uploader'
const uploaderConfig = {
  uploadFileUrl: 'https://jsonplaceholder.typicode.com/posts/',
  deleteFileUrl: 'https://jsonplaceholder.typicode.com/posts/',
  showMessage: (message) => {
    alert(JSON.stringify(message))
  }
}
Vue.use(vUploader, uploaderConfig)
export default {
  methods: {
    uploadDone (files) {
      if (files && Array.isArray(files) && files.length) {
        alert('成功了')
      }
    }
  }
}
</script>

<style scoped>

</style>
