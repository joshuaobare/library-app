let myLibrary = []
const bookShelf = document.querySelector("#book")
const bookCards = document.createElement("div")
bookCards.classList.add("bookCards")
bookShelf.appendChild(bookCards)
// dialog refers to the dialog element the form is enclosed in
let dialog = document.querySelector("#dialog")



function Book(name,author,pages,status) {
    this.Title = name;
    this.Author = author;
    this.Pages = pages;
    this.Status = status;
   
}


function displayBooks() {
// the section with the cards is cleared each time the function is run
    bookCards.innerHTML = ""  
    
    for(let x = 0; x < myLibrary.length; x++ ) {

    
        this["card"+x] = document.createElement('div')
        this["card"+x].classList.add("bookCard")
        
        for (let y in myLibrary[x]) {
            this["card"+x].innerHTML += y +":" + " " + myLibrary[x][y] + " " + "<br>"
          
// each card has an ID based on the book's name
            if (y === "Title") {
                this["card"+x].setAttribute("id", myLibrary[x][y])
            
            }}
         
        this["card"+x].innerHTML += "<br>"

// a delete button is added onto each card, and an eventListener is defined on each button

        const delButton = document.createElement('button')
        delButton.innerHTML = "Delete Book"
        delButton.classList.add("delButton")
        this["card"+x].appendChild(delButton)
        delButton.addEventListener('click', () => {
            deleteBook(this["card"+x])
        })

        const readToggle = document.createElement('button')
        readToggle.textContent = "Change status"
        this["card"+x].appendChild(readToggle)
        readToggle.addEventListener('click',() => {
            statusToggle(this["card"+x])
            displayBooks()
            
        })
        
       bookCards.appendChild(this["card"+x])
         
    }
}


function deleteBook(e) {
    
    e.remove();
    console.log(myLibrary);
    const index = myLibrary.findIndex((Book) => {
        return Book.Title === e.id
    });
    
    myLibrary.splice(index,1);
    console.log(myLibrary)
}


function addBookToLibrary() {

    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let status = document.querySelector('input[name="status"]:checked').value 

    let newBook = new Book(title,author,pages,status)

    myLibrary.push(newBook)
    console.log(myLibrary)
}

function statusToggle(e) {
    const index = myLibrary.findIndex((Book) => {
        return Book.Title === e.id
    });
    if (myLibrary[index].Status === "Read") {
        myLibrary[index].Status = "Unread"
    }

    else if (myLibrary[index].Status === "Unread") {
        myLibrary[index].Status = "Read"
    }
    
}

const addBtn = document.querySelector("#addBook")
addBtn.addEventListener('click', () => {
    const form =document.querySelector(".form")
    form.classList.add("show")

// addBtn opens the dialog
    dialog.showModal()
    
    
})


const btn = document.querySelector("#submit")
btn.addEventListener('click', function (e) {
    addBookToLibrary();
    e.preventDefault();
    
    displayBooks();
    document.querySelector("form").reset();

// the submit button closes the dialog
    dialog.close()
  }) 



