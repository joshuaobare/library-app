function Book(name,author,pages,status) {
    this.Name = name;
    this.Author = author;
    this.Pages = pages;
    this.Status = status;
   
}



let myLibrary = []
const bookShelf = document.querySelector("#book")
const bookCards = document.createElement("div")
bookCards.classList.add("bookCards")
bookShelf.appendChild(bookCards)

function displayBooks() {
// the section with the cards is cleared each time the function is run
    bookCards.innerHTML = ""  
    
    for(let x = 0; x < myLibrary.length; x++ ) {

    
        this["card"+x] = document.createElement('div')
        this["card"+x].classList.add("bookCard")
// each card has an ID based on its index in the library array upon creation

this["card"+x].setAttribute("id",x)
            for (let y in myLibrary[x]) {
                this["card"+x].innerHTML += y +":" + " " + myLibrary[x][y] + " " + "<br>"
                
            
            }
            this["card"+x].innerHTML += "<br>"

// a delete button is added onto each card, and an eventListener is defined

            const delButton = document.createElement('button')
            delButton.innerHTML = "Delete Book"
            delButton.classList.add("delButton")
            this["card"+x].appendChild(delButton)
            
            delButton.addEventListener('click', () => {
            

            console.log(this["card"+x])
            console.log(myLibrary)
            
// when the delete button is clicked the button removes the card div
this["card"+x].remove();
            
          
            myLibrary.splice(this["card"+x].id,1);
          
            })

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

