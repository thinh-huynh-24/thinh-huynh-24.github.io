
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

const Inmage = document.querySelector("img");
Inmage.addEventListener("click", () => {
    const someshit = Inmage.getAttribute("src");
    if (someshit === "ADASDASDASDASDAS.jpg") {
        Inmage.setAttribute("src","asdsss.jpg");
    } else {
        Inmage.setAttribute("src","ADASDASDASDASDAS.jpg");
    }
});
  
let button = document.querySelector("button");
button.addEventListener("click", () => {
    setUserName();
  });

let heading = document.querySelector("h1");


  

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (myName === null) {
        
    }else
    {
    localStorage.setItem("name", myName);
    heading.textContent = `Mozilla is cool, ${myName}`;
    }
    
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    heading.textContent = `Mozilla is cool, ${storedName}`;
  }