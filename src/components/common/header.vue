<template>
  <div class="header">
    <div class="collapse-btn fl" @click="collapseChage">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo fl">后台管理系统</div>
    <div class="rightList fr">
      <div class="btn-fullscreen fl cupo" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
      <div class="user-avator fl">
        <img src="../../assets/img/avatar.png" width="40" class="cupo">
      </div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name fl cupo" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">admin
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <a href="http://www.baidu.com" target="_blank">
            <el-dropdown-item>关于作者</el-dropdown-item>
          </a>
          <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
            <el-dropdown-item>项目仓库</el-dropdown-item>
          </a>
          <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMenu: true,
      fullscreen: false
    }
  },
  methods: {
    collapseChage () {},
    handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    handleCommand (command) {
      if (command === 'loginout') {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 70px;
  background-color: rgb(36, 47, 66);
  position: absolute;
  top: 0;
  left: 0;
  line-height: 70px;
  color: white;
  padding-right: 20px;
}
.collapse-btn {
  font-size: 22px;
  padding: 0 20px;
  cursor: pointer;
}
.logo {
  font-size: 22px;
}
.user-avator {
  margin-left: 20px;
  margin-right: 6px;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.el-dropdown-link {
  color: #fff;
}
.cupo {
  cursor: pointer;
}
</style>
