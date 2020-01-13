<template>
    <b-form-select v-model="selected"
                   :options="options"
    >
        <template v-slot:first>
            <option :value="null" disabled>-- <slot></slot> --</option>
        </template>
    </b-form-select>
</template>

<script>
    export default {
        name: 'BaseSelect',
        props: {
            optionsData: Array
        },
        data() {
            return {
                selected: null,
                options: this.optionsData
            }
        },
    }
</script>