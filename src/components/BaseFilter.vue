<template>
  <div>
		<div class="filters-group">
			<div class="filter" v-for="(value, name, index) in selectObj" :key="index">
				<b-form-select
						v-model="selected"
						:options="value"
						@change="onSubmit($event, index, name)"
						ref="select" />
			</div>

			<b-button type="reset" variant="danger" @click="onReset">Reset</b-button>
		</div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import * as M from '@/store/library/mutation_types'

  export default {
		name: 'BaseFilter',

		props: {
      selectObj: Object,
      arrForSort: Array
		},

    data() {
      return {
				selected: null
      }
    },

    methods: {
      ...mapMutations('library', [
        M.SORT
      ]),
      onSubmit(data, index, name) {
				this.$emit('on-change', {value: data, name});

				this.$refs.select.forEach((element, id) => {
					if (id != index ) {
            this.$refs.select[id].selected = null;
					}
				});
      },
      onReset() {
				this.selected = null
        this[M.SORT]({sortBy: null, arrForSort: this.arrForSort});
      }
    },

    // computed: {
    //   ...mapGetters('library', {
		// 		books:'getBookData'
    //   })
    // }
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