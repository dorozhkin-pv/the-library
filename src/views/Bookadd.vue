<template>
    <b-container class="form-wrapper">
        <h1>Добавить книгу</h1>
        <b-form @submit="onSubmit" class="form-wrapper__form" id="addBookForm">
            <div class="form-wrapper__input">
                <b-input name="Name"
                         id="form-wrapper__input-name"
                         placeholder="Название"
                         required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-form-select name="GenreId"
                               :options="genresObj"
                               required>
                    <template v-slot:first>
                        <option :value="null" disabled>-- Жанр --</option>
                    </template>
                </b-form-select>
            </div>
            <div class="form-wrapper__input">
                <b-input name="Isbn"
                         id="form-wrapper__input-code"
                         placeholder="Код"
                         required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-input name="PublishYear"
                         id="form-wrapper__input-year"
                         placeholder="Год"
                         required
                ></b-input>
            </div>
            <div class="form-wrapper__input">
                <b-form-select name="AuthorId"
                               :options="authorsObj"
                               required>
                    <template v-slot:first>
                        <option :value="null" disabled>-- Автор --</option>
                    </template>
                </b-form-select>
                Нет нужного автора в списке?
                <b-link :to="{name: 'author-add'}">Добавить автора</b-link>
            </div>
            <div class="form-wrapper__input">
                <b-form-select name="PublishHouseId"
                               :options="publishingObj"
                               required>
                    <template v-slot:first>
                        <option :value="null" disabled>-- Издательство --</option>
                    </template>
                </b-form-select>
                Нет нужного издательства в списке?
                <b-link :to="{name: 'publishing-add'}">Добавить издательство</b-link>
            </div>
            <div class="form-wrapper__textarea">
                <b-textarea name="Description"
                            id="form-wrapper__textarea-description"
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
                <b-button type="submit" variant="primary">Добавить</b-button>
            </div>

        </b-form>
    </b-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'Bookadd',
        data: function () {
            return {}
        },
        methods: {
            ...mapActions('library', ['addBookBE']),
            onSubmit(evt) {
                evt.preventDefault();
                let form = document.getElementById('addBookForm');
                let formDataObj = new FormData(form);
                this.addBookBE(formDataObj);
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