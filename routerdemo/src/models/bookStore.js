//DataStore for this Demo
class BookStore {

    constructor() {
        this._books = [
            { id: 1, title: "How to Learn JavaScript - Vol 1", info: "Study hard", moreInfo: "" },
            { id: 2, title: "How to Learn ES6", info: "Complete all exercises :-)", moreInfo: "" },
            { id: 3, title: "How to Learn React", info: "Complete all your CA's", moreInfo: "" },
            {
                id: 4, title: "Learn JavaScript, React and MobX", info: "Don't drink beers, until Friday (after four)",
                moreInfo: "5 Points = 5 beers ;-)"
            }
        ]
    }
    get books() {
        return this._books;
    }
}
function getBook(title) {
    if (this._books.title == title) {
        return this._books[title]
    }
}
function addBook(book) {
    if (typeof book != object) {
        return console.log("nono")
    } else {
        this._books.push(book)
    }
    return console.log("Book has been added")
}
function editBook(bookFrom, bookTo){
    this._books[bookFrom] = this._books[bookTo]
}


export default new BookStore();