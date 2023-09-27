function mydata() {
    try {
      fetch('https://tame-rose-lion-coat.cyclic.app/pro/all')
        .then(result => result.json())
        .then((data) => { return display(data) })
        .catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }
  
  
  function display(arr) {
  
    arr.forEach((elem) => {
      // document.querySelector('#container').innerHTML = null
  
      let div = document.createElement('div');
      div.setAttribute('class', 'child');
  
      let image = document.createElement('img');
      image.setAttribute('src', elem.image);
  
      let button = document.createElement('button')
      button.innerText = 'View Details'
      button.setAttribute('class', 'btn')
      button.addEventListener("click",()=>{
        next(elem)
      })
  
      let title = document.createElement('h2');
      title.innerText = elem.title;
  
      let brand = document.createElement('h5');
      brand.innerText = elem.category;
  
      let price = document.createElement('h3');
      price.innerText = `$ ${elem.price}`;
  
      div.append(image, button, title, brand, price);
      document.querySelector('#container').append(div)
     
    })
    
     
  }
  
  
  function next(product){
    // console.log('data', product)
    localStorage.setItem('oneProduct',JSON.stringify(product))
    window.location.href='details.html'
  }
  
  
  
  
  mydata()