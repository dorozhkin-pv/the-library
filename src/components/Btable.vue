<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" v-for="(name, index) in header" :key="index">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in body" :key="index">
          <td v-for="(item, index) in book" :key="index">
            <component :is="item.link"
                       :link="item.path">
              {{ item.value }}
            </component>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Blink from '@/components/Blink'
  import Btext from '@/components/Btext'

  export default {
    name: 'Btable',

		props: {
      header: Array,
      body: Array
    },

    components: {
      Blink,
      Btext
    }
  }
</script>

<style lang="scss">
</style>