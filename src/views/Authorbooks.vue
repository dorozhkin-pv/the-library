<template>
  <b-container>
    <h1>Книги автора "{{activeObject.FirstName}} {{activeObject.MiddleName}} {{activeObject.LastName}}"</h1>
		
		<Btable :header="tableViewHeader"
						:body="tableData" />


  </b-container>
</template>

<script>
import Btable from '@/components/Btable'
import {mapGetters, mapActions, mapMutations} from 'vuex'
import store from '../store'

export default {
  name: 'Authorbooks',
  props: ['id'],
    components: {
        Btable
    },
    methods: {
      ...mapActions('library', ['getBookData','getActObj','getBooksByAuth','getAuthorsBookBE']),
    },
    computed: {
      ...mapGetters('library', {
        books:'getBooksDataForList',
        booksList:'getBooksDataForCartList',
      }),
      activeId(){
        return this.id;
      },
      activeObject(){
        return store.state.library.activeObject;
      }, 
      tableData() {

        return this.dataForCartList.map((book) => ([
          {value: book.title, link: 'Blink', path: `/book/${book.id}`},
          {value: book.genre, link: 'Btext'},
          {value: book.author, link: 'Btext'},
          {value: book.publishYear, link: 'Btext'}
        ]))
      },
      dataForCartList() {
        return this.booksList(this.id);
      }
    },  
    data() {
			return {
				tableViewHeader: ['Название', 'Жанр', 'Автор', 'Год издания']
			}
    },
    created() {
        let activeId=this.activeId;
        this.getAuthorsBookBE(this.activeId);
        this.getActObj({id:this.activeId,pageType:'authors'});
    }
}
</script>