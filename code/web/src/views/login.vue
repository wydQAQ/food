<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle" class="filter"></div>
      <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
        <source src="../assets/coverr-matukad-island-1558720187591.mp4" type="video/mp4">浏览器不支持 video 标签，建议升级浏览器。
        <!-- <source src="PATH_TO_WEBM" type="video/webm"/> -->
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="poster hidden" v-if="!vedioCanPlay">
        <img :style="fixStyle" src="../assets/coverr-matukad-island-1558720187591.jpg" alt>
      </div>
      <div class="login-wrap">
        <form action id="user-login">
          <i :class="{icon:act_index ===1}" class="iconfont icon-yonghu icon-one"></i>
          <input
            :class="{active:act_index ===1}"
            @focus="act_index =1"
            type="text"
            name="username"
            v-model="username"
            placeholder="用户名"
          >
          <i :class="{icon:act_index ===2}" class="iconfont icon-mima icon-two"></i>
          <input
            :class="{active:act_index ===2}"
            @focus="act_index =2"
            type="password"
            name="password"
            v-model="password"
            placeholder="请输入密码"
          >
          <span class="submit-btn" @click="openFullScreen" type="primary">登录</span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/font/iconfont.css";
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "homepage-hero-module",
  data() {
    return {
      vedioCanPlay: false,
      fixStyle: "",
      username: "",
      password: "",
      act_index: ""
    };
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true;
    },
    //登录
    getUserData() {
      let t = this.username;
      console.log(t);
      let h = this.password;
      console.log(h);
    },
    //加载过渡方法
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        // 跳转到订餐页
        this.$router.push("/about");
      }, 1000);
    }
  },
  mounted: function() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth;
      const windowHeight = document.body.clientHeight;
      const windowAspectRatio = windowHeight / windowWidth;
      let videoWidth;
      let videoHeight;
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth;
        videoHeight = videoWidth * 0.5625;
        this.fixStyle = {
          height: windowWidth * 0.5625 + "px",
          width: windowWidth + "px",
          "margin-bottom": (windowHeight - videoHeight) / 2 + "px",
          "margin-left": "initial"
        };
      } else {
        videoHeight = windowHeight;
        videoWidth = videoHeight / 0.5625;
        this.fixStyle = {
          height: windowHeight + "px",
          width: windowHeight / 0.5625 + "px",
          "margin-left": (windowWidth - videoWidth) / 2 + "px",
          "margin-bottom": "initial"
        };
      }
    };
    window.onresize();
  }
};
</script>


<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.homepage-hero-module,
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img,
.video-container video {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
}

.login-wrap {
  // border: 1px solid #ccc;
  width: 450px;
  height: 300px;
  position: relative;
  z-index: 10;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -225px;
}
#user-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  input {
    outline: none;
    width: 280px;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #ccc;
    opacity: 0.5;
    padding-left: 20px;
    color: #000;
  }
  .submit-btn {
    width: 280px;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #ccc;
    opacity: 0.3;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    &:hover {
      background-color: aqua;
      opacity: 0.5;
    }
  }
  .icon-one {
    position: absolute;
    top: 38px;
    left: 342px;
    font-size: 23px;
  }
  .icon-two {
    position: absolute;
    right: 83px;
    font-size: 28px;
  }
  .active {
    color: #10903d;
    border: 2px solid #10903d;
    opacity: 1;
  }
  .icon::before {
    color: #10903d;
  }
}
</style>
