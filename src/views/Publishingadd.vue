<template>
    <b-container class="form-wrapper">
        <h1>Добавить издательство</h1>
        <b-form @submit="onSubmit" class="form-wrapper__form">
            <div class="form-wrapper__input">
                <b-input
                        v-model="requestModel.Name"
                        placeholder="Название"
                        required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input
                        v-model="requestModel.Address"
                        placeholder="Адрес"
                        required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input
                        v-model="requestModel.Code"
                        placeholder="Код"
                        required
                ></b-input>
            </div>
            <div class="form-wrapper__textarea">
                <b-textarea
                        id="form-wrapper__textarea-description"
                        v-model="requestModel.Description"
                        placeholder="Описание"
                        required
                ></b-textarea>
            </div>
            <div class="form-wrapper__submit">
                <b-button type="submit" variant="primary">Добавить</b-button>
            </div>
        </b-form>
    </b-container>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'Publishingadd',
        data: function() {
            return {
                requestModel: {
                    Name: '',
                    Address: '',
                    Code: '',
                    Description: ''
                }
            }
        },
        methods: {
            ...mapActions('library', ['addPublishingBE']),
            onSubmit(evt) {
                evt.preventDefault();
                this.addPublishingBE(this.requestModel);
            },
        },
    }
</script>

<style scoped lang="scss">
    .form-wrapper {

        &__form {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        &__input {
            width: 49%;
            margin-bottom: 15px;
        }

        &__textarea {
            width: 100%;
            margin-bottom: 15px;
        }

        &__textarea textarea {
            min-height: 100px;
        }
    }

</style>