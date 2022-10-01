



//Creating inital Array
let shows = [
    {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    url: "",
},{
    date:"Tue Sept 21 2021",
    venue:"Pier 3 East",
    location:"San Francisco, CA",
    url:"",
},{
    date:"Fri Oct 15 2021",
    venue:"View Lounge",
    location:"San Francisco, CA",
    url:"",
},{
    date:"Sat Nov 06 2021",
    venue:"Hyatt Agency",
    location:"San Francisco, CA",
    url:"",
},{
    date:"Fri Nov 26 2021",
    venue:"Moscow Center",
    location:"San Francisco, CA",
    url:"",
},{
    date:"Wed Dec 15 2021 ",
    venue:"Press Club",
    location:"San Francisco, CA",
    url:"",
}];


//THIS FUNCTIONS RUNS THROUGH THE shows ARRAY AND CALL THE displayShows FUNCTION
//FOR EACH OBJECT

function showEntry(shows) {

    for (i = 0; i < shows.length; i++) {
        
        let show = shows[i];

        displayShows(show);
    }
}


axios
    .get("https://project-1-api.herokuapp.com/register")
    .then((resp) => {
        apiKey = resp.data.api_key;
        
    })

let showsContainer = document.getElementById('shows-container');

function displayShows(show) {

    let firstDiv = document.createElement('div');
    firstDiv.classList.add('main-section__table--entry');

    let secondDiv = document.createElement('div');
    secondDiv.classList.add('main-section__table--entry-data');

    let createP1 = document.createElement('p');
    createP1.classList.add('main-section__table--header-mobile');
    createP1.innerText = "DATE";

    let createP2 = document.createElement('p');
    createP2.classList.add('main-section__table--data');
    createP2.classList.add('semi-bold');
    createP2.innerText = show.date;

    secondDiv.appendChild(createP1);
    secondDiv.appendChild(createP2);

    firstDiv.appendChild(secondDiv);


    let thirdDiv = document.createElement('div');
    thirdDiv.classList.add('main-section__table--entry-data');

    let createP3 = document.createElement('p');
    createP3.classList.add('main-section__table--header-mobile');
    createP3.innerText = "VENUE";

    let createP4 = document.createElement('p');
    createP4.classList.add('main-section__table--data');
    createP4.innerText = show.venue;

    thirdDiv.appendChild(createP3);
    thirdDiv.appendChild(createP4);

    firstDiv.appendChild(thirdDiv);


    let forthDiv = document.createElement('div');
    forthDiv.classList.add('main-section__table--entry-data');

    let createP5 = document.createElement('p');
    createP5.classList.add('main-section__table--header-mobile');
    createP5.innerText = "LOCATION";

    let createP6 = document.createElement('p');
    createP6.classList.add('main-section__table--data');
    createP6.innerText = show.location;

    forthDiv.appendChild(createP5);
    forthDiv.appendChild(createP6);

    firstDiv.appendChild(forthDiv);

    let createButton = document.createElement('button');
    createButton.classList.add('std-button');
    createButton.innerText = "BUY TICKET";

    firstDiv.appendChild(createButton);

    let createDivider = document.createElement('hr');
    createDivider.classList.add('divider-shows')


    
    showsContainer.appendChild(firstDiv);
    showsContainer.appendChild(createDivider);
}

showEntry(shows)