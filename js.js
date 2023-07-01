let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spin-btn');
let value = 150+3600;
let isFirstDone = false;
let isSpining = false;

spinBtn.onclick = function(){
    let cor = wheel.getBoundingClientRect();
    let x = cor.x + (cor.width/2);
    let y = cor.y + (cor.height/4);
    if(!isSpining){
        isSpining = true;
        wheel.style.transform = "rotate(" + value + "deg)";
        if(!isFirstDone){
            value += 3630;
            isFirstDone = true;
        }else{
            value += Math.ceil(Math.random()*3600);
        }
        
        
        setTimeout(function(){
            
            isSpining = false;
            let target = document.elementFromPoint(x,y);
            console.log(target.textContent);
            window.alert(target.textContent);
        },5000);
    }
}