class Book{
    constructor(title,author,genre,available = true){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.available = available;
    }
}
class Library{
    constructor(name){
        this.name = name;
        this.books =[];
    }

    addBookByObj(book){
        this.books.push(book)
    }

    removeBookObjByTitle(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    SearchBookByAll(query) {
        query = query.toLowerCase();
        const searchBook = this.books.filter(book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.genre.toLowerCase().includes(query)
        );
        if(searchBook.length == 0){
            console.log("No Book Found!");
        }else{
            console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
            for(let i=0;i<searchBook.length;i++){
                console.log(`${searchBook[i].title}\t\t${searchBook[i].author}\t\t${searchBook[i].genre}\t\t${searchBook[i].available}`);
            }
        }
    }

    searchByTitle(title) {
        if (this.books.length === 0) {
            console.log("No Book in Library", this.name);
        } else {
            let found = false;
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].title === title) {
                    found = true;
                    console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
                    console.log(`${this.books[i].title}\t\t${this.books[i].author}\t\t${this.books[i].genre}\t\t${this.books[i].available}`);
                }
            }
            if (!found) {
                console.log(`No book Title: ${title} found!`);
            }
        }
    }

    searchByAuthor(author) {
        if (this.books.length === 0) {
            console.log("No Book in Library", this.name);
        } else {
            let found = false;
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].author === author) {
                    found = true;
                    console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
                    console.log(`${this.books[i].title}\t\t${this.books[i].author}\t\t${this.books[i].genre}\t\t${this.books[i].available}`);
                }
            }
            if (!found) {
                console.log(`No book Author: ${author} found!`);
            }
        }
    }

    searchByGenre(genre) {
        if (this.books.length === 0) {
            console.log("No Book in Library", this.name);
        } else {
            let found = false;
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].genre === genre) {
                    found = true;
                    console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
                    console.log(`${this.books[i].title}\t\t${this.books[i].author}\t\t${this.books[i].genre}\t\t${this.books[i].available}`);
                }
            }
            if (!found) {
                console.log(`No book Genre: ${genre} found!`);
            }
        }
    }

    displayAllBook(){
        if(this.books.length === 0){
            console.log("No Book in Library",this.name);
        }
        else{
            console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable")
            this.books.forEach(book=>{
            console.log(`${book.title}\t\t${book.author}\t\t${book.genre}\t\t${book.available}`)
            })
        }
    }

    displayAvaBook(){
        if(this.books.length === 0){
            console.log("No Book in Library",this.name);
        }else{
            console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable")
            this.books.forEach(book=>{
                if(book.available)
                    console.log(`${book.title}\t\t${book.author}\t\t${book.genre}\t\t${book.available}`)
            })
        }
    }

}

class User{
    constructor(name){
        this.name = name;
        this.borrowed_books = []
        this.count = 0;
        this.limited = 5;
    }
    displayBorrowedBook(){
        if(this.borrowed_books.length === 0){
            console.log("You haven't borrowed any books yet!");
        }else{
            console.log("You brrowed:");
            console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
            for(let i=0;i<this.borrowed_books.length;i++){
                console.log(`${this.borrowed_books[i].title}\t\t${this.borrowed_books[i].author}\t\t${this.borrowed_books[i].genre}\t\t${this.borrowed_books[i].available}`);
            }
        }
    }
    borrowBookLimited(library, title){
        
        if (library.books.length === 0) {
            console.log("No Book in Library", library.name);
        }
        else if(this.count === this.limited){
            console.log("Sorry you have reach brrowed limited",this.limited);
        } 
        else if(this.count !== this.limited){
            let found = false;
            for (let i = 0; i < library.books.length; i++) {
                if (library.books[i].title === title) {
                    if(library.books[i].available){
                        found = true;
                        library.books[i].available = false;
                        this.borrowed_books.push(library.books[i])
                        console.log("You borrowed:")
                        console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
                        console.log(`${library.books[i].title}\t\t${library.books[i].author}\t\t${library.books[i].genre}\t\t${library.books[i].available}`);
                        this.count +=1
                        break;
                    }
                    else{
                        found = false
                    }
                    
                }
            }
            if (!found) {
                console.log(`Sorry The Book \"${title}\" Not Found/Unavailable!`);
            }
        }
    }
    returnBookLimited(library, title){
        
        if (this.borrowed_books.length === 0) {
            console.log("You haven't borrowed any books yet! From Library", library.name);
        } else {
            let found = false;
            for (let i = 0; i < library.books.length; i++) {
                if (library.books[i].title === title) {
                        found = true;
                        library.books[i].available = true;
                        console.log("You Returned:")
                        console.log("Title\t\tAUTHOR\t\tGenre\t\tAvailable");
                        console.log(`${library.books[i].title}\t\t${library.books[i].author}\t\t${library.books[i].genre}\t\t${library.books[i].available}`);
                        for (let k=0;k<this.borrowed_books.length;k++){
                            if(title == this.borrowed_books[k].title){
                                this.borrowed_books.splice(k,1)
                            }
                        }
                        this.count-=1
                        break;
                }
                else{
                    found = false
                }
            }
            if (!found) {
                console.log(`No book Title: ${title} found!`);
            }
            
        }
    }

}

class Student extends User{
    constructor(name){
        super(name)
        this.limited = 5
    }
}
class Admin extends User{
    constructor(name){
        super(name)
        this.limited = 9999999999
    }
}

const lb1 = new Library("Hab Library")

const book1 = new Book("Lion","Sophorn","5th",true)
const book2 = new Book("Lion2","kimhab","7th",true)
const book3 = new Book("Lion3","sophol","8th",true)
lb1.addBookByObj(book1);
lb1.addBookByObj(book2);
lb1.addBookByObj(book3);

const user1 = new User("Hab")
user1.borrowBookLimited(lb1,"Lion")
lb1.displayAvaBook()