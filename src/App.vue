<template>
  <div class="main">
    <RedPacket />
    <willPacket />
    <!-- <settingPacket /> -->
  </div>
</template>

<script>
  import RedPacket from './component/red-packet.vue';
  import settingPacket from './component/setting-packet.vue';
  import willPacket from './component/will-packet.vue';
  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
      RedPacket,
      settingPacket,
      willPacket
    }
  }

</script>

<style lang="scss">
  html,
  body {
    margin: 0;
    padding: 0;
    width: 375px;
    height: 100%;
  }

  input,textarea {
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ::-webkit-input-placeholder {
    color: #cccdd2;
  }

  ::-moz-placeholder {
    color: #cccdd2
  }

  /* firefox 19+ */

  :-ms-input-placeholder {
    color: #cccdd2;
  }

  /* ie */

  input:-moz-placeholder {
    color: #cccdd2;
  }

  .main {
    width: 100%;
    height: 100%;
  }

</style>
