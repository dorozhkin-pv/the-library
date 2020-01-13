<template>
	<div>
		<base-radio :seletedOptions="seletedOptions"
                @on-change="onSortBy($event)"
								label="Сортировать по" />

		<div class="blocks">
			<b-col lg="4" class="item"  v-for="(book, index) in cardData" :key="index">
				<b-card no-body class="overflow-hidden" style="max-width: 540px;">
					<b-row no-gutters>
						<b-col md="6">
							<b-link :to="{name: 'book', params: { id: book.id }}">
								<b-card-img :src="book.bookCover" class="rounded-0"></b-card-img>
							</b-link>
							
						</b-col>
						<b-col md="6">
							<b-card-body :title="book.title">
								<b-card-text>
									<p>Автор: {{ book.author }}</p>
									<p>Жанр: {{ book.genre }}</p>
									<p>Год издания: {{ book.publishYear }}</p>
									<p>{{ book.isbn }}</p>
								</b-card-text>
							</b-card-body>
						</b-col>
					</b-row>
				</b-card>
			</b-col>
		</div>					
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';
	import * as M from '@/store/library/mutation_types'

  export default {
		name: 'Bcard',

		props: {
			viewData: Array
		},

		data() {
			return {
				sortBy: null,
				seletedOptions: [
					{ text: 'Жанр', value: 'genre' },
					{ text: 'Автор', value: 'author' },
					{ text: 'Год издания', value: 'publishYear' }
				]
			}
		},

		methods: {
			...mapMutations('library', [
        M.SORT
      ]),
      onSortBy(data) {
        this[M.SORT]({sortBy: data, arrForSort: this.viewData});
      },
		},

    computed: {
			...mapGetters('library', {
				books:'getBookData',
        filteredData: 'getFilteredData'
			}),
			cardData() {
        return this.filteredData.length ? this.filteredData : this.viewData;
      }
    }
  }
</script>

<style lang="scss" scoped>
	.blocks {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.item {
			display: flex;
			justify-content: center;
			margin-bottom: 30px;
		}
	}

</style>