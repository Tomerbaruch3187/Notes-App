const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

let notes;


// שמירה וטעינה מהלוקל סטורג
function loadNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
    notes = document.querySelectorAll('.input-box');
}

loadNotes();

function saveNotes() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}
// שמירה וטעינה מהלוקל סטורג

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');

    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = './images/delete.png';

    notesContainer.appendChild(inputBox)
    inputBox.appendChild(img);
    notes = document.querySelectorAll('.input-box');
});

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        saveNotes();
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function () {
                saveNotes();
            }
        })
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});