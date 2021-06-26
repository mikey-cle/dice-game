function imageLoop (){
    let img1 = document.getElementById('die1');
    let img2 = document.getElementById('die2');
    let img3 = document.getElementById('die3');
    let img4 = document.getElementById('die4');
    let img5 = document.getElementById('die5');
    let img6 = document.getElementById('die6');
// declare array
let imgArr = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];
// do something with it
    i=0;
    while(i < 10){
      let windowRoll = document.getElementById('windowDie');
      let animate = windowRoll.querySelector('p');
      animate.innerHTML = [i];
      console.log(i);
      i++;
    }
}
function roll(){
    let x = Math.floor(Math.random() * 6) +1;
    let box = document.getElementById("windowDie");
    console.log(x);
    document.getElementById('rollSound').pause();
    document.getElementById('rollSound').currentTime = 0;
    document.getElementById('rollSound').play();
    
    
    if(x === 1){
      let target =  box.querySelector('p');
      box.innerHTML = `<img src="images/die1.png"> `;
    }
    else if(x === 2){
      let target =  box.querySelector('p');
      box.innerHTML = `<img src="/images/die2.png"> `;
    }
    else if(x === 3){
      let target =  box.querySelector('p');
      box.innerHTML = `<img src="/images/die3.png"> `;
    }
    else if(x === 4){
      let target =  box.querySelector('p');
      box.innerHTML = `<img src="/images/die4.png"> `;
    }
    else if(x === 5){
      let target =  box.querySelector('p');
      box.innerHTML = `<img src="/images/die5.png"> `;
    }
    else if(x === 6){
      let target =  box.querySelector('p');
      box.innerHTML = `<img src="/images/die6.png"> `;
    }
    
    return x;}
let submit = document.getElementById('submit');
submit.addEventListener("click", () =>{
    roll();
    imageLoop();
})