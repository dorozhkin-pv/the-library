import * as M from './mutation_types';
import Vue from 'vue'

export default {
  [M.GET_ACT_OBJ](state, {payload: data}) {
    state.activeObject=data;
  },
  [M.SET_NEW_BOOK] (state, {payload:data}) {
    state.books.push(data);
  },
  [M.SET_NEW_AUTHOR] (state, {payload:data}) {
    state.authors.push(data);
  },
  [M.SET_NEW_PUBLISHING] (state, {payload:data}) {
    state.publishing.push(data);
  },
  [M.EDIT_BOOK] (state, {payload:data, id}) {
    state.books.forEach((book, index, arr) => {
      if (book.Id === id) {
        Vue.set(arr, id, data)
      }
    })
  },
  [M.EDIT_AUTHOR] (state, {payload:data, id}) {
    state.authors.forEach((author, index, arr) => {
      if (author.Id === id) {
       Vue.set(arr, id, data)
      }
    })
  },
  [M.EDIT_PUBLISHING] (state, {payload:data, id}) {
    state.publishing.forEach((publish, index, arr) => {
      if (publish.Id === id) {
        Vue.set(arr, id, data)
      }
    })
  },
  [M.GET_BOOKS] (state,{payload:data}) {
    state.books = data;
  },
  [M.GET_PUBLISHINGS] (state,{payload:data}) {
    state.publishing = data;
  },

  [M.GET_AUTHORS] (state,{payload:data}) {
    state.authors = data;
  },
  [M.GET_AUTHORS_BOOKS] (state,{payload:data}) {
    state.filtersBook = data;
  },
  [M.GET_PUBLISHING_BOOKS] (state,{payload:data}) {
    state.authors = data;
  },  
  [M.SORT] (state, {sortBy, arrForSort}) {
    arrForSort.sort(( a, b ) => a[sortBy] > b[sortBy] ? 1 : -1);

    state.filter = arrForSort;
  },

  [M.FILTER] (state, {filterBy, books, nameOfSelect}) {
    state.filter = books.filter((book) => book[nameOfSelect] == filterBy);
  },

  [M.FILTER_CLEAR] (state) {
    state.filter = [];
  },

  [M.SEARCH] (state, {inputValue, books}) {
    const s = inputValue.toLowerCase();
    state.filter = books.filter((obj) => ~obj.title.toLowerCase().indexOf(s) || ~obj.isbn.toLowerCase().indexOf(s));
  }
}