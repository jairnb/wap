
window.onload = function () {
    renderBook();
}
let submitButton = document.getElementById('submit-btn');
let allBooksDiv = document.getElementById('all-books');
let booksShowCard = document.getElementById('books-show-card');

submitButton.onclick = function(event){
    event.preventDefault();
    let bookToSave = {
        title: document.getElementById('title').value,
        ISBN: document.getElementById('isbn').value,
        publishedDate: document.getElementById('publishedDate').value,
        author: {
            fname: document.getElementById('autor_fname').value,
            lname: document.getElementById('autor_lname').value,
        }
    }

    saveBooks(bookToSave);

    allBooksDiv.innerHTML = '';
    renderBook();
}

async function saveBooks(book) {
    let response = await fetch('http://localhost:3000/books/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book) 
    });

} 


async function renderBook() {
    let books = await fetch('http://localhost:3000/books/').then(response => response.json());

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
        `;
    });
}