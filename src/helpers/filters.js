export const filters = {
  selectObj: function(genres, authors, publishYear, authorsFullName) {
    return {
      genre: (() => genres.map((item) => ({value: item.Name, text: item.Name})))(),
      author: (() => authors.map((item) => ({value: authorsFullName(item.id), text: authorsFullName(item.id)})))(),
      publishYear: (() => publishYear.map((item) => ({value: item.year, text: item.year})))()
    }
  },

  selectObjForAuthors: function(authors, authorsFullName) {
    return {
      author: (() => authors.map((item) => ({value: authorsFullName(item.id), text: authorsFullName(item.id)})))(),
      birthDate: (() => authors.map((item) => ({value: item.birthDate, text: item.birthDate})))()
    }
  }
};