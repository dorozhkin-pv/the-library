<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import MainLayout from './layout/MainLayout'
import EmptyLayout from './layout/EmptyLayout'

export default {
  components: {
    MainLayout,
    EmptyLayout
  },
  
  computed: {
    layout() {
      return this.$route.meta.layout + '-layout';
    }
  }
}
</script>  

<style lang="scss">
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

</style>
