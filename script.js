//Portfolio filter

const popup=document.getElementById("popup");
const popupImg=document.getElementById("popup-img");
const closeBtn=document.getElementById("close");

document.querySelectorAll(".grid img").forEach(img=>{
    img.addEventListener("click",()=>{
        popup.style.display="flex";
        popupImg.src=img.src;
    });
});

if(closeBtn){
    closeBtn.onclick=()=>popup.style.display = "none";
}
