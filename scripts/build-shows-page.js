



//Creating inital Array
let shows = [
//     {
//     date: "Mon Sept 06 2021",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//     url: "",
// },{
//     date:"Tue Sept 21 2021",
//     venue:"Pier 3 East",
//     location:"San Francisco, CA",
//     url:"",
// },{
//     date:"Fri Oct 15 2021",
//     venue:"View Lounge",
//     location:"San Francisco, CA",
//     url:"",
// },{
//     date:"Sat Nov 06 2021",
//     venue:"Hyatt Agency",
//     location:"San Francisco, CA",
//     url:"",
// },{
//     date:"Fri Nov 26 2021",
//     venue:"Moscow Center",
//     location:"San Francisco, CA",
//     url:"",
// },{
//     date:"Wed Dec 15 2021 ",
//     venue:"Press Club",
//     location:"San Francisco, CA",
//     url:"",
// }
];


//THIS FUNCTIONS RUNS THROUGH THE shows ARRAY AND CALL THE displayShows FUNCTION
//FOR EACH OBJECT
function showEntry(shows) {
    for (i = 0; i < shows.length; i++) {
        let show = shows[i];
        displayShows(show);
    }
}

//CREATE API EMPTY STRING
let apiKey = '';


//CREATNING FUNCTION TO GRAB THE API KEY AND RETURN A PROMISE
function getApiKey() {

    //CHECKING IF API KEY EXISTS - IF NOT, GET THE KEY AND RETURN AS PROMISE - OTHERWISE, RETURN THEY KEY AS PROMISE
    if(apiKey = ''){
        return axios.get("https://project-1-api.herokuapp.com/register")
        .then((resp) => {
            apiKey = resp.data.api_key;
            return Promise.resolve(apiKey)
    })} 
    else {
        return Promise.resolve(apiKey)
    }
}

//GET SHOW DATES FROM API BY CHAININIG THE REQUEST.
function getShowDates() {
    getApiKey()
    .then((apiKey) => axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}/`))
    .then((res) => {
       shows = res.data
       showEntry(shows)
       console.log(res);
    })
    .catch(err => console.log(err));
}


//FORMATTING EPOCH DATE
function formatDateShow(timestamp) {
    var date = new Date(timestamp);
    return date.toDateString(); // THIS WILL RETURN THE DATE IN THE FORMAT > WEEKDAY MONTH DATE YEAR

    // var mdate = date.getDate();
    // var year = date.getFullYear();
    // var month = date.getMonth() + 1;
    // var day = date.getDay();
    // var daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    // var daysOfTheMonth = ['January','February','March','April','May','June','July','August','September','October','November','December']
}

getShowDates()

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
    createP2.innerText = formatDateShow(show.date);

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
    createP4.innerText = show.place;

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