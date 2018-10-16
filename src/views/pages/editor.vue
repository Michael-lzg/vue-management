<template>
  <div>
    <div class="tips">Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。 访问地址：
      <a href="https://github.com/surmon-china/vue-quill-editor" target="_blank" class="c1">Vue-Quill-Editor</a>
    </div>
    <div class="tips">Tinymce：各种功能强大富文本编辑器，还能去格式化。 访问地址：
      <a href="https://github.com/tinymce/tinymce" target="_blank" class="c1">Tinymce</a>
    </div>
    <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
    <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    }
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.content = html
    },
    submit () {
      console.log(this.content)
      this.$message.success('提交成功！')
    }
  },
  components: {
    quillEditor
  }
}
</script>

<style scoped>
.tips{
  padding: 10px 0;
}

.editor-btn{
  margin-top: 20px;
}
</style>
<style>
.ql-editor{
  height: 400px !important;
}
</style>
