let settingel=document.querySelector(".setting");

// settingel.addEventListener("click", ()=>{
    
//     let theamdiv=document.querySelector(".theam-div")
//    theamdiv.classList.toggle("open");
// })
function translatex(){
    let theamdiv=document.querySelector(".theam-div")
   theamdiv.classList.toggle("open")
}
// translatex()

let mode="dark";
let sun= document.querySelector(".fa-sun")
let moon= document.querySelector(".fa-moon ")
let r = document.querySelector(':root');


function light(){

        if(mode=="dark"){

                r.style.setProperty('--bg-black-100', '#222222');
                r.style.setProperty('--bg-black-1000', '#fdf9ff');
                r.style.setProperty('--bg-black-900', '#151515');
                r.style.setProperty('--bg-black-800', '#f2f2fc');
                r.style.setProperty('--bg-black-50', '#393939');
                r.style.setProperty('--bg-black-1200', '#e8dfec');
                mode="light"
                
        }
       
      else if(mode=="light"){
        r.style.setProperty('--bg-black-100', '#fdf9ff');
        r.style.setProperty('--bg-black-1000', '#222222');
        r.style.setProperty('--bg-black-900', '#f2f2fc');
        r.style.setProperty('--bg-black-800', '#151515');
        r.style.setProperty('--bg-black-50', '#e8dfec');
        r.style.setProperty('--bg-black-1200', '#393939');
        mode="dark"

      }
}

function redtoggle(){
        r.style.setProperty('--main-color', '#FC2947');

}
function orangetoggle(){
        r.style.setProperty('--main-color', '#fa5b0f');

}
function greentoggle(){
        r.style.setProperty('--main-color', '#127C56');

}
function pinktoggle(){
        r.style.setProperty('--main-color', '#FF55BB');

}
function bluetoggle(){
        r.style.setProperty('--main-color', '#00ADB5');

}


// auto text type animation



let typedel= new (".typing",{
        strings:["Web Designer","Web Developer","Freelancer"],
        typeSpeed:100,
        BackSpeed:60,
        loop:true

})