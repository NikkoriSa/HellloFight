const helloText = document.getElementById('HelloText');
const helloAdd = document.getElementById('AddHello');

let HelloPL_One = 0;
let HelloPL_Two = 0;

let Hello_fight = 0;
let NowWin = 0;
let EndGame = false;

document.addEventListener('keydown', event => {
    if(helloAdd.childElementCount === 10){
        helloAdd.innerHTML = '';
    }
    if (event.code === 'KeyA' && EndGame === false) {
        // 処理を書く
        HelloPL_One++;
        console.log(HelloPL_One);
        const a = document.createElement('p');
        a.textContent = 'hello';
        a.style.color = 'rgb(0,0,255)';
        helloAdd.appendChild(a);
        
    }if (event.code === 'KeyK'&&EndGame === false) {

        HelloPL_Two++;
        console.log(HelloPL_Two);
        var b = document.createElement('p');
        b.textContent = 'hello';
        b.style.color = 'rgb(255,0,0)';
        helloAdd.appendChild(b);
    }
    if(HelloPL_One>HelloPL_Two){
        Hello_fight = HelloPL_One - HelloPL_Two;
        NowWin = 0;
    }if(HelloPL_One<HelloPL_Two){
        Hello_fight = HelloPL_Two - HelloPL_One;
        NowWin = 1;
    }
    if(Hello_fight > 20){
        if(NowWin===0){
            helloText.innerHTML = "P1Win";
            helloText.style.color = 'rgb(0,0,255)'
            
        }if(NowWin===1){
            helloText.innerHTML = "P2WIn";
            helloText.style.color = 'rgb(255,0,0)'
        }
        EndGame = true;
    }else{
        helloText.innerHTML = "HelloPower" + Hello_fight;
        helloText.style.color = 'rgb(0,0,0)'
    }
});