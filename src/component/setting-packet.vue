<template>
  <div class="setting-packet">
    <div class="setting-packet__title">
      <span>取消</span>
      <h3>发红包</h3>
      <span>更多</span>
    </div>
    <div class="setting-packet__table">
      <div class="setting-packet__packet-li">
        <div class="setting-packet__packet-li__label">总金额</div>
        <input class="setting-packet__packet-li__text" type="text" placeholder="0.00" maxlength="6">
        <div class="setting-packet__packet-li__unit">元</div>
      </div>
      <div class="setting-packet__packet-li">
        <div class="setting-packet__packet-li__label">红包个数</div>
        <input class="setting-packet__packet-li__text" type="text" placeholder="0.00" maxlength="6">
        <div class="setting-packet__packet-li__unit">个</div>
      </div>
      <div class="setting-packet__packet-li">
        <textarea name="" class="setting-packet__packet-li__textarea" rows="3" placeholder="恭喜发财,大吉大利"></textarea>
      </div>
      <div class="setting-packet__value">
        <span>¥</span>
        <span>0.00</span>
      </div>
      <div class="settin-packet__submit">塞前进红包</div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.setting-packet {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  line-height: 30px;
  font-size: 16px;
  .setting-packet__title {
    display: flex;
    text-align: center;
    span {
      flex: 1;
    }
    h3 {
      flex: 4;
      font-weight: 500;
    }
  }
  .setting-packet__packet-li {
    display: flex;
    margin: 20px 15px;
    padding: 10px 10px;
    border-radius: 5px;
    background: #fff;
    &__label {
      flex: 1;
    }
    &__text {
      font-size: 16px;
      width: 60px;
      flex-basis: 60px;
    }
    &__unit {
      flex-basis: 10px;
    }
    &__textarea {
      width: 100%;
      resize: none;
      font-size: 16px;
    }
  }
  .setting-packet__value {
    text-align: center;
    font-size: 16px;
    vertical-align: top;
    span {
      font-size: 40px;
      font-weight: 900;
    }
  }

}
</style>

