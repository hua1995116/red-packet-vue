<template>
  <div class="will-packet" v-show="state === 1">
    <div class="will-packet__bg"></div>
    <div class="will-packet__content">
      <div class="will-packet-top">
        <div class="will-packet__head">
          <img src="http://www.qiufengh.com/static/img/hua1995116.jpg" alt="">
        </div>
        <div class="will-packet__name">hua1995116</div>
        <div class="will-packet__p">给你发了一个红包</div>
        <div class="will-packet__title">恭喜发财，大吉大利</div>
      </div>
      <div class="will-packet__animation">
        <div class="will-packet__an__top">
          <div class="will-packet__an__inner" :class="{arcanimateTop: openAn}"></div>
        </div>
        <div class="will-packet__an__bottom" :class="{arcanimateBottom: openAn}"></div>
      </div>
      <div class="will-packet__open" :class="{rotateAn: rotateAn}" @click="openPacket">開</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      openAn: false,
      rotateAn: false,
    }
  },
  methods: {
    openPacket () {
      this.rotateAn = true;
      this.handleopen();
      setTimeout(() => {
        this.openAn = true;
      }, 1500)
      setTimeout(() => {
        this.$store.commit('setState', 2);
      }, 2000)
    },
    handleopen() {
      debugger;
      let count = this.count;
      let thisMoney = this.money;
      if(count === 0) {
        return;
      }
      if(count === 1) {
        count--;
        const createRed = Math.round((thisMoney) * 100) / 100;
        this.moneyArr.push(createRed);
        this.count = count;
        this.money = 0;
        this.$store.commit('setOpenCase', {
          count: this.count,
          money: this.money,
          moneyArr: this.moneyArr
        })
        return;
      }
      const max = thisMoney / count * 2;
      let money = Math.random() * max;
      money = money < this.min ? this.min : money;
      count--;
      const createRed = Math.round((money) * 100) / 100;
      this.moneyArr.push(createRed);
      this.count = count;
      this.money = thisMoney - money;
      this.$store.commit('setOpenCase', {
        count: this.count,
        money: this.money,
        moneyArr: this.moneyArr
      })
    }
  },
  computed: mapState({
    state: state => state.state,
    count: state => state.count,
    money: state => state.money,
    min: state => state.min,
    moneyArr: state => state.moneyArr,
  })
}
</script>
<style lang="scss">
.will-packet {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .will-packet__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5)
  }
  .will-packet-top {
    width: 100%;
    height: 230px;
    overflow: hidden;
    background: #d85940;
    color: #f2bd91;
    .will-packet__head {
      width: 100%;
      height: 60px;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        border: 1px solid #fff;
      }
    }
    .will-packet__name {
      font-size: 20px;
      text-align: center;
    }
    .will-packet__p {
      font-size: 14px;
      text-align: center;
    }
    .will-packet__title {
      font-size: 25px;
      margin: 20px 0;
      text-align: center;
    }
  }
  .will-packet__animation {
    width: 310px;
    height: 100px;
    position: absolute;
    top: 180px;
    .will-packet__an__top {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: flex-end;
      .will-packet__an__inner {
        width: 100%;
        height: 0px;
        border-top-left-radius:150px 50px;
        border-top-right-radius:150px 50px;
        border-bottom-left-radius:0;
        border-bottom-right-radius:0;
        background: #cd523d;
        // animation: arcanimateTop 0.3s;

        &.arcanimateTop {
          animation: arcanimateTop 0.3s;
          animation-fill-mode: forwards;
          animation-delay: 0.2s;
        }
      }
    }
    .will-packet__an__bottom {
      width: 100%;
      height: 50px;
      border-top-left-radius:0;
      border-top-right-radius:0;
      border-bottom-left-radius:150px 50px;
      border-bottom-right-radius:150px 50px;
      background: #d85940;
      box-shadow: 0 1px 2px 0px #a13625;
      transform-origin: bottom;
      // animation: arcanimateBottom 0.3s;
      &.arcanimateBottom {
        animation: arcanimateBottom 0.3s;
        animation-fill-mode: forwards;
      }
    }
  }
  .will-packet__open {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 235px;
    left: 50%;
    margin-left: -45px;
    border-radius: 100%;
    width: 90px;
    height: 90px;
    font-size: 40px;
    background: #ddbc84;
    border: 1px solid #c3abab;
    box-shadow: 0 0 0px 5px #ddbc84;
    color: #413f3d;
    // animation: rotateAn 2s;
    transform-origin: center center;
    &.rotateAn {
      animation: rotateAn 2s;
      animation-timing-function:cubic-bezier(.1,.86,.59,1.01);
    }
  }
  .will-packet__content {
    position: absolute;
    width: 310px;
    height: 410px;
    border-radius: 5px;
    background: #cd523d;
  }
}

@keyframes rotateAn {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(720deg);
  }
}

@keyframes arcanimateTop {
  0% {
    height: 0;
    border-radius: 0;
  }
  100% {
    height: 50px;
    border-top-left-radius:150px 50px;
    border-top-right-radius:150px 50px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
  }
}
@keyframes arcanimateBottom {
  0% {
    height: 50px;
  }
  100% {
    height: 0;
    border-radius: 0;
  }
}
</style>
