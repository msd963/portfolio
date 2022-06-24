

//full fill click event

let findButton = document.querySelector("#color-cng-btn");
let getBody = document.querySelector("body");
//let findInput = document.querySelector('#inputfld');

/*
//onload function 
const mainFunc = ()=>{
    findButton.addEventListener("click", function(){
        let randomColor = randomColorGenerate();
        getBody.style.backgroundColor = randomColor;
    });
}
mainFunc();
//random rgb color generating
const randomColorGenerate = ()=>{
    red = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
    white = Math.floor(Math.random()*255);
    
    return `rgb(${red}, ${green}, ${white})`;
}

*/
const getInputFld = document.querySelector("#inputfld");
const main = ()=>{
    findButton.addEventListener("click",function(){
        let randomHxColor = genarateHexColor();
        getBody.style.backgroundColor = randomHxColor;
        getInputFld.value = randomHxColor;      
    });

    let getCopyBtn = document.querySelector(".copy-btn");

    getCopyBtn.addEventListener("click",function(){
       
       
       let lessItem = getInputFld.value.substring(1);
        

        if(isColorValid(lessItem)){
             // to copy input filds value 
            navigator.clipboard.writeText(`#${lessItem}`);
            massageGenerate(`#${lessItem} copied`);

        }else if(getInputFld.value.length < 7){
            getInputFld.value = `#${getInputFld.value}`;
            massageGenerate(`#${lessItem} copied`);
        }else{
            alert("invalid color code!!");
        }

    });
    getInputFld.addEventListener("keyup",function(e){
         let color = e.target.value;
         if(color && isColorValid(color)){
            getBody.style.backgroundColor = `#${color}`;
         }
    });
}

main();
//Genarating Hexad color
const genarateHexColor = ()=>{
   const red = Math.floor(Math.random()*255);
   const black = Math.floor(Math.random()*255);
   const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${black.toString(16)}${blue.toString(16)}`;
}

const massageGenerate = (mass)=>{
    let div = document.createElement("div");
    div.innerText = mass;
    div.className = `toast-massage toast-massage-slide-in`;
    document.body.appendChild(div);
    div.addEventListener("click",function(){

        this.style.display = 'none';
    });
}
/**
 * 
 * @param {string} color : ;
 */

const isColorValid = (color)=>{

    if(color.length !== 7)return false; 
    
   return /^[0-9A-Fa-f]{6}$/i.test(color);

}






