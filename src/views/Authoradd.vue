<template>
    <b-container class="form-wrapper">
        <h1>Добавить автора</h1>
        <b-form @submit="onSubmit" class="form-wrapper__form" id="addAuthorForm">
            <div class="form-wrapper__input">
                <b-input name="FirstName"
                         v-model="requestModel.FirstName"
                         placeholder="Имя"
                         required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input name="LastName"
                         v-model="requestModel.LastName"
                         placeholder="Фамилия"
                         required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input name="MiddleName"
                         v-model="requestModel.MiddleName"
                         placeholder="Отчество"
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input name="BirthDate"
                         type="date"
                         v-model="requestModel.BirthDate"
                         required
                ></b-input>
            </div>
            <div class="form-wrapper__file">
                <b-form-file name="Photo"
                             class="form-wrapper__file-load"
                             v-model="requestModel.Photo"
                             ref="file-input"
                             placeholder="Загрузить фотографию"
                             drop-placeholder="Перетащите файл сюда..."
                ></b-form-file>
                <b-button @click="clearFiles" class="form-wrapper__file-cancel">Отменить отправку фотографии</b-button>
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
        name: 'Authoradd',
        data: function () {
            return {
                requestModel: {
                    BirthDate: '',
                    FirstName: '',
                    LastName: '',
                    MiddleName: '',
                    Photo: null
                }
            }
        },
        methods: {
            ...mapActions('library', ['addAuthorBE']),
            onSubmit(evt) {
                evt.preventDefault();
                let form = document.getElementById('addAuthorForm');
                console.log(form);
                let formDataObj = new FormData(form);
                console.log(formDataObj);
                this.addAuthorBE(formDataObj);
            },
            clearFiles() {
                this.$refs['file-input'].reset()
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

        &__file {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-bottom: 15px;
        }

        &__file-load {
            width: 70%;
        }

        &__file-cancel {
            width: 29%;
        }
    }

</style>