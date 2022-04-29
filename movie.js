const btnClick=document.querySelector("#btnclick");
const form=document.querySelector("#formm");
const formm=document.querySelector("#form");
const movieName=document.querySelector("#movieName");
const movieRating=document.querySelector("#movieRating");
const movieUrl=document.querySelector("#movieUrl");
const closeBtn=document.querySelector("#close");
const confirmBtn=document.querySelector("#submit");
const h3=document.querySelector("h3");
const kul=document.querySelector("#kul");

btnClick.addEventListener("click",(e)=>{
    e.preventDefault();
    form.classList.add("formvisible")
})
closeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    form.classList.remove("formvisible")
})
let arr=[]
confirmBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(movieName.value !=""&&movieRating.value !=""){
        const movies={
            name:movieName.value,
            rating:movieRating.value,
            urli:movieUrl.value
        }
        
        arr.push(movies);
       // arr.forEach(){
        updateDOM();  
       // }   
    }//if
    else{
        m();
        setTimeout(()=>{h3.textContent=""},3000)
    }//else
})//click

const m=function eror(){
   return h3.textContent="Tkaya Pryan kawa";
}
function updateDOM(){
    kul.innerHTML=""
    arr.forEach((i)=>{
    const fav=document.createElement("div")
    fav.innerHTML=`
    <div style="height:450px;width:250px;margin:3px;text-align:center">
    <img src=${i.urli} style="height:200px;width:150px;"></img> <br>
    <p>${i.name}</p><br>
    <p>${i.rating}</p></div>
    `;
    kul.append(fav);
}) 
}