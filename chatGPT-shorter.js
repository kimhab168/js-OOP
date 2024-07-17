class Book{
    constructor(title,author,genre,available = true){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.available = available;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBookByObj(book) {
        this.books.push(book);
    }

    removeBookObjByTitle(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    searchBooksByProperty(property, value) {
        const searchBooks = this.books.filter(book =>
            book[property].toLowerCase().includes(value.toLowerCase())
        );

        if (searchBooks.length === 0) {
            console.log(`No books found matching ${property}: ${value}`);
        } else {
            console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
            searchBooks.forEach(book => {
                console.log(`${book.title}\t\t${book.author}\t\t${book.genre}\t\t${book.available}`);
            });
        }
    }

    displayBooks() {
        if (this.books.length === 0) {
            console.log(`No books in library ${this.name}`);
        } else {
            console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
            this.books.forEach(book => {
                console.log(`${book.title}\t\t${book.author}\t\t${book.genre}\t\t${book.available}`);
            });
        }
    }

    displayAvailableBooks() {
        const availableBooks = this.books.filter(book => book.available);

        if (availableBooks.length === 0) {
            console.log(`No available books in library ${this.name}`);
        } else {
            console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
            availableBooks.forEach(book => {
                console.log(`${book.title}\t\t${book.author}\t\t${book.genre}\t\t${book.available}`);
            });
        }
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.borrowed_books = [];
        this.count = 0;
        this.limited = 5;
    }

    borrowBookLimited(library, title) {
        if (this.count === this.limited) {
            console.log(`Sorry, you have reached the borrowed limit of ${this.limited}`);
            return;
        }

        const bookToBorrow = library.books.find(book => book.title === title);

        if (!bookToBorrow || !bookToBorrow.available) {
            console.log(`Sorry, the book "${title}" is not found or unavailable!`);
            return;
        }

        bookToBorrow.available = false;
        this.borrowed_books.push(bookToBorrow);
        this.count++;
        console.log("You borrowed:");
        console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
        console.log(`${bookToBorrow.title}\t\t${bookToBorrow.author}\t\t${bookToBorrow.genre}\t\t${bookToBorrow.available}`);
    }

    returnBookLimited(library, title) {
        const borrowedBookIndex = this.borrowed_books.findIndex(book => book.title === title);

        if (borrowedBookIndex === -1) {
            console.log(`You haven't borrowed the book "${title}" from the library`);
            return;
        }

        const returnedBook = this.borrowed_books[borrowedBookIndex];
        returnedBook.available = true;
        this.borrowed_books.splice(borrowedBookIndex, 1);
        this.count--;
        console.log("You returned:");
        console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
        console.log(`${returnedBook.title}\t\t${returnedBook.author}\t\t${returnedBook.genre}\t\t${returnedBook.available}`);
    }
}

// Example usage
const lb1 = new Library("Hab Library");

const book1 = new Book("Lion", "Sophorn", "5th", true);
const book2 = new Book("Lion2", "kimhab", "7th", true);
const book3 = new Book("Lion3", "sophol", "8th", true);
lb1.addBookByObj(book1);
lb1.addBookByObj(book2);
lb1.addBookByObj(book3);

const user1 = new User("Hab");
user1.borrowBookLimited(lb1, "Lion");
lb1.displayAvailableBooks();
