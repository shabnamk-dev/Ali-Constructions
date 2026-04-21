//Portfolio filter
const buttons=document.querySelectorAll(".filter-btn");
const item=document.querySelectorAll(".portfolio-item");

buttoms.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const filter=btn.getAttribute("data-filter");

        items.forEach(item=>{
            if(filter==="all"||item.classList.contains(filter)){
                item.style.display="block";

            }
            else{
                item.style.display="none";
            }
        });
    });
});

//scroll animation
const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
    sections.forEach(sec=>{
        const top=window.scrollY;
        const offset=sec.offsetTop-200;
        const height=sec.offsetHeight;

        if(top>=offset && top<offset+height){
            sec.classList.add("show");
        }
    });
});