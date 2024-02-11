// Function to toggle display of create form inputs
function createBtn() {
    document.getElementById('create-form-inputs').style.display = 'flex';
    document.getElementById('addicon').style.transform = 'rotate(45deg)';
    // document.getElementById('create-form-inputs').style.transform = 'translate(-300px,-250px)';
    // document.getElementById('create-form-inputs').style.visibility = 'visible';
}

// Function to close create form
function closeForm() {
    document.getElementById('create-form-inputs').style.display = 'none';
    document.getElementById('items-inthe-list').style.transform = 'translate(0)'
    document.getElementById('addicon').style.transform = 'rotate(90deg)';
    // document.getElementById('create-form-inputs').style.transform = 'translate(500px,-250px)';
    // document.getElementById('create-form-inputs').style.visibility = 'hidden';
}

// Function to hide form inputs
function hideforminput() {
    document.getElementById('create-form-inputs').style.display = 'none';
    document.getElementById('items-inthe-list').style.transform = 'translate(0)'
    document.getElementById('addicon').style.transform = 'rotate(90deg)';
    // document.getElementById('create-form-inputs').style.transform = 'translate(500px,-250px)';
    // document.getElementById('create-form-inputs').style.visibility = 'hidden';
}

// Function to save lists to local storage
function saveLists() {
    var lists = document.querySelector('.container-lists').innerHTML;
    localStorage.setItem('todoLists', lists);
}

// Function to load lists from local storage
function loadLists() {
    var savedLists = localStorage.getItem('todoLists');
    if (savedLists) {
        document.querySelector('.container-lists').innerHTML = savedLists;
    }
}

// Event listener for DOMContentLoaded event to load lists
document.addEventListener('DOMContentLoaded', function () {
    loadLists();
});

// Event listener for beforeunload event to save lists
window.addEventListener('beforeunload', function () {
    saveLists();
});

// Add event listener to the "Add" button
document.getElementById('add-btn').addEventListener('click', function () {
    // Get the value of the input field
    var listNameInput = document.getElementById('nameinput');
    var listName = listNameInput.value.trim();

    if (listName) {
        createList(listName); // If a name is entered, create a new list
        listNameInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a list name."); // Notify the user to enter a list name
    }
});

// Function to create a new list with the given name
function createList(listName) {
    var containerLists = document.querySelector('.container-lists');
    var newList = document.createElement('div');
    newList.textContent = listName;
    containerLists.appendChild(newList);
}

// New code snippet for task overflow button functionality
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the document for dynamic task overflow buttons and SVG icons
    document.addEventListener('click', function (event) {
        // Check if the clicked element has the class 'task-over-btn' or is an SVG icon within it
        if (event.target.classList.contains('task-over-btn') || event.target.closest('.task-over-btn')) {
            // If the clicked element or its parent is a task overflow button or SVG icon, delete its parent div
            event.target.closest('.list-item').remove();
        }
    });

    // Add event listener to the "Add" button for adding new tasks
    document.getElementById('add-list-item-btn').addEventListener('click', function () {
        // Get the value of the input field
        var listNameInput = document.getElementById('list-item-id');
        var listName = listNameInput.value.trim();

        if (listName) {
            createListitems(listName); // If a name is entered, create a new list item
            listNameInput.value = ''; // Clear the input field
        } else {
            alert("Please enter a task name."); // Notify the user to enter a task name
        }
    });
});

// // Function to create a new list item with the given name
// function createListitems(listName) {
//     var containerLists = document.querySelector('.list-one');
//     var newItemContainer = document.createElement('div'); // Create a new <div> element
//     newItemContainer.className = 'list-item'; // Assign the same class as existing items
//     var newListItem = document.createElement('li'); // Create a new <li> element
//     newListItem.textContent = listName; // Set the text content of the new <li> element
//     var delAndImpBtns = document.createElement('div'); // Create div for delete and important buttons
//     delAndImpBtns.className = 'del-and-imp-btns'; // Assign class

//     // Create important button
//     var mrkimpBtn = document.createElement('div');
//     mrkimpBtn.className = 'mrkimp-btn';
//     mrkimpBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                                 <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
//                             </svg>`;

//     // Create task overflow button
//     var taskOverBtn = document.createElement('div');
//     taskOverBtn.className = 'task-over-btn';
//     taskOverBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>`;

//     // Append buttons to their container
//     delAndImpBtns.appendChild(mrkimpBtn);
//     delAndImpBtns.appendChild(taskOverBtn);

