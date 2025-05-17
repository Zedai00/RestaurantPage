function addMenuContent() {
  const content = document.getElementById("content");

  const menuData = {
    "Starters": [
      { name: "Crispy Calamari", price: "$9.99" },
      { name: "Garlic Bread with Cheese", price: "$6.50" },
      { name: "Bruschetta", price: "$7.00" }
    ],
    "Main Courses": [
      { name: "Grilled Ribeye Steak", price: "$19.99" },
      { name: "Spaghetti Carbonara", price: "$14.50" },
      { name: "Herb-Crusted Salmon", price: "$17.00" }
    ],
    "Desserts": [
      { name: "Tiramisu", price: "$6.00" },
      { name: "Molten Chocolate Cake", price: "$7.50" },
      { name: "Classic Cheesecake", price: "$6.50" }
    ],
    "Drinks": [
      { name: "Fresh Lemonade", price: "$3.00" },
      { name: "Iced Coffee", price: "$4.00" },
      { name: "House Red Wine", price: "$5.50" }
    ]
  };

  for (const category in menuData) {
    const section = document.createElement("section");
    section.className = "info-section";

    const heading = document.createElement("h2");
    heading.textContent = category;

    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.padding = "0";

    menuData[category].forEach(item => {
      const li = document.createElement("li");
      li.style.marginBottom = "10px";
      li.innerHTML = `<strong>${item.name}</strong> - ${item.price}`;
      ul.append(li);
    });

    section.append(heading);
    section.append(ul);
    content.append(section);
  }
}

export { addMenuContent }
