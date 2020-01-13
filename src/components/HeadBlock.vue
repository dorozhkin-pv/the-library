<template>
    <div class="headerBlock">
      <div class="col-md-4 headerBlock-ImgWrap" v-if="activeObject.Image">
        <img :src="activeObject.Image" alt="" class="headerBlock-Img">
      </div>
      <div class="col-md-4 headerBlock-ImgWrap" v-if="activeObject.Photo">
        <img :src="activeObject.Photo" alt="" class="headerBlock-Img">
      </div>	  
      <div class="col-md-8 headerContentBlock-Content">
        <h1>{{activeObject.title}} {{activeObject.Name}}</h1>
		<!-- {{activeObject.Name}} -->
		<!-- headerFields -->
        <div v-for='item in headerFields' :key="item.slug" class="headerBlock-list">
			<div class="headerBlock-item">
          		<span class="label">{{item.title}}:</span>
				<b-link v-if="item.url" :to="item.url">
					{{activeObject[item.slug]}}
				</b-link>
				<span v-else>{{activeObject[item.slug]}}:</span>
			</div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import store from '../store'
export default {
	
	props: ["headerFields","activeObjectParent"],
	name:'HeadBlock',
	data: () => ({	}),
	computed:{
		activeObject(){
			if(this.activeObjectParent){
				return this.activeObjectParent;
			}else{
				return store.state.library.activeObject;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.headerBlock{
		display: flex;
		margin:30px 0;
	}
	.headerBlock-Img{
		max-width: 100%;
		width: auto;

	}
	.headerBlock-ImgWrap{
		max-width: 200px;
	}
	.headerContentBlock-Content{
		width: 100%;
	}
	.headerBlock-list{
		display: flex;
		flex-direction:column;

	}
	.headerBlock-list .label{
		color:grey;
		display: inline-block;
		margin-right:10px;
	}
</style>