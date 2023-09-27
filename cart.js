let allProductArray = JSON.parse(localStorage.getItem('allProduct')) || []
let sum = 0

function display(arr) {

  arr.forEach((elem) => {
    // document.querySelector('#container').innerHTML = null

    let div = document.createElement('div');
    div.setAttribute('class', 'cartchild');

    let image = document.createElement('img');
    image.setAttribute('src', elem.image);

    let button = document.createElement('button')
    button.innerText = 'Remove'
    button.setAttribute('class', 'cartBtn')
    button.addEventListener("click", () => {
      next(elem)
    })

    let title = document.createElement('h2');
    title.innerText = elem.title;

    let brand = document.createElement('h5');
    brand.innerText = elem.category;

    let price = document.createElement('h3');
    price.innerText = `$ ${elem.price}`;

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'innerchild');

    div2.append(title, brand, price, button)

    // div2.append(image, div2);
    // document.querySelector('#innerchild').append(div)

    div.append(image, div2);
    document.querySelector('#cont').append(div)

    sum = Number(sum + elem.price)
    localStorage.setItem("totalpay", sum)

  })
  document.getElementById("payment").innerText = ` ₹ ${sum || "00"}`
  document.getElementById("totalproduct").innerText = ` ${allProductArray.length + "" || "0  "}`
  document.getElementById("total").innerText = `${sum + 50 || "00"}`

}
document.querySelector("#pay").addEventListener("click", () => {
  let ccheck = document.querySelector("#check").checked;
  if (sum <= 0) {
    alert("Please purchase any item first")

  } else if (ccheck && sum > 0) {
    window.location.href = "billing.html"
  } else {
    alert("Please accept the terms & conditions")
  }
})
display(allProductArray)



