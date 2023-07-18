const navbarElemt = document.querySelector(".navbar");

const bottomContainerElement = document.querySelector(".bottom-container");

console.log(navbarElemt.offsetHeight);

console.log(bottomContainerElement.offsettop);


window.addEventListener("scroll", ()=>{
   if (window.scrollY > bottomContainerElement.offsettop - navbarElemt.offsetHeight - 50) {
    navbarElemt.classList.add("active")
   }else{
    navbarElemt.classList.remove("active");
   }
});