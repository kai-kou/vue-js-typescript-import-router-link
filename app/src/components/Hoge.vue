<template>
  <router-link to="/">
    リンク！
  </router-link>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
  } from 'vue-property-decorator';
  
  @Component
  export default class Hoge extends Vue {}
</script>
