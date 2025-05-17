import "./styles.css"
import { addHomeContent } from "./modules/home"
import { addMenuContent } from "./modules/menu";
import { addAboutPage } from "./modules/about";


const btns = document.querySelectorAll("button")

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.textContent.toLowerCase() == "home") {
      clearContent()
      addHomeContent()
    } else if (btn.textContent.toLowerCase() == "menu") {
      clearContent()
      addMenuContent()
    } else if (btn.textContent.toLowerCase() == "about") {
      clearContent()
      addAboutPage()
    }
  })

});

function clearContent() {
  document.querySelector("#content").textContent = "";
}

addHomeContent()