//     // Append elements to their respective containers
//     newItemContainer.appendChild(newListItem);
//     newItemContainer.appendChild(delAndImpBtns);
//     containerLists.appendChild(newItemContainer);
// }

// Function to save lists to local storage
function saveLists() {
    var lists = document.querySelector('.container-lists').innerHTML;
    var listItems = document.querySelector('.list-one').innerHTML;
    localStorage.setItem('todoLists', lists);
    localStorage.setItem('todoListItems', listItems);
}

// Function to load lists from local storage
function loadLists() {
    var savedLists = localStorage.getItem('todoLists');
    var savedListItems = localStorage.getItem('todoListItems');
    if (savedLists && savedListItems) {
        // document.querySelector('.container-lists').innerHTML = savedLists;
        document.querySelector('.list-one').innerHTML = savedListItems;
    }
}

// Function to toggle theme and store the preference
function toggleTheme() {
    // Get the current values of the CSS variables --white, --black, and --green
    let currentWhite = getComputedStyle(document.documentElement).getPropertyValue('--white').trim();
    let currentBlack = getComputedStyle(document.documentElement).getPropertyValue('--black').trim();
    let currentGreen = getComputedStyle(document.documentElement).getPropertyValue('--green').trim();

    // Toggle between white and black for --white and --black
    let newWhite = (currentWhite === 'white') ? '#222' : 'white';
    let newBlack = (currentBlack === 'black') ? 'white' : 'black';

    // Toggle between the green colors
    let newGreen = (currentGreen === '#00563b') ? '#00ce8c' : '#00563b';

    // Update the CSS variable values
    document.documentElement.style.setProperty('--white', newWhite);
    document.documentElement.style.setProperty('--black', newBlack);
    document.documentElement.style.setProperty('--green', newGreen);

    // Store the theme preference in localStorage
    localStorage.setItem('theme', newWhite); // Store either 'white' or 'black'
    localStorage.setItem('greenColor', newGreen); // Store the green color
}

// Add event listener to the theme changer button
document.getElementById('themechanger').addEventListener('click', function () {
    toggleTheme();
});

// Check if there's a theme preference stored in localStorage
const storedTheme = localStorage.getItem('theme');
const storedGreenColor = localStorage.getItem('greenColor');

// If there's a stored theme preference, apply it
if (storedTheme && storedGreenColor) {
    document.documentElement.style.setProperty('--white', storedTheme);
    document.documentElement.style.setProperty('--black', (storedTheme === 'white') ? 'black' : 'white');
    document.documentElement.style.setProperty('--green', storedGreenColor);
}











