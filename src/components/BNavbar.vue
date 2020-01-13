<template>
<div>
	<b-navbar toggleable="lg" type="dark" variant="info">
		<b-container>
			<b-navbar-brand class="logo" to="/"><img src="@/images/logo.png" class="logo" alt="logo"></b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item to="/books">Книги</b-nav-item>
						<b-nav-item to="/authors">Авторы</b-nav-item>
					</b-navbar-nav>

					<b-navbar-nav class="ml-auto">
						<b-nav-form @submit.prevent="handleSubmit">
							<b-form-input size="md"
										  class="mr-sm-2 main-input"
										  placeholder="Введите название или ISBN книги..."
										  v-model="input" />
						</b-nav-form>
					</b-navbar-nav>
				</b-collapse>
			</b-container>
		</b-navbar>
	</div>
</template>

<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as M from '@/store/library/mutation_types'

	export default {

		data: () => ({
			input: ''
		}),

		methods:{
			...mapActions('library', ['getAuthorsBE','getBooksBE','getPublishingBE']),
			...mapMutations('library', [
				M.SEARCH
			]),
			handleSubmit() {
				this[M.SEARCH]({inputValue: this.input, books: this.books});
				if(!this.filteredData.length) {
					alert('Нет такой книги в библиотеке');
				} else {
					if(this.$route.name !== 'books') {
						this.$router.push('/books');
					}
				}
			}
		},

		computed: {
			...mapGetters('library', {
				books:'getBooksDataForList',
				filteredData: 'getFilteredData'
			}),
		},

		created() {
			this.getAuthorsBE();
			this.getPublishingBE();
			this.getBooksBE();
		}
	}
</script>

<style lang="scss" scoped>
	.main-input {
		width: 300px !important;
	}
	.logo {
		max-width: 40px;
	}
</style>