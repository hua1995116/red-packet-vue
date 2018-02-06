<template>
  <div class="setting-packet" v-show="state === 0">
    <div class="setting-packet__title">
      <span>取消</span>
      <h3>发红包</h3>
      <span>更多</span>
    </div>
    <div class="setting-packet__table">
      <div class="setting-packet__packet-li">
        <div class="setting-packet__packet-li__label">总金额</div>
        <input class="setting-packet__packet-li__text" type="text" placeholder="0.00" maxlength="6" v-model="inputMoney">
        <div class="setting-packet__packet-li__unit">元</div>
      </div>
      <div class="setting-packet__packet-li">
        <div class="setting-packet__packet-li__label">红包个数</div>
        <input class="setting-packet__packet-li__text" type="text" placeholder="填写个数" maxlength="6" v-model="inputCount">
        <div class="setting-packet__packet-li__unit">个</div>
      </div>
      <div class="setting-packet__packet-li">
        <textarea name="" class="setting-packet__packet-li__textarea" rows="3" placeholder="恭喜发财,大吉大利" v-model="inputTitle"></textarea>
      </div>
      <div class="setting-packet__value">
        <span>¥</span>{{now}}
        <span>{{inputMoney ? inputMoney : '0.00'}}</span>
      </div>
      <div class="settin-packet__submit" :class="{clicked: iSclicked}" @click="handleSubmit">塞前进红包</div>
    </div>
  </div>
</template>
<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        inputCount: '',
        inputMoney: '',
        inputTitle: '',
        iSclicked: false,
      }
    },
    created() {

    },
    computed: {
      now: function () {
        return Date.now()
      },
      getMoney: function() {
        let num = this.inputMoney;
        num += '';
        num = num.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
        if (/^0+/) //清除字符串开头的0
          num = num.replace(/^0+/, '');
        if (!/\./.test(num)) //为整数字符串在末尾添加.00
          num += '.00';
        if (/^\./.test(num)) //字符以.开头时,在开头添加0
          num = '0' + num;
        num += '00'; //在字符串末尾补零
        num = num.match(/\d+\.\d{2}/)[0];
        return num;
      }
    },
    methods: {
      handleSubmit() {
        if (this.iSclicked) {
          this.$store.commit('initMoney', {
            inputMoney: +this.inputMoney,
            inputCount: +this.inputCount,
            inputTitle: this.inputTitle,
          });
          this.$store.commit('setState', 1);
          // alert('success');
        }
      }
    },
    watch: {
      inputCount: function () {
        const inputCount = +this.inputCount;
        const inputMoney = +this.inputMoney;
        if (inputCount < 1) {
          alert("个数不能少于1");
          return;
        }
        if (inputCount > 0 && inputMoney > 0) {
          this.iSclicked = true;
        } else {
          this.iSclicked = false;
        }
      },
      inputMoney: function () {
        const inputCount = +this.inputCount;
        const inputMoney = +this.inputMoney;
        if (inputCount * 0.01 > inputMoney) {
          alert("金额不能少于最小值");
          return;
        }
        if (inputCount > 0 && inputMoney > 0) {
          this.iSclicked = true;
        } else {
          this.iSclicked = false;
        }
      }
    },
    computed: mapState({
      state: state => state.state
    })
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
        width: 80px;
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
    .settin-packet__submit {
      width: 270px;
      height: 45px;
      text-align: center;
      line-height: 45px;
      background: #e9c1b7;
      color: #fff;
      border-radius: 5px;
      margin: 40px auto 0; // background: #ea5f39;
      &.clicked {
        background: #ea5f39;
      }
    }
  }

</style>
