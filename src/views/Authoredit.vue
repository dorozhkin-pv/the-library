<template>
    <b-container class="form-wrapper">
        <h1>Редактировать автора</h1>
        <b-form @submit="onSubmit" class="form-wrapper__form" id="editAuthorForm">
            <div class="form-wrapper__input">
                <b-input name="FirstName"
                         :value="activeObject.FirstName"
                         placeholder="Имя"
                         required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input name="LastName"
                         :value="activeObject.LastName"
                         placeholder="Фамилия"
                         required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input name="MiddleName"
                         :value="activeObject.MiddleName"
                         placeholder="Отчество"
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input name="BirthDate"
                         type="date"
                         :value="activeObject.BirthDate"
                         required
                ></b-input>
            </div>
            <div class="form-wrapper__file">
                <b-form-file name="Photo"
                             class="form-wrapper__file-load"
                             ref="file-input"
                             placeholder="Загрузить фотографию"
                             drop-placeholder="Перетащите файл сюда..."
                ></b-form-file>
                <b-button @click="clearFiles" class="form-wrapper__file-cancel">Отменить отправку фотографии</b-button>
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
        props: ['id'],
        name: 'Authoredit',
        data: function () {
            return {}
        },
        methods: {
            ...mapActions('library', ['getActObj', 'getActiveObjectByID', 'editAuthorBE']),
            onSubmit(evt) {
                evt.preventDefault();
                let form = document.getElementById('editAuthorForm');
                console.log(form);
                let formDataObj = new FormData(form);
                console.log(formDataObj);
                console.log(this.editAuthorBE(formDataObj, this.activeId));
            },
            clearFiles() {
                this.$refs['file-input'].reset()
            },
        },
        computed: {
            activeObject() {
                return store.state.library.activeObject;
            },
            activeId() {
                return this.id;
            },
        },
        created() {
            let arg = {
                id: this.activeId,
                pageType: 'authors'
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