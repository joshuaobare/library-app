

function Book(name,author,pages,status) {
    this.Name = name;
    this.Author = author;
    this.Pages = pages;
    this.Status = status;
   /* this.info = function() {
        console.log(`${this.name} by ${this.author} is ${this.status}.`)
    }*/
}


const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',10,"unread")
const theHobbit2 = new Book('The Hobbit2','J.R.R. Tolkien2',100,"read")
const theHobbit3 = new Book('The Hobbit3','J.R.R. Tolkien3',12,"read")
const theHobbit4 = new Book('The Hobbit4','J.R.R. Tolkien4',12,"read")
const theHobbit5 = new Book('The Hobbit5','J.R.R. Tolkien5',142, "read")


let myLibrary = [theHobbit,theHobbit2,theHobbit3,theHobbit4,theHobbit5]
const bookShelf = document.querySelector("#book")
const bookCards = document.createElement("div")
bookShelf.appendChild(bookCards)
text=""

for(let x=0;x<5;x++) {
    this["card"+x] = document.createElement('div')
    
        for (let y in myLibrary[x]) {
            this["card"+x].innerHTML += y +":" + " " + myLibrary[x][y] + " " + "<br>"
            
        
        }
        this["card"+x].innerHTML += "<br>"
        bookCards.appendChild(this["card"+x])
         
    
    
    
        
}




function addBookToLibrary() {
  // do stuff here
}