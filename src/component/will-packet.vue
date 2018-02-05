<template>
  <div class="will-packet"> 
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
      <div class="will-packet__animation"></div>
      <div class="will-packet__open">開</div>
    </div>
  </div>
</template>
<script>
export default {
  
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
    height: 50px;
    border-top-left-radius:0;
    border-top-right-radius:0;
    border-bottom-left-radius:150px 50px;
    border-bottom-right-radius:0150px 50px;
    background: #d85940;
    animation: arcanimate 1s;
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
  }
  .will-packet__content {
    position: absolute;
    width: 310px;
    height: 410px;
    border-radius: 5px;
    background: #cd523d;
  }
}
@keyframes arcanimate {
  0% {
    height: 50px;
    border-radius: 0 0 100% 100%;
  }
  50% {
    height: 0;
    border-radius: 0;
    background: #cd523d;
  }
  100% {
    height: 50px;
    background: #cd523d;
    border-top-left-radius:150px 50px;
    border-top-right-radius:150px 50px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
  }
}
</style>
