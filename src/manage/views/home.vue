<template>
  <div class="home">
    {{userInfo}}
    <HelloWorld msg="Welcome to Your manage" />
  </div>
</template>

<script>
import HelloWorld from '@manage/components/HelloWorld.vue'
import axios from 'axios' // 引入axios
import { mapGetters } from 'vuex'

export default {
  name: 'Home',

  created () {
    this.$store.dispatch({
      type: 'global/REQUEST_LOGIN',
      data: '12345'
    })
  },

  computed: {
    ...mapGetters(['userInfo'])
  },

  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
.count {
  font-size: 20px;
  color: rgb(12, 122, 123);
}

.button {
  height: 80px;
  width: 200px;
}

.count a {
  color: #000;
}

::placeholder {
  color: red;
  text-decoration: underline;
  direction: rtl;
  unicode-bidi: bidi-override;
}

.container {
  /* position: absolute; */
  width: 200px;
  height: 200px;
  border: 5px solid rgb(118, 218, 255);
  transform: translate(0%, 0%);
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  .info {
    width: 190px;
    height: 190px;
    position: relative;
    margin: 5px;
    background-color: rgb(118, 218, 255);
    border-radius: 50%;
    overflow: hidden;
    &::after,
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: -50%;
      min-width: 400px;
      min-height: 400px;
      background: #fff;
      margin: auto;
      animation: roateOne 10s linear infinite;
    }

    &::before {
      bottom: 50px;
      border-radius: 45%;
    }
    &::after {
      bottom: 40px;
      opacity: 0.5;
      border-radius: 47%;
    }
  }
}

@keyframes roateOne {
  0% {
    transform: rotateZ(0deg);
  }

  50% {
    transform: rotateZ(180deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

.bg {
  height: 150px;
  background: no-repeat 50%;
  background-attachment: fixed !important;
  background-size: cover;
  color: red;
  font-size: 50px;
}

.placeholder {
  background-color: #f6f6f6;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.placeholder img {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 1s linear;
}

.placeholder img.loaded {
  opacity: 1;
}

.img-small {
  filter: blur(5px);
  transform: scale(1);
}
</style>
