<template>
    <b-container class="form-wrapper">
        <h1>Редактировать книгу</h1>
        <b-form @submit="onSubmit" class="form-wrapper__form" id="bookEditForm">
            <div class="form-wrapper__input">
                <b-input name="Name"
                        :value="activeObject.Name"
                        placeholder="Название"
                        required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-form-select name="GenreId"
                        :value="activeObject.GenreId"
                        :options="genresObj"
                        required>
                </b-form-select>
            </div>
            <div class="form-wrapper__input">
                <b-input name="Isbn"
                        :value="activeObject.Isbn"
                        placeholder="Код"
                        required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input name="PublishYear"
                        :value="activeObject.PublishYear"
                        placeholder="Год"
                        required
                ></b-input>
            </div>
            <input type="hidden" name="Id"  :value="activeObject.Id">
            <div class="form-wrapper__input">
                <b-form-select name="AuthorId"
                        :value="activeObject.AuthorId"
                        :options="authorsObj"
                        required>
                </b-form-select>
            </div>
            <div class="form-wrapper__input">
                <b-form-select name="PublishHouseId"
                        :value="activeObject.PublishHouseId"
                        :options="publishingObj"
                        required>
                </b-form-select>
            </div>
            <div class="form-wrapper__textarea">
                <b-textarea name="Description"
                        :value="activeObject.Description"
                        placeholder="Описание"
                        required
                ></b-textarea>
            </div>
            <div class="form-wrapper__file">
                <b-form-file name="Image"
                        class="form-wrapper__file-load"
                        ref="file-input"
                        placeholder="Загрузить обложку"
                        drop-placeholder="Перетащите файл сюда..."
                ></b-form-file>
                <b-button @click="clearFiles" class="form-wrapper__file-cancel">Отменить отправку обложки</b-button>
            </div>
            <div class="form-wrapper__file">
                <b-form-file name="Albums"
                             class="form-wrapper__file-load"
                             ref="file-input"
                             multiple
                             placeholder="Загрузить изображения книги"
                             drop-placeholder="Перетащите файл сюда..."
                ></b-form-file>
                <b-button @click="clearFiles" class="form-wrapper__file-cancel">Отменить отправку изображений</b-button>
            </div>
            <div class="form-wrapper__submit">
                <b-button type="submit" variant="primary">Редактировать</b-button>
            </div>
        </b-form>
    </b-container>
</template>

<script>
    import store from '../store'
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        props: ['id'],
        name: 'Bookedit',
        data: function() {
            return {

            }
        },
        methods: {
            ...mapActions('library', ['getActObj', 'getActiveObjectByID', 'editBookBE']),
            onSubmit(evt) {
                evt.preventDefault();
                let form = document.getElementById('bookEditForm');
                let formDataObj = new FormData(form);
                this.editBookBE(formDataObj);
            },
            clearFiles() {
                this.$refs['file-input'].reset()
            },
        },
        computed: {
            ...mapGetters('library', {
                books: 'getBooks',
                genres: 'getGenres',
                authors: 'getAuthors',
                publishing: 'getPublishing',
                authorsFullName: 'getAuthorFullNameById'
            }),
            activeObject() {
                return store.state.library.activeObject;
            },
            activeId() {
                return this.id;
            },
            genresObj() {
                return this.genres.map((item) => ({value: item.Id, text: item.Name}));
            },
            publishingObj() {
                return this.publishing.map((item) => ({value: item.Id, text: item.Name}));
            },
            authorsObj() {
                return this.authors.map((item) => ({value: item.id, text: this.authorsFullName(item.id)}));
            },
        },
        created() {
            let arg = {
                id: this.activeId,
                pageType: 'books'
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