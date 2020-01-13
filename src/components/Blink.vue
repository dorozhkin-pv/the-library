<template>
  <b-link :to="link"><slot></slot></b-link>
</template>

<script>
  export default {
    name: 'Blink',

    props: {
      link: String
    }
  }
</script>

