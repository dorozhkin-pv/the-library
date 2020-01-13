<template>
  <b-container>
    <div class="pageWrap" v-if="activeObjectParent"> 
      <head-block :headerFields="headerFields" :activeObjectParent="activeObjectParent"></head-block>
      <Bcard :viewData="dataForCartList" />
      <p><b-link class="moreLink" :to="'/authorbooks/'+id">Все Книги автора</b-link></p>
      <b-link :to="{name: 'author-edit', params: { id: activeId }}">Редактировать автора</b-link>

    </div>
    <div class="pageWrap" v-else>
      <p>Автор не найден</p>
      <p>Хотите добавить?</p>
      <b-link :to="{name: 'author-add'}">Добавить автора</b-link>
    </div> 
  </b-container>
</template>

<script>
import HeadBlock from '../components/HeadBlock'
import Bcard from '../components/Bcard'
import store from '../store'

import {mapGetters, mapActions, mapMutations} from 'vuex'
import * as M from '@/store/library/mutation_types'

export default {
  name: 'Author',
  props: ['id'],
  components: {
    HeadBlock,
    Bcard
  },
  data: () => ({
    headerFields:[{
          'title':'Имя',
          'slug':'FirstName'
        },{
          'title':'Фамилия',
          'slug':'LastName'
        },{
          'title':'Отчество',
          'slug':"MiddleName",
          //'url':'link'
        },{
          'title':'год рождения',
          'slug':"BirthDate",
          //'url':'link'
        }]
    
  }),
  methods: {
    ...mapMutations('library', [
      M.FILTER_CLEAR
    ]),
    ...mapActions('library', ['getActObj','getAuthorsBookBE']),
  },

  destroyed() {
    this[M.FILTER_CLEAR](); 
  },

  computed: {
    ...mapGetters('library', {
      booksList:'getBooksDataForCartList',
      getFullActObj:'getActiveObjectByID'
    }),
    dataForCartList() {
      return this.booksList(this.id);
    },
    activeObjectParent(){
      // return this.getFullActObj(this.id,'books');
      return store.state.library.activeObject;
    },
    activeId(){
      return this.id;
    },
    activeObject(){
      return this.getFullActObj(this.id,'authors');
      // return store.state.library.activeObject;
    },  
  },

  created() {
    var activeId=this.activeId;
    this.getAuthorsBookBE(this.activeId);
    this.getActObj({id:this.activeId,pageType:'authors'});
  }
}
</script>

