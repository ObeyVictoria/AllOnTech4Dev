var getdata = fetch('http://127.0.0.1.4000/')

getdata.then(response => response.json())
.then(data => console.log(data))