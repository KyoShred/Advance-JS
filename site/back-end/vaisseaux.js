let lastShotTime = 0;
let shotDelay = 1000;

let bullets = [];

function updateGame() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].x += bullets[i].vx;
        bullets[i].y += bullets[i].vy;
      }
    }
    for (let i = 0; i < bullets.length; i++) {
        for (let j = 0; j < enemies.length; j++) {
          if (bullets[i].x >= enemies[j].x && bullets[i].x <= enemies[j].x + enemies[j].width &&
                bullets[i].y >= enemies[j].y && bullets[i].y <= enemies[j].y + enemies[j].height) {
            showImpact(enemies[j].x, enemies[j].y);
            enemies.splice(j, 1);
            bullets.splice(i, 1);
          }
        }
    }