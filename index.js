let i1 = document.getElementById("manu01");
let b1 = document.getElementById("button01");
let r1 = document.getElementById("result");




b1.addEventListener("click", final);

function final(){
    let user01 = parseInt(i1.value);
    
    if(user01 === 18){
        r1.innerHTML = "Congratulations You Got it Right!"
        r1.style.color = "#dbd514"
    }
    else if(user01 < 18){
        r1.innerHTML = "Your Number Shorter Than Guessing Value Please Try Again!"
        r1.style.color = "#e8a684"
    }
    else {
        r1.innerHTML="Your Number is Higher Than Guessing Value Please Try Again!"
        r1.style.color = "#096cde";
        
    }
}