// Function to create a new list item with the given name and timestamp
function createListitems(listName) {
    var containerLists = document.querySelector('.list-one');
    var newItemContainer = document.createElement('div'); // Create a new <div> element
    newItemContainer.className = 'list-item'; // Assign the same class as existing items

    // Get the current date and time
    var dateTime = new Date();
    var date = dateTime.toLocaleDateString();
    var time = dateTime.toLocaleTimeString();

    // Create a new div for storing the date and time
    var timeBox = document.createElement('div');
    timeBox.className = 'timebox';

    // Create spans for date and time
    var dateSpan = document.createElement('span');
    dateSpan.className = 'datecreated';
    dateSpan.textContent = '' + date;

    var timeSpan = document.createElement('span');
    timeSpan.className = 'timecreated';
    timeSpan.textContent = '' + time;

    // Append date and time spans to timeBox
    timeBox.appendChild(dateSpan);
    timeBox.appendChild(timeSpan);

    // Create a new <li> element with the list name
    var newListItem = document.createElement('li');
    newListItem.textContent = listName;

    // Create div for delete and important buttons
    var delAndImpBtns = document.createElement('div');
    delAndImpBtns.className = 'del-and-imp-btns'; // Assign class

    // Create important button
    var mrkimpBtn = document.createElement('div');
    mrkimpBtn.className = 'mrkimp-btn';
    mrkimpBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                            </svg>`;

    // Create task overflow button
    var taskOverBtn = document.createElement('div');
    taskOverBtn.className = 'task-over-btn';
    taskOverBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;

    // Append buttons to their container
    delAndImpBtns.appendChild(mrkimpBtn);
    delAndImpBtns.appendChild(taskOverBtn);

    // Append elements to their respective containers
    newItemContainer.appendChild(timeBox);
    newItemContainer.appendChild(newListItem);
    newItemContainer.appendChild(delAndImpBtns);
    containerLists.appendChild(newItemContainer);
}


document.addEventListener('click', function (event) {
    var clickedElement = event.target;
    while (clickedElement) {
        if (clickedElement.classList && clickedElement.classList.contains('list-item')) {
            clickedElement.classList.toggle('clicked');
            return;
        }
        clickedElement = clickedElement.parentElement;
    }
});






// Function to create a new list item with the given name and timestamp (new item will be on bottom)

// function createListitems(listName) {
//     var containerLists = document.querySelector('.list-one');
//     var newItemContainer = document.createElement('div'); // Create a new <div> element
//     newItemContainer.className = 'list-item'; // Assign the same class as existing items

//     // Get the current date and time
//     var dateTime = new Date();
//     var date = dateTime.toLocaleDateString();
//     var time = dateTime.toLocaleTimeString();

//     // Create a new div for storing the date and time
//     var timeBox = document.createElement('div');
//     timeBox.className = 'timebox';

//     // Create spans for date and time
//     var dateSpan = document.createElement('span');
//     dateSpan.className = 'datecreated';
//     dateSpan.textContent = '' + date;

//     var timeSpan = document.createElement('span');
//     timeSpan.className = 'timecreated';
//     timeSpan.textContent = '' + time;

//     // Append date and time spans to timeBox
//     timeBox.appendChild(dateSpan);
//     timeBox.appendChild(timeSpan);

//     // Create a new <li> element with the list name
//     var newListItem = document.createElement('li');
//     newListItem.textContent = listName;

//     // Create div for delete and important buttons
//     var delAndImpBtns = document.createElement('div');
//     delAndImpBtns.className = 'del-and-imp-btns'; // Assign class

//     // Create important button
//     var mrkimpBtn = document.createElement('div');
//     mrkimpBtn.className = 'mrkimp-btn';
//     mrkimpBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                                 <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
//                             </svg>`;

//     // Create task overflow button
//     var taskOverBtn = document.createElement('div');
//     taskOverBtn.className = 'task-over-btn';
//     taskOverBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;

//     // Append buttons to their container
//     delAndImpBtns.appendChild(mrkimpBtn);
//     delAndImpBtns.appendChild(taskOverBtn);

//     // Append elements to their respective containers
//     newItemContainer.appendChild(timeBox);
//     newItemContainer.appendChild(newListItem);
//     newItemContainer.appendChild(delAndImpBtns);
//     containerLists.appendChild(newItemContainer);

//     // Save the updated lists to local storage
//     saveLists();
// }


// Function to create a new list item with the given name and timestamp
function createListitems(listName) {
    var containerLists = document.querySelector('.list-one');
    var newItemContainer = document.createElement('div'); // Create a new <div> element
    newItemContainer.className = 'list-item'; // Assign the same class as existing items

    // Get the current date and time
    var dateTime = new Date();
    var date = dateTime.toLocaleDateString();
    var time = dateTime.toLocaleTimeString();

    // Create a new div for storing the date and time
    var timeBox = document.createElement('div');
    timeBox.className = 'timebox';

    // Create spans for date and time
    var dateSpan = document.createElement('span');
    dateSpan.className = 'datecreated';
    dateSpan.textContent = '' + date;

    var timeSpan = document.createElement('span');
    timeSpan.className = 'timecreated';
    timeSpan.textContent = '' + time;

    // Append date and time spans to timeBox
    timeBox.appendChild(dateSpan);
    timeBox.appendChild(timeSpan);

    // Create a new <li> element with the list name
    var newListItem = document.createElement('li');
    newListItem.textContent = listName;

    // Create div for delete and important buttons
    var delAndImpBtns = document.createElement('div');
    delAndImpBtns.className = 'del-and-imp-btns'; // Assign class

    // Create important button
    var mrkimpBtn = document.createElement('div');
    mrkimpBtn.className = 'mrkimp-btn';
    mrkimpBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                            </svg>`;

    // Create task overflow button
    var taskOverBtn = document.createElement('div');
    taskOverBtn.className = 'task-over-btn';
    taskOverBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;

    // Append buttons to their container
    delAndImpBtns.appendChild(mrkimpBtn);
    delAndImpBtns.appendChild(taskOverBtn);

    // Append elements to their respective containers
    newItemContainer.appendChild(timeBox);
    newItemContainer.appendChild(newListItem);
    newItemContainer.appendChild(delAndImpBtns);

    // Insert the new div at the beginning of the container
    containerLists.insertBefore(newItemContainer, containerLists.firstChild);

    // Save the updated lists to local storage
    saveLists();
}
