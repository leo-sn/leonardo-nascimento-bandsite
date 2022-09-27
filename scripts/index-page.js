
//Sample starting Array

let entries = [
    {
        timestamp: "12/20/2020",
        name: "Miles Acosta",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        imgUrl:"",
    },
    {
        timestamp: "01/09/2021",
        name: "Emilie Beach",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        imgUrl:"",
    },
    {
        timestamp: "02/17/2021",
        name: "Connor Walton",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        imgUrl:"",
    }
]

// *******************************
// MANIPULATING DATA FROM THE FORM
// *******************************

//selecting FORM from the html using the ID
const form = document.getElementById('comment-form');

// Adding a listener to the form and running a function when submitted
form.addEventListener('submit', addComment);


//Creating function to add things to the comments array
function addComment (event) {

    //prevent the page to refresh when a new form is submitted
    event.preventDefault();

    //creates a new object with the information from the form
    let newObj = {
        //this will capture the DATE it was submitted
        //and transform to DD/MM/YYYY
        timestamp: new Date().toLocaleDateString("en-UK"),
        name: form.user_name.value,
        comment: form.user_comment.value,
        imgUrl: "",
    }

    //Adding the newObj into the comments array.
    entries.push(newObj);

    parseEntries(entries);
}


// *******************************
// REMOVING DATA FROM THE SECTION
// *******************************

//Selecting where we will add the Comments in our HTML
const commentList = document.getElementById('comment-form-entries');


//creating function to clear ALL the childs inside
//the comment section


// **** THIS IS ONE WAY OF CLEANING ARRAYS
// function clearAllComments(parent) {
//     while (parent.firstChild) {
//         parent.removeChild(parent.firstChild);
//     }
// }
// OR USINGG THE FUNCTION BELOW:
function clearAllComments(id) { 
    id.innerHTML = ""; 
}

// *******************************
// DISPLAYING DATA IN THE SECTION
// *******************************


function displayComment(entry) {
    //now we will replicate the creation of HTML elements

    let firstDiv = document.createElement('div');
    firstDiv.classList.add('comment-section-history')

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('comment-section__image-container');
    firstDiv.appendChild(imgContainer);

    let createImgDiv = document.createElement('img');
    createImgDiv.classList.add('profile-image')
    imgContainer.appendChild(createImgDiv);

    let secondDiv = document.createElement('div');
    secondDiv.classList.add('comment-section__information')
    firstDiv.appendChild(secondDiv);

    let thirdDiv = document.createElement('div');
    thirdDiv.classList.add('comment-section__information--namedate');
    secondDiv.appendChild(thirdDiv);

    let newh3 = document.createElement('h3');
    newh3.classList.add('comment-owner');
    newh3.innerText = entry.name;
    thirdDiv.appendChild(newh3);

    let newh4 = document.createElement('h4');
    newh4.classList.add('comment-date');
    newh4.innerText = entry.timestamp;
    thirdDiv.appendChild(newh4);

    let forthDiv = document.createElement('div');
    forthDiv.classList.add('comment-section__information--comment');
    secondDiv.appendChild(forthDiv);

    let newp = document.createElement('p');
    newp.classList.add('comment-data');
    newp.innerText = entry.comment;
    forthDiv.appendChild(newp);

    let newDivider = document.createElement('hr');
    newDivider.classList.add('divider');
    commentList.appendChild(newDivider);

    commentList.appendChild(firstDiv);    
}

function parseEntries (entries) {

    clearAllComments(commentList)
    console.log(entries);

    // entries.reverse().forEach((entry) => {
    //     displayComment(entry)
    // })

    // THE FOR EACH EXPRESSION AS FOR LOOP - reversed

    for(i = entries.length-1; i >= 0; i--) {
        let entry = entries[i];
        displayComment(entry);
    }
}

// Forcing parseEntries to run so it loads first run with original array entries
parseEntries(entries);








