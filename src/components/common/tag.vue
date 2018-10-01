<template>
  <div class="tagList clearfix" v-if="tagList.length>0">
    <div class="tagItem fl" v-for="(item,index) in tagList" :key="index" :class="{'active':item.path === $route.fullPath}">
      <span @click="changeUrl(index)">{{item.title}}</span>
      <span class="del" @click="delTag(index)">X</span>
    </div>
    <div class="tagItem active fr">
      <span @click="closeAll">关闭所有标签</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['tagList'])
  },
  methods: {
    openMenu () {
      alert(999)
    },
    delTag (index) {
      if (this.tagList.length === 1) {
        this.$router.push({
          path: '/admin'
        })
      } else {
        if (index === this.tagList.length - 1) {
          this.$router.push({
            path: this.tagList[index - 1].path
          })
        } else {
          if (this.tagList[index].path === this.$route.fullPath) {
            this.$router.push({
              path: this.tagList[index + 1].path
            })
          }
        }
      }
      this.tagList.splice(index, 1)
      this.$store.commit('updateTagList', this.tagList)
    },
    changeUrl (index) {
      this.$router.push({
        path: this.tagList[index].path
      })
    },
    closeAll () {
      this.$router.push({
        path: '/admin'
      })
      this.$store.commit('updateTagList', [])
    },
    setTags (route) {
      const isActiveRouter = this.tagList.some(item => {
        return item.path === route.fullPath
      })
      if (!isActiveRouter) {
        this.tagList.push({
          title: route.meta.title,
          path: route.fullPath
        })
        this.$store.commit('updateTagList', this.tagList)
      }
    }
  },
  watch: {
    $route (newValue, oldValue) {
      this.setTags(newValue)
    }
  },
  created () {
    this.setTags(this.$route)
  }
}
</script>

<style scoped lang="scss">
.tagList{
  width: 100%;
  padding: 5px 0;
  .tagItem{
    padding: 5px 8px;
    margin-right: 6px;
    border-radius: 6px;
    border: 1px solid #e9eaec;
    color: #666;
    font-size: 12px;
    cursor: pointer;
    .del{
      padding-left: 6px;
    }
  }
  .active{
    color: white;
    background-color: #409EFF !important;
    border: 1px solid #409EFF !important;
  }
}
</style>
