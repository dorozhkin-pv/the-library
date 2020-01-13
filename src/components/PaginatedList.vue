<template>
  <div>
		<Btable :header="header"
            :body="paginatedData" />

		<nav aria-label="...">
			<ul class="pagination justify-content-center">
				<li class="page-item">
					<button 
							class="page-link"
							:disabled="pageNumber === 0" 
							@click="prevPage">
							<span aria-hidden="true">&laquo;</span>
					</button>
				</li>

				<li class="page-item" v-for="pageNum in pageCount" :key="pageNum">
					<span class="page-link" @click="currentPage(pageNum - 1)">{{ pageNum }}</span>
				</li>
				
				<li class="page-item">
					<button 
							class="page-link"
							:disabled="pageNumber >= pageCount -1" 
							@click="nextPage">
							<span aria-hidden="true">&raquo;</span>
					</button>
				</li>
			</ul>
    </nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pageNumber: 0
			}
		},

		props:{
			header: Array,
			listData:{
				type:Array,
				required:true
			},
			size:{
				type:Number,
				required:false,
				default: 10
			}
		},

		methods:{
				nextPage() {
					this.pageNumber++;
				},
				prevPage() {
					this.pageNumber--;
				},
				currentPage(pageNum) {
					this.pageNumber = pageNum;
				}
		},

		computed:{
			pageCount() {
				let l = this.listData.length,
						s = this.size;
				return Math.ceil(l/s);
			},
			paginatedData() {
				const start = this.pageNumber * this.size,
							end = start + this.size;
				return this.listData
								.slice(start, end);
			}
		}
	}
</script>