fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    const menuList = document.getElementById("menu-list");

    data.menu.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      menuList.appendChild(li);
    });
  });

function ordinaPacco() {
  alert("Contattaci su WhatsApp per ordinare!");
}