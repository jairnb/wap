let books = [
    {id: 1, title: "ABD", ISBN: 11, publishedDate: new Date('2014-04-03'), author: {fname: 'John', lname: 'Doe'}},
    // {id: 2, title: "XYZ", ISBN: 22, publishedDate: new Date('2015-04-03'), author: {fname: 'Jane', lname: 'Jones'}}, 
];

module.exports = class Book {
    constructor(id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN; 
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static save(book) {
        let b = new Book(books.length + 1, book.title, book.ISBN, book.publishedDate, book.author);
        books.push(b);
        return b;
    }

    static getAll() {
        return books.sort((a, b) => b.id - a.id);
    }

    static get(id) {
        let book =  books.find(b => b.id == id)
        return book != undefined ? book : { msg: "Book not found"};
    }

    static update(id, book) {
        const updateBook = books.find(b => b.id == id);
        updateBook.ISBN = book.ISBN;
        updateBook.title = book.title;
        updateBook.publishedDate = new Date(book.publishedDate);
        updateBook.author = book.author;
        return updateBook;
    }

    static delete(id) {
        const index = books.findIndex(b => b.id == id);
        if(index > -1) {
            books.splice(index, 1);
            return { msg: "Success"};
        }else {
            return { msg: "Error"};
        }
    }
}

