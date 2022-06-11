
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


function Book(title, author, pages, statusOfBook){
  this.title = title
  this.author = author
  this.pages = pages
  this.info = function(){
    return  this.title + " by " + this.author + ", " + this.pages + ", " + this.status 
  }
}
demo = new Book("Unmasked", "Frank Stone", "223")
let temporaryLibrary = [demo,]
let myLibrary = [demo,]
demoLoop()


function addBookToLibrary(){
  /*for (let radio of radios){
    if (radio.checked){
     radioResult = radio.value
    } else {radioResult = "Unread"}
}*/
if (sample.value.length > 20 || sample.value.length < 1 
    || sample1.value.length > 20 || sample1.value.length < 1
    || sample2.value.length < 1){
  return
}
 newBook = new Book(sample.value, sample1.value, sample2.value)
//temporaryLibrary.push(newBook)

myLibrary.push(newBook)
temporaryLibrary = []
temporaryLibrary.push(newBook)
myLibraryLoop()


 numOfBooks = myLibrary.length 
 para.textContent = "Total number of books: " + myLibrary.length
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
         //let seenImage = document.createElement("img")
         //seenImage.src = "eye.svg"
         //seenButton.addEventListener("click", see)

         remove = document.createElement("button")
         //in progress
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

/*function see (){
  if(radioResult = "Unread"){
    return statusOfBook.textContent = "Status: " + "Read"
  } else if (radioResult = "Read"){
    return statusOfBook.textContent = "Status: " +  "Unread"
  }
}*/

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
       //let seenDiv = document.createElement("div")
       //  let seenButton = document.createElement("button")
        // let seenImage = document.createElement("img")
        // seenImage.src = "eye.svg"
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
//imageDiv.appendChild(seenDiv)
seenDiv.appendChild(seenInput)
seenDiv.appendChild(label)
remove.appendChild(image)
div.appendChild(title)
div.appendChild(author)
div.appendChild(pages)
div.appendChild(seenDiv)


function test (){
body.removeChild(wrapper)
para.textContent = "Total number of books: " + removedBooks
}

wrapper.classList.add("card")
imageDiv.classList.add("delete")
remove.classList.add("btn")
  } 
}

/*for (let i = 0; i < temporaryLibrary.length; i++){
  let div = document.createElement("div")
  let title = document.createElement("p")
  let author = document.createElement("p")
  let pages = document.createElement("p")
  let statusOfBook = document.createElement("p")
  let image = document.createElement("img")
  let wrapper = document.createElement("div")
  let imageDiv = document.createElement("div")
  remove = document.createElement("button")
  image.src = "delete-off.png"

  title.classList.add("child")
  author.classList.add("child")
  pages.classList.add("child")
  statusOfBook.classList.add("child")

  title.textContent = "Title: " + newBook.title
  author.textContent = "Author: " + newBook.author
  pages.textContent = "Pages: " + newBook.pages
  statusOfBook.textContent = "Status: " + newBook.statusOfBook

body.appendChild(wrapper)
wrapper.appendChild(imageDiv)
wrapper.appendChild(div)
imageDiv.appendChild(remove)
remove.appendChild(image)
div.appendChild(title)
div.appendChild(author)
div.appendChild(pages)
div.appendChild(statusOfBook)

wrapper.classList.add("card")
imageDiv.classList.add("delete")
remove.classList.add("btn")
 }

 let para = document.querySelector(".total")
 temporaryLibrary = []
 numOfBooks = myLibrary.length + 1
 para.textContent = "Total number of books: " + numOfBooks
}




*/



//next line of action 
//clean up the code 
