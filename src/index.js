//import {createConnection} from './database.js'
const fetch = require("node-fetch");
const sleep = require("system-sleep");
const fs = require('fs')
//await createConnection()

//const cpus = os.cpus().length - 1;
const cantxcpu = 1000;

for (let i = 4000000; i < 50000000; i++) {
    fetch("http://20.226.38.138/dni/"+i)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        return JSON.stringify(res)+",";
    })
    .then((res) => {
        console.log(i);
        console.log(res);
        fs.writeFile('dbmessi.json', '"'+i+'":'+res, { flag: 'a+' }, (err) => {})
        //postData("http://localhost:3000/dni", {"dni": i, "data": res})
    })
    sleep(3);
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}