(function module() {
let newBook
let numOfBooks 

const sample = document.querySelector(".sample")
const sample1 = document.querySelector(".sample1")
const sample2 = document.querySelector(".sample2")
const radios = document.getElementsByName("status")
const body = document.querySelector(".body")
const card = document.querySelector(".card")
const popUp =  document.querySelector(".addition")
let para = document.querySelector(".total")

const addButton = document.querySelector(".add-button")
addButton.addEventListener("click", openForm)
const cancel = document.querySelector(".cancel")
cancel.addEventListener("click", closeForm)
const submit = document.querySelector(".submit")
submit.addEventListener("click", addBookToLibrary)

class Book{
 constructor(title, author, pages){
  this.title = title
  this.author = author
  this.pages = pages
}
 get info(){
  return  this.title + " by " + this.author + ", " + this.pages + ", " + this.status 
}

}

//Code for manually added book
demo = new Book("Unmasked", "Frank Stone", "223")
let temporaryLibrary = [demo,]
let myLibrary = [demo,]
demoLoop()


function addBookToLibrary(){
if (sample.value.length > 20 || sample.value.length < 1 
    || sample1.value.length > 20 || sample1.value.length < 1
    || sample2.value.length < 1){
  return
}
 newBook = new Book(sample.value, sample1.value, sample2.value)


myLibrary.push(newBook)
temporaryLibrary = []
temporaryLibrary.push(newBook)
myLibraryLoop()


 numOfBooks = myLibrary.length 
 para.textContent = "Total number of books: " + myLibrary.length
 popUp.style.display = "none"
 alert("Book added successfully")
}


function myLibraryLoop(){
    for (copy of temporaryLibrary){
        let div = document.createElement("div")
        let title = document.createElement("p")
         let author = document.createElement("p")
         let pages = document.createElement("p")
         let statusOfBook = document.createElement("p")
         let image = document.createElement("img")
         let wrapper = document.createElement("div")
         let imageDiv = document.createElement("div")
         let checkbox = document.querySelector(".checkbox")

         let seenDiv = document.createElement("div")
         let seenInput = document.createElement("input")
         seenInput.type = "checkbox"
         let label = document.createElement("label")
         label.textContent = "Read"
         label.style.paddingLeft = "4px"
         

         remove = document.createElement("button")
         
         removedBooks = myLibrary.length - 1
         remove.addEventListener("click", test)
         image.src = "delete-off.png"
          
         title.classList.add("child")
  author.classList.add("child")
  pages.classList.add("child")
  statusOfBook.classList.add("child")
  seenDiv.classList.add("checkbox")

  title.textContent = "Title: " + newBook.title
  author.textContent = "Author: " + newBook.author
  pages.textContent = "Pages: " + newBook.pages
  

body.appendChild(wrapper)
wrapper.appendChild(imageDiv)
wrapper.appendChild(div)
imageDiv.appendChild(remove)

seenDiv.appendChild(seenInput)
seenDiv.appendChild(label)
remove.appendChild(image)

div.appendChild(title)
div.appendChild(author)
div.appendChild(pages)
div.appendChild(seenDiv)


//function for delete button
function test (){
  body.removeChild(wrapper)
  myLibrary.pop()
  para.textContent = "Total number of books: " + myLibrary.length
}

wrapper.classList.add("card")
imageDiv.classList.add("delete")
remove.classList.add("btn")
    } 
}

 function openForm(){
  sample.value = ""
  sample1.value = ""
  sample2.value = ""
  popUp.style.display = "block"
 }

 function closeForm(){
   popUp.style.display = "none"
 }
 
 function demoLoop(){
  for (copy of temporaryLibrary){
      let div = document.createElement("div")
      let title = document.createElement("p")
       let author = document.createElement("p")
       let pages = document.createElement("p")
       let statusOfBook = document.createElement("p")
       let image = document.createElement("img")
       let wrapper = document.createElement("div")
       let imageDiv = document.createElement("div")
       remove = document.createElement("button")
       
        let checkbox = document.querySelector(".checkbox")
        let seenDiv = document.createElement("div")
         let seenInput = document.createElement("input")
         seenInput.type = "checkbox"
         let label = document.createElement("label")
         label.textContent = "Read"
         label.style.paddingLeft = "4px"
       removedBooks = myLibrary.length - 1
       remove.addEventListener("click", () => {
        body.removeChild(wrapper)
        myLibrary.pop()
        para.textContent = "Total number of books: " + myLibrary.length
        myLibrary = []
       })
       image.src = "delete-off.png"
        
       title.classList.add("child")
author.classList.add("child")
pages.classList.add("child")
statusOfBook.classList.add("child")
seenDiv.classList.add("checkbox")

title.textContent = "Title: " + demo.title
author.textContent = "Author: " + demo.author
pages.textContent = "Pages: " + demo.pages
statusOfBook.textContent = "Status: " + demo.statusOfBook

body.appendChild(wrapper)
wrapper.appendChild(imageDiv)
wrapper.appendChild(div)
imageDiv.appendChild(remove)

seenDiv.appendChild(seenInput)
seenDiv.appendChild(label)
remove.appendChild(image)
div.appendChild(title)
div.appendChild(author)
div.appendChild(pages)
div.appendChild(seenDiv)


wrapper.classList.add("card")
imageDiv.classList.add("delete")
remove.classList.add("btn")
  } 
}
})()