const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const answer = document.querySelector(".answer");
const gifContainer = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  answer.innerHTML = "Got you! Now you're infected with my love 😘";

  gifContainer.innerHTML = "";

  const gifEmbed = document.createElement("div");
  gifEmbed.className = "tenor-gif-embed";
  gifEmbed.setAttribute("data-postid", "11397231996208728070");
  gifEmbed.setAttribute("data-share-method", "host");
  gifEmbed.setAttribute("data-aspect-ratio", "1.09211");
  gifEmbed.setAttribute("data-width", "100%");

  gifContainer.appendChild(gifEmbed);

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://tenor.com/embed.js";

  gifContainer.appendChild(script);
});

// Make the No button move randomly on hover
noBtn.addEventListener("touchstart", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


// noBtn.addEventListener("mouseover", moveButton);
// noBtn.addEventListener("touchstart", moveButton); // Додаємо підтримку для сенсорних пристроїв

// function moveButton() {
//   const wrapper = document.querySelector(".wrapper");
//   const wrapperRect = wrapper.getBoundingClientRect();
//   const noBtnRect = noBtn.getBoundingClientRect();

//   // Розрахунок максимальних позицій, щоб кнопка залишалася в межах обгортки
//   const maxX = wrapperRect.width - noBtnRect.width;
//   const maxY = wrapperRect.height - noBtnRect.height;

//   const randomX = Math.floor(Math.random() * maxX);
//   const randomY = Math.floor(Math.random() * maxY);

//   noBtn.style.left = randomX + "px";
//   noBtn.style.top = randomY + "px";
// }