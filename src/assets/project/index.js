let h1=document.querySelector('#h1');
h1.addEventListener('click',()=>{
    
})
let body=document.querySelector("body");
let button=document.querySelector(".button");
let modebtn=document.querySelector("#h1");
let currentmode="light";
modebtn.addEventListener("click",()=>{
 
    if(currentmode==="light"){
        currentmode="dark";
        body.style.background=("black"),body.style.color=("white");    
    
    }else{
        currentmode="light";
        body.style.background=("white"),body.style.color=("black"),
button.style.background=("red");
    }
    //document.querySelector("body").style.background=("white")

    console.log(currentmode);
});
