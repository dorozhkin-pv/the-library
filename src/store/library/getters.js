export default {
	getBooks(state) {
		return state.books;
	},
	getAuthors(state, getters) {
		return state.authors.map((author) => ({
			id: author.Id,
			author: getters.getAuthorFullNameById(author.Id),
			birthDate: author.BirthDate}))
	},
	getGenres(state) {
		return state.genres;
	},
	// getFiltersBook(state) {
	// 	return state.filtersBook;
	// },
	getPublishing(state) {
		return state.publishing
	},
	getGenreById: state => id => {
		return state.genres.find(genre => genre.Id == id);
	},
	getAuthorById: state => id => {
		return state.authors.find(author => author.Id === id);
	},
	getAuthorFullNameById: state => id => {
		return state.authors[id].FirstName + ' ' + 
						(state.authors[id].MiddleName === null ? '' : state.authors[id].MiddleName) + ' ' +	
						state.authors[id].LastName;
	},
	getPublishById: state => id => {
		return state.publishing.find(publish => publish.Id === id);
	},
	getPublishYear(state) {
		return state.books.map((book) => book.PublishYear)
											.filter((item, index, arr) => arr.indexOf(item) === index)
											.map((year) => ({year: year}));
	},
	getBookData(state, getters) {
		return state.books.map((book) => ({
							id: book.Id, 
							title: book.Name, 
							// genre: getters.getGenreById(book.GenreId).Name, 
							author: getters.getAuthorFullNameById(book.AuthorId),
							publishYear: book.PublishYear,
							bookCover: book.Image,
							isbn: book.Isbn}))
	},
	getBooksDataForList(state, getters) {
		return state.books.map((book) => ({
							id: book.Id, 
							title: book.Name, 
							genre: getters.getGenreById(book.GenreId).Name, 
							author: book.author,
							publishYear: book.PublishYear,
							bookCover: book.Image,
							isbn: book.Isbn}))
	},
	getBooksDataForCartList: (state, getters) => id => {
		return state.books.filter(x => x.AuthorId === +id)
											.map((book) => ({
												id: book.Id, 
												title: book.Name, 
												genre: getters.getGenreById(book.GenreId).Name, 
												author: book.author,
												publishYear: book.PublishYear,
												bookCover: book.Image,
												isbn: book.Isbn}))
	},
	getBookFullData(state, getters) {
		return state.books.map((book) => ({
							id: book.Id,
							title: book.Name, 
							genre: getters.getGenreById(book.GenreId).Name,
							genreId: book.GenreId,
							author: getters.getAuthorFullNameById(book.AuthorId),
							authorId: book.AuthorId,
							publishYear: book.PublishYear,
							publishHouse: getters.getPublishById(book.PublishHouseId).Name,
							publishHouseId: book.PublishHouseId,
							bookCover: book.Image,
							isbn: book.Isbn}))
	},	
	getBooksByAuth: state => id => {
		state.books.forEach(book => {
			if(book.AuthorId === id){
				return {title: book.Name, 
					genre: getters.getGenreById(book.GenreId).Name, 
					author: getters.getAuthorFullNameById(book.AuthorId),
					publishYear: book.PublishYear,
					bookCover: book.Image,
					isbn: book.Isbn}
			}
		});
	},
	getBooksByPublish: state => id => {
		return state.books.find(book => book.PublishHouseId === id);
	},
	getPublickHouse(state) {
		return state.publickHouse;
	},    
	getActiveObjectByID: (state,getters)=>(id,typeObj) => {
		if(typeObj=='books'){
			let book=state.books.find(book => book.Id === parseInt(id));

			return {title: book.Name, 
				genre: getters.getGenreById(book.GenreId).Name,
				genreId: book.GenreId,
				author: getters.getAuthorFullNameById(book.AuthorId),
				authorId: book.AuthorId,
				publishYear: book.PublishYear,
				publishHouse: getters.getPublishById(book.PublishHouseId).Name,
				publishHouseId: book.PublishHouseId,
				bookCover: book.Image,
				isbn: book.Isbn}
		}else{
			return state[typeObj].find(item => item.Id === id);
		}
	},
	
	getFilteredData(state) {
		return state.filter;
	},
}