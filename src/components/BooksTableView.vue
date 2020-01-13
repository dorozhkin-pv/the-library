<template>
  <div>
    <base-radio :seletedOptions="seletedOptions"
                @on-change="onSortBy($event)"
								label="Сортировать по" />

    <base-filter :selectObj="selectObj"
                 :arrForSort="books"
                 @on-change="onFilterBy" />

    <template>
      <paginated-list :header="tableViewHeader"
                      :list-data="tableData"
                      :size="paginationSize"
                      v-if="pagination"/>

      <Btable :header="tableViewHeader"
              :body="tableData"
              v-else />
    </template>                 

  </div>
</template>

<script>
  import { mapGetters, mapMutations,mapActions } from 'vuex';
  import * as M from '@/store/library/mutation_types'

  import { filters } from '@/helpers'

  import BaseFilter from '@/components/BaseFilter'
  import PaginatedList from '@/components/PaginatedList'

  export default {
    name: 'BooksTableView',
    
    components: {
      BaseFilter,
      PaginatedList
    },

    data() {
			return {
        tableViewHeader: ['Название', 'Жанр', 'Автор', 'Год издания'],
				seletedOptions: [
					{ text: 'Жанр', value: 'genre' },
					{ text: 'Автор', value: 'author' },
					{ text: 'Год издания', value: 'publishYear' }
        ],
        paginationSize: 5
			}
    },

    methods: {
      ...mapActions('library', ['getBooksBE','getActiveObjectByID']),
      ...mapMutations('library', [
        M.SORT,
        M.FILTER
      ]),
      onSortBy(data) {
        this[M.SORT]({sortBy: data, arrForSort: this.filteredData.length ? this.filteredData : this.books});
      },
      onFilterBy(data) {
        this[M.FILTER]({filterBy: data.value, books: this.books, nameOfSelect: data.name})
      }
    },

    computed: {
      ...mapGetters('library', {
				books:'getBooksDataForList',
        genres: 'getGenres',
        authors: 'getAuthors',
        publishYear: 'getPublishYear',
        authorsFullName:'getAuthorFullNameById',
        filteredData: 'getFilteredData'
      }),
      tableData() {
        let books = this.books;

        this.filteredData.length ? books = this.filteredData : books = this.books;

        return books.map((book) => ([
          {value: book.title, link: 'Blink', path: `/book/${book.id}`},
          {value: book.genre, link: 'Btext'},
          {value: book.author, link: 'Btext'},
          {value: book.publishYear, link: 'Btext'}
        ]))
      },
      selectObj() {
        return filters.selectObj(this.genres, this.authors, this.publishYear, this.authorsFullName);
      },
      pagination() {
        if (this.filteredData.length) return this.filteredData.length > this.paginationSize;
        else return this.books.length > this.paginationSize;
      }
    },

    created() {
      this.getBooksBE();
    },
  }
</script>

<style lang="scss">
	.filters-group {
    display: flex;
    justify-content: space-between;
    .filter {
      width: 33%;
      margin-right: 15px;
    }
  }
  @media(max-width: 576px) {
    .filters-group {
      flex-direction: column;
      .filter {
        width: 50%;
        margin: 0;
        margin-bottom: 15px;
      }
    }
  }

</style>