let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];

function save(){
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
}

function addPizza(){
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const img = document.getElementById("img").value;

  const existing = pizzas.find(p => p.name === name);
  if(existing){
    existing.price = price;
    existing.img = img;
  } else {
    pizzas.push({name, price, img});
  }
  save();
  render();
}

function del(i){
  pizzas.splice(i,1);
  save();
  render();
}

function render(){
  const list = document.getElementById("pizzaList");
  list.innerHTML = "";
  pizzas.forEach((p,i)=>{
    list.innerHTML += `
      <div class="pizza-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="login-btn" onclick="del(${i})">Delete</button>
      </div>`;
  });
}

render();
