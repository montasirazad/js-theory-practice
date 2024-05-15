const myFunction = () => {
  let d = new Date();
  const showTime = document.getElementById("time");
  showTime.innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
};


setInterval(myFunction,1000)