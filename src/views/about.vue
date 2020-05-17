<template>
  <div class="count">
    <div>
      <input type="text" width="100" placeholder="test" />
    </div>
    {{ count }}
    <button class="button" @click="increment">
      +
    </button>

    <div class="container">
      <div class="info"></div>
    </div>

    <div>
      {{ data }}
    </div>

    <button @click="setData">设置data里的数据</button>

    <p>{{ userInfo }}</p>
    <p>2234</p>
    <p>1223</p>
    <p>1223</p>
    <el-button :plain="true" >打开消息提示</el-button>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <div
      class="bg"
      style="background-image: url('https://comic-alive.jp/archives/010/201709/ed04bc40315a43455b9dbebea669a204.png');"
    >
      万物皆有缝隙，这是光进来的地方
    </div>

    <img
      src="https://comic-alive.jp/archives/010/201709/ed04bc40315a43455b9dbebea669a204.png"
      alt=""
    />
    <img
      class="img"
      src="@/assets/images/ed04bc40315a43455b9dbebea669a204.gif"
      alt="背景图"
    />

    <!-- <div class="placeholder" style="">
      <img :src="img.src" class={{ loaded: this.img.isLoad, 'img-small': true }}
      @load="imgLoad" /> {{ imgLoadNode() }}
      <div style="padding-bottom: 66.6%;"></div>
    </div> -->
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
    <p>1223</p>
  </div>
</template>

<script lang="tsx">
import axios from 'axios' // 引入axios
import { Vue, Component } from 'vue-property-decorator'
import { VNode, CreateElement } from 'vue'
import { Module } from 'webpack'
import { mapGetters } from 'vuex'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

// import data from '../mock/global.ts'

@Component
export default class About extends Vue {
  @Getter('userInfo') userInfo
  @Getter('data') data

  private count: number = 0
  private img: any = {
    src:
      require('@/assets/images/ed04bc40315a43455b9dbebea669a204.gif'),
    'data-large':
      'https://comic-alive.jp/archives/010/201709/ed04bc40315a43455b9dbebea669a204.png',
    isLoad: false,
    isLoad2: false
  }




  get name () {
    return mapGetters({
      getterpmInfo: 'getterpmInfo'
    })
  }

  private created (): void {
    this.$store.dispatch({
      type: 'global/REQUEST_LOGIN'
    })

    // axios.get('/mock/news').then(res => { // url即在mock.js中定义的
    //   console.log(res.data) // 打印一下响应数据
    // })
  }

  private setData ():void{
    this.$store.dispatch({
      type: 'global/SET_DATA'
    })
  }

  private increment (e: MouseEvent): void {
    e.preventDefault()
    this.count++
  }

  private imgLoad (): void {
    this.img.isLoad = true
  }

  private imgLoad2 (): void {
    this.img.isLoad2 = true
  }

  private imgLoadNode ():VNode {
    if (this.img.isLoad) {
      return (
        <img
          src={this.img['data-large']}
          class={{ loaded: this.img.isLoad2 }}
          onload={this.imgLoad2}
        />
      )
    }
  }

  // private render (h: CreateElement): VNode {
  //   return (

  //   )
  // }
}

</script>

<style lang="less" scoped>
.count {
  font-size: 20px;
  color: rgb(12, 122, 123);
}
input {
  color: blueviolet;
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
  background-image: url("../assets/images/ed04bc40315a43455b9dbebea669a204.gif");
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
