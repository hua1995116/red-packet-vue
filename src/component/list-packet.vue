<template>
  <div class="list-packet">
    <div class="list-packet__content">
      <div class="setting-packet__title">
        <span>取消</span>
        <h3>微信红包</h3>
        <span>红包记录</span>
      </div>
      <div class="list-packet__redcloth"></div>
      <div class="list-packet__info">
        <h5>华益峰的红包</h5>
        <p>恭喜发财，大吉大利</p>
      </div>
      <div class="list-packet__head">
        <img src="http://www.qiufengh.com/static/img/hua1995116.jpg" alt="">
      </div>
    </div>
    <div class="list-packet__waiting">红包金额0.10,等待对方领取</div>
    <div class="list-packet__list">
      <div class="list-packet__li">
        <div class="list-packet__li-head">
          <img src="http://www.qiufengh.com/static/img/hua1995116.jpg" alt="">
        </div>
        <div class="list-packet__li-content">
          <p>华益峰</p>
          <p>01-24 14:40</p>
        </div>
        <div class="list-packet__li-money">0.01元</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.list-packet {
  width: 100%;
  height: 100%;
  .list-packet__content {
    width: 100%;
    height: 230px;
    background:#f1f1f1;
  }
  .setting-packet__title {
    padding:0 10px;
    display: flex;
    text-align: center;
    color: #fbd6a6;
    background: #d85940;
    line-height: 56px;
    font-size: 16px;
    span:nth-of-type(1) {
      text-align: left;
    }
    span:nth-of-type(2) {
      text-align: right;
    }
    span {
      flex: 1;
    }
    h3 {
      flex: 3;
      font-weight: 500;
    }
  }
  .list-packet__redcloth {
    width: 100%;
    height: 50px;
    border-top-left-radius:0;
    border-top-right-radius:0;
    border-bottom-left-radius:150px 50px;
    border-bottom-right-radius:150px 50px;
    background: #d85940;
    box-shadow: 0 1px 2px 0px #a13625;
  }
  .list-packet__info {
    width: 100%;
    margin-top:50px;
    text-align: center;
    p {
      font-size: 14px;
      margin:5px 0;
    }
  }
  .list-packet__head {
    position: absolute;
    top: 50px;
    width: 100%;
    height: 60px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 5px;
      border: 1px solid #fbd6a6;
    }
  }
  .list-packet__waiting {
    color:#888888;
    padding: 8px;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
  }
  .list-packet__li {
    display: flex;
    padding: 12px 14px;
    border-bottom: 1px solid #ddd;
    &-head {
      flex-basis: 60px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
      }
    }
    &-content {
      flex:3;
      p:nth-of-type(2) {
        font-size: 14px;
        color: #bababa;
      }
    }
    &-money {
      flex: 1;
      line-height: 44px;
      text-align:right;
    }
  }
}
</style>

