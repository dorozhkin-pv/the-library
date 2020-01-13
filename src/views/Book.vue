<template>
  <b-container>
    <div class="pageWrap" v-if="activeObjectParent"> 
      <head-block :headerFields="headerFields" :activeObjectParent="activeObjectParent"></head-block>
      {{activeObjectParent.Description}}
      <div class="imgGallery" id="imgGallery">
        <b-link :href="img" class="imgGallery-item" v-for="img in activeObjectParent.Albums" :key="img" target="_blank">
          <img :src="img" alt="" class="imgGallery-img">
        </b-link>
      </div> 
      <b-link :to="{name: 'edit', params: { id: activeId }}">Редактировать книгу</b-link>
    </div>
    <div class="pageWrap" v-else>
      <p>Книга не найдена</p>
      <p>Хотите добавить?</p>
      <b-link :to="{name: 'add'}">Добавить новую книгу</b-link>
    </div> 
  </b-container>
</template>

<script>


import HeadBlock from '../components/HeadBlock'
import {mapGetters, mapActions, mapMutations} from 'vuex'
import store from '../store'
import { calculateGuid } from '@/helpers/common'

export default {
  name: 'Book',
  props: ['id'],
  components: {
    HeadBlock
  },
  data: () => ({
  }),
methods: {
  ...mapActions('library', ['getActObj','getActiveObjectByID']),
},
computed: {
  ...mapGetters('library', {
  getFullActObj:'getActiveObjectByID',
  books:'getBooks'
  }),
  activeObjectParent(){
    // return this.getFullActObj(this.id,'books');
    return store.state.library.activeObject;
  },
  activeId(){
    return this.id;
  },
   headerFields(){
     return[{
          'title':'Год',
          'slug':'PublishYear'
        },{
          'title':'Код',
          'slug':'Isbn'
        },{
          'title':'Автор',
          'slug':"author",
          'url':'/author/'+this.activeObjectParent.AuthorId
        },{
          'title':'Жанр',
          'slug':"genre"
        },{
          'title':'Издательство',
          'slug':"publishHouse",
          // 'url':'/publishingbook/'+this.activeObjectParent.publishHouseId
          'url':'/publishing/'+this.activeObjectParent.PublishHouseId
        }]
   }
},
created() {
  // let activeId=this.activeId;
  let arg={
    id:this.activeId,
    pageType:'books'
  }
  this.getActObj(arg);
},
}

</script>

<style lang="scss" scoped>
  .imgGallery{
    display:flex;
    flex-wrap:warn;
    justify-content:space-space-around;
    margin-bottom: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;    
  }
  .imgGallery-item{
    max-width: 25%;
    min-width: 200px;
    margin-bottom: 15px;
  }
  .imgGallery-img{
    display:flex;
    flex-wrap:warn;
    justify-content:space-space-around;
    width:200px;
  }
</style>