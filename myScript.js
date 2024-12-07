


function createSnowFlake() {
  console.log("my script is running");
  // Creating the <i> tag
  const snow_flake = document.createElement("i");
  // Adding the required classes for the FontAwesome icon to show up
  snow_flake.classList.add("fas");
  snow_flake.classList.add("fa-snowflake");

  // Randomly generate the width to be between 10 and 20 px
  snow_flake.style.width = Math.random() * 10 + 100 + "px";

  // Randomly generate the left position to be between 0 and the innerWidth of the screen
  snow_flake.style.left = Math.random() * window.innerWidth + "px";

  // Randomly generate the animationDuration - between 2 and 5 seconds
  snow_flake.style.animationDuration = Math.random() * 3 + 15 + "s";

  // Randomly add an opacity - between 0 and 1
  snow_flake.style.opacity = Math.random();

  // Add the newly created <i> tag inside the <body> tag
  let body = document.getElementById("body");
  body.appendChild(snow_flake);

  // Set a timeout to remove the snow_flake from the DOM after 5 seconds
  // as we don't want it to overload the page
  setTimeout(() => {
    snow_flake.remove();
  }, 15000);
}

setInterval(createSnowFlake, 100);



// Xử lý sự kiện click
document.getElementById("quoteButton").addEventListener("click", function (event) {
  console.log('get quote button clicked');
  event.preventDefault(); // Ngăn chặn hành vi mặc định (chuyển trang)

  setQuote()
});

function setQuote(){
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Hiển thị câu nói
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.textContent = randomQuote;
  quoteDisplay.style.display = "block";
}

setInterval(setQuote, 60_000);
