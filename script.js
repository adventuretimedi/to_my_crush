const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const answer = document.querySelector(".answer");
const gifContainer = document.querySelector(".gif");

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
    
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";

  heart.style.animationDelay = Math.random() * 2 + "s";

  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => {
      heart.remove();
  });
}


const moveButton = () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
};

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);
document.addEventListener("mouseenter", (e) => {
    const noBtnRect = noBtn.getBoundingClientRect();
    if (e.clientX < noBtnRect.left || e.clientX > noBtnRect.right || e.clientY < noBtnRect.top || e.clientY > noBtnRect.bottom) {
        moveButton();
    }
});
