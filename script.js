// Change text content dynamically
function changeText() {
  document.getElementById("text").textContent = "You clicked the button!";
}

// Modify CSS styles via JavaScript
function toggleBox() {
  const box = document.getElementById("box");
  box.style.backgroundColor = box.style.backgroundColor === "tomato" ? "steelblue" : "tomato";
}

// Add or remove element
function addItem() {
  const ul = document.getElementById("list");
  const newItem = document.createElement("li");
  newItem.textContent = "New List Item";
  ul.appendChild(newItem);
}
