
window.onload = function () {
    getBooks();
}
let submitButton = document.getElementById('submit-btn');
let allBooksDiv = document.getElementById('all-books');

submitButton.onclick = function(event){
    event.preventDefault();
    alert('hi')
}


async function getBooks() {
    let books = await fetch('http://localhost:3000/books/').then(response => response.json());
    renderBook(books);
}


function renderBook(books) {
    console.log(books)
    books.forEach(book => {
        allBooksDiv.innerHTML += `
        <div class="card w-100 mt-4">
            <div class="card-body">
                <div class="card-buttons">
                    <button id="btn-edit" class="btn btn-primary"><i class="bi bi-pen"></i></button>
                    <button id="btn-delete" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                </div>
                <p class="card-text"><span class="title-span">Title:</span> ${book.title}</p>
                <p class="card-text"><span class="title-span">ISBN:</span> ${book.ISBN}</p>
                <p class="card-text"><span class="title-span">Published At:</span> ${book.publishedDate}</p>
                <p class="card-text"><span class="title-span">Author Firstname:</span> ${book.author.fname}</p>
                <p class="card-text"><span class="title-span">Author Lastname:</span> ${book.author.lname}</p>
            </div>
        </div>
        `
    });
}