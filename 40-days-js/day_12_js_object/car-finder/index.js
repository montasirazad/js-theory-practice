const carModels=[]



const carBtnStyle = {
  backgroundColor: "#9db3dcff",
  border: "none",
  borderRadius: "3px",
};

const carBtnHoverStyle = {
  cursor: "pointer",
  backgroundColor: "red",
};
const carBtn = document.createElement("button");
carBtn.innerText = "Click";
Object.assign(carBtn.style, carBtnStyle);

carBtn.onmouseover = () => {
  carBtn.innerText = "Choose your car";
  Object.assign(carBtn.style, carBtnHoverStyle);
  console.log("cursor hovered the button");
};

carBtn.onmouseleave = () => {
  carBtn.innerText = "Click";
  Object.assign(carBtn.style, carBtnStyle);
  console.log("cursor left the button");
};

document.body.appendChild(carBtn);
carBtn.addEventListener("click", () => {
  let car = prompt("Enter the car name");
  const style_1 =
    "color:blue;font-size:25px;font-weight:bold;background-color:white;padding:1px 6px 1px 6px;";
  const style_2 =
    "color:red;font-size:25px;font-weight:bold;background-color:white;padding:1px 6px 1px 6px;";
  let mainStyle;
  switch (car) {
    case "toyota":
      {
        car.toLowerCase().trim() == "toyota";
        mainStyle = style_2;
        console.log(`the car is %c${car.toLocaleUpperCase()}`, mainStyle);
        const h2 = document.createElement("h2");
        h2.innerText = "Your car is" + " " + car.toLocaleUpperCase();
        h2.style.color = "red";
        document.body.appendChild(h2);
        h2.previousElementSibling.remove();
      }
      break;
    case "bmw":
      {
        car.toLowerCase().trim() == "bmw";
        mainStyle = style_1;
        console.log(`the car is %c${car.toLocaleUpperCase()}`, mainStyle);
        const h2 = document.createElement("h2");
        h2.innerText = "Your car is" + " " + car.toLocaleUpperCase();
        h2.style.color = "blue";
        document.body.appendChild(h2);
        h2.previousElementSibling.remove();
      }
      break;
    default:
      {
        console.log("not a valid car");
        const h2 = document.createElement("h2");
        h2.innerText =
          "You choose " + car.toLocaleUpperCase() + ", but it's not found.";
        h2.style.color = "black";
        document.body.appendChild(h2);
        h2.previousElementSibling.remove();
      }
      break;
  }
});
