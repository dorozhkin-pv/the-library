<template>
    <b-container class="form-wrapper">
        <h1>Редактировать издательство</h1>
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
            <div class="form-wrapper__hidden-input">
                <input name="Id" type="hidden" :value="activeId">
            </div>
            <div class="form-wrapper__submit">
                <b-button type="submit" variant="primary">Редактировать</b-button>
            </div>
        </b-form>
    </b-container>
</template>

<script>
    import store from '../store'
    import {mapActions} from 'vuex'

    export default {
        name: 'Publishingedit',
        props: ["id"],
        data: function() {
            return {
            }
        },
        methods: {
            ...mapActions('library', ['getActObj', 'getActiveObjectByID', 'editPublishingBE']),
            onSubmit(evt) {
                evt.preventDefault();
                this.editPublishingBE(this.requestModel);
            },
        },
        computed: {
            activeObject() {
                return store.state.library.activeObject;
            },
            activeId() {
                return this.id;
            },
            requestModel() {
                return {
                    Id: this.activeId,
                    Name: this.activeObject.Name,
                    Address: this.activeObject.Address,
                    Code: this.activeObject.Code,
                    Description: this.activeObject.Description
                }
            }
        },
        created() {
            let arg = {
                id: this.activeId,
                pageType: 'publishing'
            };
            this.getActObj(arg);
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