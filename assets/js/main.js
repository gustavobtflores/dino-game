const dino = document.querySelector(".dino");
let isJumping = false;

function checkIfSpaceIsPressed(e) {
  if (e.keyCode == "32") {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  let position = 0;
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 200) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 10;
          dino.style.bottom = position + "px";
        }
      });
    } else {
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}

document.addEventListener("keyup", checkIfSpaceIsPressed);
