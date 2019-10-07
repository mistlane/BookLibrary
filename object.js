let myLibrary = []

function Book(title, author, pages, read) {
    this.title= title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + " by "+author+", "+pages+" pages, "+read
    }
}

const TheHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")
const HarryPotter = new Book("Harry Potter and the prisoner of Azkaban", "J.K. Rowling", "336", "read")
const c = new Book("c c c c c c c c c c c c c c c c c c c c c c c c c c ccasdsadasdasd c c asc sa c sac as cas csa c sac sc as c csa asc sac acs csa sca c acc sa asc asc as cas")
const p = new Book("kek")
const b = new Book("bek")
myLibrary.push(TheHobbit, HarryPotter, c, p, b)




const render = function() {
    const container = document.querySelector('#container');
    for(i=0; i < myLibrary.length; i++) {

        const subcontainer = document.createElement("div")
        subcontainer.setAttribute("id", removeSpaces("box"+myLibrary[i].title))
        subcontainer.setAttribute("class", "infobox")


        const subsubcontainer = document.createElement("div")
        subsubcontainer.setAttribute("id", "head"+removeSpaces(myLibrary[i].title))
        subsubcontainer.setAttribute("class", "bookbox")


        const title = myLibrary[i].title
        subsubcontainer.onclick = function() {additionalInformation(title)}


        const content = document.createElement('h1');
        content.textContent = myLibrary[i].title;
        content.setAttribute("id", "id"+removeSpaces(myLibrary[i].title))
        content.setAttribute("class", "book");


        subsubcontainer.appendChild(content);
        subcontainer.appendChild(subsubcontainer);
        container.appendChild(subcontainer);
    
       
       
        addButton(myLibrary[i].title)
        StockReadStatus(myLibrary[i].title)

    }

    console.table(myLibrary)


}

const newBook = function() {

    document.getElementById("newbook").disabled = true;

    const form = document.createElement("form");
    form.setAttribute("id", "form")

    const titletext = document.createElement("p")
    titletext.textContent = "Book title:"
    const title = document.createElement("input"); 
    title.setAttribute("type", "text")

    const authortext = document.createElement("p")
    authortext.textContent = "Author:"
    const author = document.createElement("input"); 
    author.setAttribute("type", "text")

    const pagestext = document.createElement("p")
    pagestext.textContent = "Number of pages:"
    const pages = document.createElement("input"); 
    pages.setAttribute("type", "text")


    const readtext = document.createElement("p")
    readtext.textContent= "Is the book read?"
    const read = document.createElement("input"); 
    read.setAttribute("type", "text")


    title.setAttribute("id","title") 
    author.setAttribute("id", "author")
    pages.setAttribute("id", "pages")
    read.setAttribute("id", "read")
    

    const submit = document.createElement("input")
    submit.setAttribute("type", "button")
    submit.setAttribute("id", "submitbutton")
    submit.setAttribute("onclick", "submitfunction()")
    submit.setAttribute("value", "Submit")


    form.appendChild(titletext);
    form.appendChild(title);  
    form.appendChild(authortext);
    form.appendChild(author);
    form.appendChild(pagestext);
    form.appendChild(pages);
    form.appendChild(readtext);
    form.appendChild(read);
    form.appendChild(submit);






    document.body.appendChild(form);
}



const submitfunction = function() {
  
    console.table(myLibrary)

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    removeElement("form")

    const newbook = new Book(title, author, pages, read)
    myLibrary.push(newbook)
    removeChildren("container")
    render()




    document.getElementById("newbook").disabled = false;
}



function removeElement(id) {

    if(document.getElementById(id)) {
    const elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
    }
}

function removeChildren(id) {
    const myNode = document.getElementById(id);
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
}

