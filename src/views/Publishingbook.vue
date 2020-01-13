<template>
  <b-container>
    <!-- <h1>Книги, изданные издательством "{{activeObject.Name}}" </h1> -->
{{books}}
    <Btable :header="tableViewHeader"
            :body="tableData" />  

  </b-container>
</template>

<script>
import Btable from '@/components/Btable'
import {mapGetters, mapActions, mapMutations} from 'vuex'
import store from '../store'


export default {
  name: 'Publishingbook',
  props: ['id'],
  components: {
    Btable
  },
  data: () => ({
    tableViewHeader: ['Название', 'Жанр', 'Автор', 'Год издания'],
  }),
  methods: {
    ...mapActions('library', ['getActObj']),
  },
  computed: {
      ...mapGetters('library', {
          books:'getBookFullData'
      }),
      activeId(){
          return this.id;
      },
      activeObject(){
        return store.state.library.activeObject;
      },      
      booksList(){
        return this.books.filter(item => item.publishHouseId == this.id);
      },
      tableData() {

        return this.booksList.map((book) => ([
          {value: book.title, link: 'Blink', path: `/book/${book.id}`},
          {value: book.genre, link: 'Btext'},
          {value: book.author, link: 'Btext'},
          {value: book.publishYear, link: 'Btext'}
        ]))
      },
  },
  created() {
    var activeId=this.activeId;
    this.getActObj({id:this.activeId,pageType:'publishing'});
  },
}
</script>

