let orderHistory = JSON.parse(localStorage.getItem("orders")) || [];

function sendOrder() {
  const order = {
    address: document.getElementById("address").value,
    waterCount: document.getElementById("waterCount").value,
    payment: document.getElementById("payment").value,
    courier: document.getElementById("courier").value,
    status: "Yolda",
    timestamp: new Date().toLocaleString()
  };

  orderHistory.push(order);
  localStorage.setItem("orders", JSON.stringify(orderHistory));
  renderOrders();
}

function renderOrders() {
  const list = document.getElementById("orderHistory");
  list.innerHTML = "";
  orderHistory.forEach(o => {
    const li = document.createElement("li");
    li.innerText = `${o.courier} → ${o.address} (${o.waterCount} su) - ${o.payment} - ${o.status}`;
    list.appendChild(li);
  });
}

renderOrders();
