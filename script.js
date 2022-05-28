

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

    
        card = document.createElement('div')
        card.classList.add("bookCard")
        card.setAttribute("id",x)
            for (let y in myLibrary[x]) {
                card.innerHTML += y +":" + " " + myLibrary[x][y] + " " + "<br>"
                
            
            }
            card.innerHTML += "<br>"

            const delButton = document.createElement('button')
            delButton.innerHTML = "Delete Book"
            delButton.classList.add("delButton")
            card.appendChild(delButton)
            let click = 0
            delButton.addEventListener('click', () => {
            len = myLibrary.length;
            cardId = card.id;

            console.log(card)
            console.log(myLibrary)
            card.remove();
            
            
            myLibrary.splice(cardId,1);
            click += 1;
            
            


            })

            bookCards.appendChild(card)
         
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

