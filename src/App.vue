<template>
  <div ref="appqq" class="app" @animationiteration="change_background"> 
    <div class="navbar">
      <navbar></navbar>
        <router-view v-slot="{ Component }">
          <transition name="page-opacity" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
    </div>
  </div>
</template>

<script setup>
import feather from "feather-icons";
feather.replace();

const isMobile = () => {
  return !!window.navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
};

</script>


<script>
  export default {
    methods: {
      change_background()  {
        var nnn = getRandom(0,88.999)
        var qq = "url(background/";
        var newbackground = qq.concat(nnn).concat(".png)");
        console.log(nnn);
        const appselector = this.$refs.appqq;
        appselector.style.setProperty('--after-background-image', newbackground);
        return -1;
      }
    },
    mounted() {
      console.log("meow\n");
      const element = this.$refs.appqq;
      console.log(element);
      this.change_background();
    }
  };
  function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
  };
</script>


<style>
.app {
  position: relative;
  z-index: 0;
  min-width: fit-content;
  min-height: 100vh;
  background-color: rgb(31 41 55);
  background-image: url("/keyVisualImg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: overlay;
  color: white;
}

.app::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.9;
  background-image: var(--after-background-image, url("/background/77.png"));
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: overlay;
  animation: background-flicker 8.8s linear infinite;
}


.page-opacity-enter-from{
  opacity: 0;
  transform: translateY(-100px);
}

.page-opacity-enter-active{
  transition: all 0.3s ease-out;
}

.page-opacity-leave-to{
  opacity: 0;
  transform: translateY(100px);
}

.page-opacity-leave-active{
  transition: all 0.3s ease-in;
}


@keyframes background-flicker {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0.03;
  }
  16% {
    opacity: 0.9;
  }
  83% {
    opacity: 0.9;
  }
  96% {
    opacity: 0.015;
  }
  100% {
    opacity: 0;
  }
}

.navbar {
  position: relative;
  z-index: 2;
}
</style>