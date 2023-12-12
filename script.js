let button = document.querySelectorAll("button")
let input = document.querySelector("input")
for (x= 0; x< button.length; x++) {
    button[x].addEventListener("click",(e)=>{
         if(e.target.innerHTML=="C"){
            button[0].innerHTML="AC";
            input.value=""
        }
        else if (e.target.innerHTML=="+/-"){
            input.value="-"+input.value
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="%"){
            input.value+= "/100"; 
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="÷"){
            input.value+= "/";
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="7"){
            input.value+= 7;
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="8"){
            input.value+= 8;
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="9"){
            input.value+= 9;
            button[0].innerHTML="C"
            
        }
        else if (e.target.innerHTML=="x"){
            input.value+= "*";
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="4"){
            input.value+= 4;
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="5"){
            input.value+= 5;
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="6"){
            input.value+= 6;
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="-"){
            input.value+= "-"; 
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="1"){
            input.value+= 1;
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="2"){
            input.value+= 2;
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="3"){
            input.value+= 3;
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="+"){
            input.value+= "+";
            button[0].innerHTML="C"
        }
        else if (e.target.innerHTML=="0"){
            input.value+= 0;
            button[0].innerHTML="C"
        }
        else if(e.target.innerHTML=="."){
            input.value+= ".";
            button[0].innerHTML="C"
        }

         else if (e.target.innerHTML=="="){
            let answer=String(input.value)
           let result = eval(answer)
            button[0].innerHTML="C"
            input.value=result
        }
    } )
}