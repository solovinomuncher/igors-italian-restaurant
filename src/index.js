import "./style.css";
import { module, menuTab, contactTab } from "./modules";

const btnListeners = () => {
  const btnList = document.querySelectorAll(".btn");
  btnList.forEach((btn) => {
    btn.addEventListener("click", switchTab);
  });
};

const switchTab = (e) => {
  const text = e.target.textContent;
  removeAllChildNodes(content);

  if (text === "HOME") {
    body.appendChild(module());
    btnListeners();
  } else if (text === "MENU") {
    body.appendChild(menuTab());
    btnListeners();
  } else if (text === "CONTACT") {
    body.appendChild(contactTab());
    btnListeners();
  }
};

const body = document.querySelector("body");
body.appendChild(module());
btnListeners();

const content = document.querySelector("#content");

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const btnList = document.querySelectorAll(".btn");
btnList.forEach((btn) => {
  btn.addEventListener("click", switchTab);
});
