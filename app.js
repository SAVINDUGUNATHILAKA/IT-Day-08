console.log("Hii");

// // localStorage.clear()

localStorage.setItem("name", "ranil");
localStorage.setItem("name", "wimal");
localStorage.setItem("name1", "kamal");


localStorage.removeItem("name1");

let custName = localStorage.getItem("name");

console.log(custName);