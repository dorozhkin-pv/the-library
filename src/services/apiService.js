
class ApiService{
  constructor(){}

    async addBookBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/addbook.php', {
            method: 'POST',
            body: arg
        });
        let data=await resp.json();
        if(data !== 'NULL'){
            alert('Книга добавлена');
        };
        data = JSON.parse(JSON.stringify(data));
        return data;
    }
    async addAuthorBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/addAuthor.php', {
            method: 'POST',
            body: arg
        });
        let data=await resp.json();
        if(data !== 'NULL'){
            alert('Автор добавлен');
        };
        data = JSON.parse(JSON.stringify(data));
        return data;
    }
    async addPublishingBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/addPublishing.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: arg
        });
        let data=await resp.json();
        console.log(data);
        if(data !== 'NULL'){
            alert('Издательство добавлено');
        };
        data = JSON.parse(JSON.stringify(data));
        return data;
    }
    async editPublishingBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/addPublishing.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: arg
        });
        let data=await resp.json();
        if(data !== 'NULL'){
            alert('Издательство отредактировано');
        };
        this.data = JSON.parse(JSON.stringify(data));
        return data;
    }
    async editBookBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/addbook.php', {
            method: 'POST',
            body: arg
        });
        let data=await resp.json();
        if(data !=='NULL'){
            alert('Книга отредактирована');
        };
        this.data = JSON.parse(JSON.stringify(data));
        return data;
    }
    async editAuthorBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/addAuthor.php', {
            method: 'POST',
            body: arg
        });
        let data=await resp.json();
        if(data !== 'NULL'){
            alert('Автор изменен');
        };
        data = JSON.parse(JSON.stringify(data));
        return data;
    }

    async getBookBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/one_book.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: arg
        });
        let data=await resp.json();
        return data;
    }


    async getPublishingListBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/publishing.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: arg
        });
        let data=await resp.json();
        return data;
    }


    async getBooksListBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/books.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: arg
        });
        let data=await resp.json();
        return data;
    }
    async getAuthorsListBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/authors.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: arg
        });
        let data=await resp.json();
        return data;
    }
    async getBooksByAuthorBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/getBooksByAuthor.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: arg
        });
        let data=await resp.json();
        return data;
    }
    async getBooksByPublishBE(arg){
        let resp = await fetch('http://cx02911.tmweb.ru/lib/getBooksByPublish.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: arg
        });
        let data=await resp.json();
        return data;
    }    
};
export default ApiService;