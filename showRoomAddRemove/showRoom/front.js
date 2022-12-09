function loadDataFront(){
  var data = JSON.parse(localStorage.getItem('gallery'))
  console.log(data)
  var result = data.map(function card(dt){
    return `<div class="col-md-3  ">
    <div class="card position-relative shadow-sm p-3 mb-5 bg-body rounded" >
      <img src="${dt.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${dt.make} - ${dt.model}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
          
          </div>
    </div>
  </div>`
  })
   document.getElementById('carlistFront').innerHTML = result.join("")
  }
  loadDataFront()