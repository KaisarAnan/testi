// LOADING

window.addEventListener("load", () => {
setTimeout(() => {
document.getElementById("loader").style.opacity = "0";

setTimeout(() => {
document.getElementById("loader").style.display = "none";
},1000);

},2000);
});


// DATA TESTIMONI

const testimonials = [

{
category:"mobile-legends",
image:"assets/mobile-legends/ml1.jpg"
},
{
category:"mobile-legends",
image:"assets/mobile-legends/ml2.jpg"
},
{
category:"roblox",
image:"assets/roblox/rb1.jpg"
},
{
category:"roblox",
image:"assets/roblox/rb2.jpg"
},
{
category:"rekber",
image:"assets/rekber/rk1.jpg"
},
{
category:"rekber",
image:"assets/rekber/rk2.jpg"
}

];

const gallery = document.getElementById("gallery");

let currentImages = [];
let currentIndex = 0;


// RENDER

function renderGallery(category="all"){

gallery.innerHTML="";

currentImages = testimonials.filter(item =>
category==="all"
? true
: item.category===category
);

currentImages.forEach((item,index)=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${item.image}">
`;

card.addEventListener("click",()=>{
openLightbox(index);
});

gallery.appendChild(card);

});

}

renderGallery();


// FILTER

document.querySelectorAll(".filter-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelectorAll(".filter-btn")
.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

renderGallery(btn.dataset.category);

});

});


// LIGHTBOX

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

function openLightbox(index){

currentIndex=index;

lightbox.classList.add("active");

lightboxImg.src=
currentImages[currentIndex].image;

}

document.getElementById("closeBtn")
.onclick=()=>{
lightbox.classList.remove("active");
};

document.getElementById("nextBtn")
.onclick=()=>{

currentIndex++;

if(currentIndex>=currentImages.length){
currentIndex=0;
}

lightboxImg.src=
currentImages[currentIndex].image;

};

document.getElementById("prevBtn")
.onclick=()=>{

currentIndex--;

if(currentIndex<0){
currentIndex=
currentImages.length-1;
}

lightboxImg.src=
currentImages[currentIndex].image;

};