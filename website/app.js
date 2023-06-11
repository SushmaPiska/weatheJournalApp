/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(newDate)


let baseURL  = 'http://api.openweathermap.org/data/2.5/weather?zip='
// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=e008bc3e8ecc76e8c6a6cac6032c9013';
// let zipCode = document.getElementById('zip').value;

// let fullURL  = baseURL+zipCode+',us&appid='+apiKey;
// console.log(fullURL)
// Event listener to add function to existing HTML DOM element
const generate = document.getElementById('generate')

generate.addEventListener('click', performAction);

function performAction(){
    const  zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value
    getWeather(baseURL, zipCode, apiKey)
    .then(function(data){
        console.log(data);
        postData('/add', {date:d,temp:data.main.temp,content:feelings});    
    }).then(function(data){
        updateUI();
    })
};
// function perform(e){ 
//     getWeather(baseURL, zipCode, apiKey)
// }
/* Function called by event listener */
const getWeather = async(baseURL, zipCode, apiKey) =>{
    zipCode = document.getElementById('zip').value;

    // let fullURL  = baseURL+zipCode+',us&appid='+apiKey;

    const res = await fetch(baseURL+zipCode+apiKey)
    try{
        const data = await res.json();
        console.log(data)
        return data
    }
    catch(error){
        console.log('error:',error)
    }
}


/* Function to POST data */
const postData = async(url='', data={})=>{
    console.log(data);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json()',
        },
        body: JSON.stringify(data),
    });

    try{
        const newData = await res.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log('error', error);
    }
}
// const feel  = document.getElementById('feelings').value;
// postData('http://localhost:3000', {content:feel});

const updateUI = async() =>{
    
    const req = await fetch('/all');
    try{
        const allData = await req.json();
        console.log(allData);
        document.getElementById('date').innerHTML =`Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.feelings;
    }
    catch(error){
        console.log('error');
    }
}
