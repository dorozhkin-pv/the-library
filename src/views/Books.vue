<template>
  <b-container>
    <h1>Книги</h1>
    <b-link :to="{name: 'add'}">Добавить книгу</b-link>
    <base-radio :seletedOptions="seletedOptions"
                @on-change="changeComponent($event)"
                label="" />      
  
    <books-table-view v-if="toggleComponent" />

    <Bcard v-else :viewData="books" />

  </b-container>
</template>

<script>
import BooksTableView from '@/components/BooksTableView'
import Bcard from '@/components/Bcard'

import {mapGetters, mapMutations} from 'vuex'
import * as M from '@/store/library/mutation_types'

export default {
  name: 'Books',

  components: {
    BooksTableView,
    Bcard
  },

  data() {
    return {
      toggleComponent: true,
      seletedOptions: [
        { text: 'Таблица', value: 'table' },
        { text: 'Плитка', value: 'block' }
      ]
    }
  },

  computed: {
    ...mapGetters('library', {
      books:'getBooksDataForList',
      filteredData: 'getFilteredData'
    }),
  },

  methods: {
    ...mapMutations('library', [
      M.FILTER_CLEAR
    ]),
    changeComponent(data) {
      data == 'table' ? this.toggleComponent = true : this.toggleComponent = false;
      this[M.FILTER_CLEAR]();
    }
  },

  destroyed() {
    this[M.FILTER_CLEAR](); 
  }
}
</script>