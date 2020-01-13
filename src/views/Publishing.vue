<template>
  <b-container>
    <div class="pageWrap" v-if="activeObjectParent">
      <head-block :headerFields="headerFields" :activeObjectParent="activeObjectParent"></head-block>
      <p><b-link class="moreLink" :to="'/publishingbook/'+activeObjectParent.Id">Все книги издательства</b-link></p>
      <b-link :to="{name: 'publishing-edit', params: { id: activeId }}">Редактировать издательство</b-link>
    </div>
    <div class="pageWrap" v-else>
      Издательство не найдено
    </div> 
  </b-container>
</template>

<script>
import HeadBlock from '../components/HeadBlock'
import {mapGetters, mapActions, mapMutations} from 'vuex'
import store from '../store'
export default {
  name: 'Publishing',
  props: ['id'],  
  components: {
    HeadBlock
  },
  data: () => ({

  }),
  methods: {
    ...mapActions('library', ['getActObj']),
  },
computed: {
  ...mapGetters('library', {
    books:'getBooks'
  }),
  // activeObject(){
  //   return store.state.library.activeObject;
  // },
  activeId(){
    return this.id;
  },
  activeObjectParent(){
    // return this.getFullActObj(this.id,'books');
    return store.state.library.activeObject;
  },  
   headerFields(){
     return[{
          'title':'Код',
          'slug':'Code'
        },{
          'title':'Адрес',
          'slug':"Address"
        }]
   }
},
created() {
  let activeId=this.activeId;
  this.getActObj({id:this.activeId,pageType:'publishing'});
},  
}
</script>