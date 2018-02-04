<template>
  <div v-if="false">
    <input type="text" v-model="inputCount">
    <br />
    <input type="text" v-model="inputMoney">
    <br />
    <button @click="handleSubmit">发出</button>
    <div class="red-packet-example" v-show="flag" @click="handleOpen">
        打开红包
    </div>
    <div v-for="(item, index) in moneyArr" :key="index">
      {{item}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'read-packet',
    data() {
      return {
        inputCount: 0,
        inputMoney: 0,
        count: 0,
        money: 0,
        min: 0.01,
        flag: false,
        moneyArr: [],
      }
    },
    methods: {
      handleSubmit() {
        this.count = +this.inputCount;
        this.money = +this.inputMoney;
        if(this.count < 1) {
          alert("个数不能少于1");
          return;
        }
        if(this.count * this.min > this.money) {
          alert("金额不能少于最小值");
          return;
        }
        this.flag = true;
      },
      handleOpen() {
        let count = this.count;
        let thisMoney = this.money;
        if(count === 0) {
          return;
        }
        if(count === 1) {
          const createRed = Math.round((thisMoney) * 100) / 100;
          this.moneyArr.push(createRed);
          count--;
          this.count = count;
          this.money = 0;
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
      }
    }
  }

</script>
<style lang="scss">
.red-packet-example {
  width: 60px;
  height: 100px;
  background: #db3232;
  color: #fff;
}
</style>
