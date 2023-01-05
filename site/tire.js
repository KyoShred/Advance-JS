/*const shoot = document.getElementById("shoot");
let laser = [];
let boom;
shipX = 45;
left = 0;
bullY = 100;*/

/*function shooted() {
  laser.forEach(tire => console.log(tire));{
    if(laser == alien){
    console.log('boom');}
    
    else {
    }
  }
}*/

/*function checkKey(e) {
  if (e.key == 'Space') {
    console.log("Pressed space")
    console.log(shot)
    if (shot == 0){
      shoot()
    }
  }
}

function bullet(){
  shot = 1;
  bully = 90;
  bullet=document.createElement("div")
  bullet.classList.add("bullet")
  bullet.setAttribute("id",`bullet`)
  document.body.insertBefore(bullet, shoot)
  bull = document.getElementById(`bullet`)
  bull.style.left = `${shipX + 1.8}%`
  bull.style.top = `${bullY}%`
  }*/

  document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      console.log("shoot");
      shoot();
    }
  });
