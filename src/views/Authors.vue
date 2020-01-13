<template>
  <b-container>
    <h1>Авторы</h1>
    <b-link :to="{name: 'author-add'}">Добавить автора</b-link>
    <base-radio :seletedOptions="seletedOptions"
                @on-change="onSortBy($event)"
								label="Сортировать по" />

    <base-filter :selectObj="selectObj"
                 :arrForSort="authors"
                 @on-change="onFilterBy" />

    <Btable :header="tableViewHeader"
            :body="tableData" />

  </b-container>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import * as M from '@/store/library/mutation_types'

import { filters } from '@/helpers'

import BaseFilter from '@/components/BaseFilter'

export default {
  name: 'Authors',

  components: {
    BaseFilter
  },

  data() {
    return {
      tableViewHeader: ['Ф.И.О. автора', 'Дата рождения'],
      seletedOptions: [
        { text: 'Ф.И.О.', value: 'author' },
        { text: 'Дата рождения', value: 'birthDate' }
      ]
    }
  },

  methods: {
    ...mapMutations('library', [
      M.GET_ACT_OBJ,
      M.SORT,
      M.FILTER,
      M.FILTER_CLEAR
    ]),
    ...mapActions('library', ['getAuthorsBE']),
    onSortBy(data) {
      this[M.SORT]({sortBy: data, arrForSort: this.filteredData.length ? this.filteredData : this.authors});
    },
    onFilterBy(data) {
      this[M.FILTER]({filterBy: data.value, books: this.authors, nameOfSelect: data.name})
    }
  },

  destroyed() {
    this[M.FILTER_CLEAR](); 
  },

  computed: {
    ...mapGetters('library', {
      authors:'getAuthors',
      authorsFullName:'getAuthorFullNameById',
      filteredData: 'getFilteredData'
    }),
    tableData() {
      let authors = this.authors;

      this.filteredData.length ? authors = this.filteredData : authors = this.authors;

      return authors.map((author) => ([
        {value: author.author, link: 'Blink', path: `/author/${author.id}`},
        {value: author.birthDate, link: 'Btext'}
      ]))
    },
    selectObj() {
      return filters.selectObjForAuthors(this.authors, this.authorsFullName);
    }
  }
}
</script>