const card = document.querySelectorAll(".pannel");


card.forEach((card)=>{
    card.addEventListener("click", function () {
        removeActiveClasses();
        card.classList.add("active");
        console.log('click');
    });
    
});     

function removeActiveClasses (){
card.forEach((card)=>{
        card.classList.remove("active");
});
}