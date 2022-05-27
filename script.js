

function Book(name,author,pages,status) {
    this.Name = name;
    this.Author = author;
    this.Pages = pages;
    this.Status = status;
   /* this.info = function() {
        console.log(`${this.name} by ${this.author} is ${this.status}.`)
    }*/
}

/*
const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',10,"unread")
const theHobbit2 = new Book('The Hobbit2','J.R.R. Tolkien2',100,"read")
const theHobbit3 = new Book('The Hobbit3','J.R.R. Tolkien3',12,"read")
const theHobbit4 = new Book('The Hobbit4','J.R.R. Tolkien4',12,"read")
const theHobbit5 = new Book('The Hobbit5','J.R.R. Tolkien5',142, "read")
*/

let myLibrary = []
const bookShelf = document.querySelector("#book")
const bookCards = document.createElement("div")
bookCards.classList.add("bookCards")
bookShelf.appendChild(bookCards)

function displayBooks() {
    bookCards.innerHTML = ""
    for(let x = 0; x < myLibrary.length; x++ ) {
        this["card"+x] = document.createElement('div')
        
            for (let y in myLibrary[x]) {
                this["card"+x].innerHTML += y +":" + " " + myLibrary[x][y] + " " + "<br>"
                
            
            }
            this["card"+x].innerHTML += "<br>"
            bookCards.appendChild(this["card"+x])
         
    }
}


function addBookToLibrary() {

    let name = document.getElementById('name').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let status = document.getElementById('status').value 

    let newBook = new Book(name,author,pages,status)

    myLibrary.push(newBook)
    console.log(myLibrary)
    
}


const btn = document.querySelector("#submit")
btn.addEventListener('click', function (e) {
    addBookToLibrary();
    e.preventDefault();
    displayBooks();

  }) 

const addBtn = document.querySelector("#addBook")
addBtn.addEventListener('click', () => {
    const form =document.querySelector(".form")
    form.style.display = "block"
})
