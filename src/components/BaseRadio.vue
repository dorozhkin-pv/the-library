<template>
	<b-row align-h="end">
    <b-col>
			<b-form-group :label="label">
				<b-form-radio-group
					id="btn-radios-1"
					v-model="selected"
					:options="options"
					buttons
					name="radios-btn-default"
					@change="onChange($event)" />
			</b-form-group>
		</b-col>
  </b-row>
</template>

<script>
  export default {
		props: {
			label: String,
			seletedOptions: Array
		},

    data() {
      return {
        selected: null,
        options: this.seletedOptions
      }
		},
		
		methods: {
			onChange(data) {
				this.$emit('on-change', data);
			}
		},
  }
</script>