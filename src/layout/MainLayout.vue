<template>
    <div class="main-layout">
        <b-navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import BNavbar from '../components/BNavbar'

export default {
    name: 'MainLayout',
    components: {
        BNavbar
    }
}
</script>

<style lang="scss" scoped>

</style>