const addButton = function(title) {

    const id = "box" +removeSpaces(title)
    const container = document.getElementById(id);
    const buttondiv = document.createElement("div")
    buttondiv.setAttribute("class", "buttondiv")



    const removebutton = document.createElement("input")
    removebutton.setAttribute("type", "button")
    removebutton.setAttribute("class", "addbutton")
    
    removebutton.setAttribute("value", "Remove book")

    removebutton.onclick = function() {removeDiv(this); deletefromArray(title), removeElement(id)};

    const readbutton = document.createElement("input")
    readbutton.setAttribute("id", "readbutton"+title)
    readbutton.setAttribute("type", "button")
    readbutton.setAttribute("class", "readbutton")

    for(j=0; j<myLibrary.length; j++) {
        if(title==myLibrary[j].title) {
            bookvalue = j
        }Book 
    }


    readbutton.value = myLibrary[bookvalue].read
    readbutton.onclick = function() {changeReadStatus(title)}


    buttondiv.appendChild(readbutton)
    buttondiv.appendChild(removebutton)
    container.appendChild(buttondiv)
    
}





const changeReadStatus = function(title) {
    for(k=0; k<myLibrary.length; k++) {
        if(title==myLibrary[k].title) {
            bookvalue = k
        }
    }

    if(myLibrary[bookvalue].read == "read") {
        myLibrary[bookvalue].read = "not read"
        buttoncolor = "red"
    }

    else {
        myLibrary[bookvalue].read = "read"
        buttoncolor = "green"
    }


    readbutton = document.getElementById("readbutton"+title)
    readbutton.style.backgroundColor = buttoncolor
    readbutton.value = myLibrary[bookvalue].read

}



const StockReadStatus = function(title) {
    for(k=0; k<myLibrary.length; k++) {
        if(title==myLibrary[k].title) {
            bookvalue = k
        }
    }

    if(myLibrary[bookvalue].read == "read") {
        myLibrary[bookvalue].read = "read"
        buttoncolor = "green"
    }

    else {
        myLibrary[bookvalue].read = "not read"
        buttoncolor = "red"
    }


    readbutton = document.getElementById("readbutton"+title)
    readbutton.style.backgroundColor = buttoncolor
    readbutton.value = myLibrary[bookvalue].read

}


const removeSpaces = function(str) {
    str = str.replace(/\s+/g, '');
    return str
}

const removeQuotes = function(str) {
    str = str.replace(/['"]+/g, '');
    return str
}


function removeDiv(btn){
    ((btn.parentNode).parentNode).removeChild(btn.parentNode);
}

function deletefromArray(title) {

    for(i=0; i < myLibrary.length; i++) {
        if(title == myLibrary[i].title) {
            deleteNumber = i
        }
    }
    myLibrary.splice(deleteNumber,1)
    
}

function additionalInformation(title) {
    for(i=0; i<myLibrary.length; i++) {
        if(title == myLibrary[i].title) {
            const title = myLibrary[i].title
            const author = myLibrary[i].author
            const pages = myLibrary[i].pages
            const read = myLibrary[i].read
            renderAdditionalInformation(title, author, pages, read)
        }
    }
}

renderAdditionalInformation = function(title, author, pages, read) {

    removeElement("adinfbox")

    const additionalinformationbox = document.createElement("div")
    additionalinformationbox.setAttribute("id", "adinfbox")

    const titletext = document.createElement("p")
    titletext.textContent = "Book title: " + title

    const authortext = document.createElement("p")
    authortext.textContent = "Author: " + author

    const pagestext = document.createElement("p")
    pagestext.textContent = "Number of pages: " + pages

    const readtext = document.createElement("p")
    readtext.textContent = "Is the book read: " + read



    additionalinformationbox.appendChild(titletext);
    additionalinformationbox.appendChild(authortext);
    additionalinformationbox.appendChild(pagestext);
    additionalinformationbox.appendChild(readtext);
    document.body.appendChild(additionalinformationbox);
}



// Pitää siirtää nappi pois bookbox-ista sen viereen, mutta kuitenkin pitää se containerin sisällä.
// Sitten nappi pitää vielä saada toimimaan, vaikka se ei ole esim headharrypotterissa, sen pitäisi kuitenkin 
// headharrypotter poistaa.
// Siihen voin ehkä käyttää: button.onclick = function() {removeDiv(this); deletefromArray(title)}; removeElement(>headID<);
// button.onclick = function() {removeDiv(this); deletefromArray(title)}; removeElement(>headID<)



render()
