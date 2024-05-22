let speak_now=document.querySelector(".mice");
let speak=document.querySelector(".speak");
let close=document.getElementById("close");
let cross=document.querySelector(".cross");
const search_btn=document.getElementById("search_btn");
let listen=document.getElementById("listen");
let snow=document.getElementById("snow_div");
let microphone=document.getElementById("microphone");


const input_text=document.querySelector(".input_text");

let serch_text;
input_text.addEventListener("keyup",(e)=>{
serch_text=input_text.value;
if(serch_text.length>=1){
cross.style.display="block";
}else{
    cross.style.display="none";
}
if(e.key==="Enter"){
    google_search();
}
})


search_btn.addEventListener("click",()=>{
    google_search();
})


cross.addEventListener("click",()=>{
    cross.style.display="none";
    input_text.value="";
})

speak_now.addEventListener("click",()=>{
    document.body.classList.add("hidden");
    speak.style.display="flex";
    speak.style.visibility="visible";
    snow.style.background="#202124";
    setTimeout(() => {
        microphone.style.color="red";
    }, 1000);
    setTimeout(() => {
        listen.innerHTML="Speak Now";
        microphone.style.color="white";
        snow.style.background="red";
    }, 3000);

    setTimeout(() => {
        speak.style.display="none";
        document.body.classList.remove("hidden");
        listen.innerHTML="Listening...";
    }, 12000);

});

close.addEventListener("click",()=>{
speak.style.display="none";
document.body.classList.remove("hidden");
listen.innerHTML="Listening...";

})

function google_search(){
    if(serch_text.length>=1){
       let url=`https://google.com/search?q=${serch_text}`;
       window.location=url;
    }
}


