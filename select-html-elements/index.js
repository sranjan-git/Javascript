console.log('Javascript Loaded.')

//to access dom we can use

// console.log(document.getElementById("container"));

//if we pass an id which is not present, it will show as "null". Let's try this.

console.log(document.getElementById("section"));

//selecting elements by class
//getElementsByClassName()

console.log(document.getElementsByClassName("article"));

//selecting elements by class
//getElementsByTagName()

console.log(document.getElementsByTagName("h3"));

console.log(document.getElementsByTagName("<p>"));

