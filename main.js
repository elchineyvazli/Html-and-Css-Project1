var nextBtn = document.querySelector(".gallery .buttons .next");
var prevBtn = document.querySelector(".gallery .buttons .prev");
var slide = document.querySelectorAll(".gallery .photos .block");
var i = 0;

prevBtn.onclick = function () {
  slide[i].classList.remove("active");
  i--;

  if (i < 0) {
    i = slide.length - 1;
  }
  slide[i].classList.add("active");
};

nextBtn.onclick = function () {
  slide[i].classList.remove("active");
  i++;

  if (i >= slide.length) {
    i = 0;
  }

  slide[i].classList.add("active");
};

$('.owl-books').owlCarousel({
  center: true,
  items: 2,
  loop: true,
  margin: 10,
  responsive: {
    600: {
      items: 4
    }
  }
});
$(".hMenu").click(function () {
  $(".navbarLinks").toggleClass("active")
})

function toggleClass() {
  var element = document.getElementById("navbarLinks");
  element.classList.toggle("active");
}

function toggleClass1() {
  var element = document.getElementById("navbarLinks");
  element.classList.toggle("active");
}

function showHide() {
  let showHideInput = document.getElementById("showHide");
  let showHideButton = document.getElementById("showHideButton");

  if (showHideInput.type === "password") {
    showHideInput.type = "text";
    showHideButton.innerHTML = `<svg color="red" width="20" height="20" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 0C4.09091 0 1.17955 2.07333 0 5C1.17955 7.92667 4.09091 10 7.5 10C10.9091 10 13.8205 7.92667 15 5C13.8205 2.07333 10.9091 0 7.5 0ZM7.5 8.33333C5.61818 8.33333 4.09091 6.84 4.09091 5C4.09091 3.16 5.61818 1.66667 7.5 1.66667C9.38182 1.66667 10.9091 3.16 10.9091 5C10.9091 6.84 9.38182 8.33333 7.5 8.33333ZM7.5 3C6.36818 3 5.45455 3.89333 5.45455 5C5.45455 6.10667 6.36818 7 7.5 7C8.63182 7 9.54545 6.10667 9.54545 5C9.54545 3.89333 8.63182 3 7.5 3Z" fill="#09B39D"/>
    </svg>
    `;
  } else {
    showHideInput.type = "password";
    showHideButton.innerHTML = `<svg width="20" height="20" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.50341 2.73684C9.38608 2.73684 10.9141 4.26947 10.9141 6.1579C10.9141 6.60263 10.8254 7.02 10.6685 7.41L12.6603 9.4079C13.6903 8.54579 14.502 7.43053 15 6.1579C13.8199 3.15421 10.9072 1.02632 7.49659 1.02632C6.54161 1.02632 5.62756 1.19737 4.78172 1.50526L6.25512 2.98316C6.64393 2.82579 7.06003 2.73684 7.50341 2.73684ZM0.682128 0.868947L2.23738 2.42895L2.55116 2.74368C1.41883 3.62632 0.53206 4.80316 0 6.1579C1.18008 9.16158 4.09277 11.2895 7.50341 11.2895C8.56071 11.2895 9.57026 11.0842 10.4911 10.7147L10.7776 11.0021L12.7763 13L13.6426 12.1311L1.54843 0L0.682128 0.868947ZM4.4543 4.65263L5.5116 5.71316C5.47749 5.85684 5.45703 6.00737 5.45703 6.1579C5.45703 7.29368 6.37108 8.21053 7.50341 8.21053C7.65348 8.21053 7.80355 8.19 7.94679 8.15579L9.00409 9.21632C8.54707 9.44211 8.04229 9.57895 7.50341 9.57895C5.62074 9.57895 4.09277 8.04632 4.09277 6.1579C4.09277 5.61737 4.2292 5.11105 4.4543 4.65263ZM7.39427 4.11895L9.54297 6.27421L9.55662 6.16474C9.55662 5.02895 8.64256 4.11211 7.51023 4.11211L7.39427 4.11895Z" fill="#09B39D"/>
    </svg>`;
  }
  showHideInput.style.border = "none";
  showHideInput.style.outline = "none";
}

function showHide1() {
  let showHideInput = document.getElementById("showHide1");
  let showHideButton = document.getElementById("showHideButton1");

  if (showHideInput.type === "password") {
    showHideInput.type = "text";
    showHideButton.innerHTML = `<svg color="red" width="20" height="20" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 0C4.09091 0 1.17955 2.07333 0 5C1.17955 7.92667 4.09091 10 7.5 10C10.9091 10 13.8205 7.92667 15 5C13.8205 2.07333 10.9091 0 7.5 0ZM7.5 8.33333C5.61818 8.33333 4.09091 6.84 4.09091 5C4.09091 3.16 5.61818 1.66667 7.5 1.66667C9.38182 1.66667 10.9091 3.16 10.9091 5C10.9091 6.84 9.38182 8.33333 7.5 8.33333ZM7.5 3C6.36818 3 5.45455 3.89333 5.45455 5C5.45455 6.10667 6.36818 7 7.5 7C8.63182 7 9.54545 6.10667 9.54545 5C9.54545 3.89333 8.63182 3 7.5 3Z" fill="#09B39D"/>
    </svg>
    `;
  } else {
    showHideInput.type = "password";
    showHideButton.innerHTML = `<svg width="20" height="20" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.50341 2.73684C9.38608 2.73684 10.9141 4.26947 10.9141 6.1579C10.9141 6.60263 10.8254 7.02 10.6685 7.41L12.6603 9.4079C13.6903 8.54579 14.502 7.43053 15 6.1579C13.8199 3.15421 10.9072 1.02632 7.49659 1.02632C6.54161 1.02632 5.62756 1.19737 4.78172 1.50526L6.25512 2.98316C6.64393 2.82579 7.06003 2.73684 7.50341 2.73684ZM0.682128 0.868947L2.23738 2.42895L2.55116 2.74368C1.41883 3.62632 0.53206 4.80316 0 6.1579C1.18008 9.16158 4.09277 11.2895 7.50341 11.2895C8.56071 11.2895 9.57026 11.0842 10.4911 10.7147L10.7776 11.0021L12.7763 13L13.6426 12.1311L1.54843 0L0.682128 0.868947ZM4.4543 4.65263L5.5116 5.71316C5.47749 5.85684 5.45703 6.00737 5.45703 6.1579C5.45703 7.29368 6.37108 8.21053 7.50341 8.21053C7.65348 8.21053 7.80355 8.19 7.94679 8.15579L9.00409 9.21632C8.54707 9.44211 8.04229 9.57895 7.50341 9.57895C5.62074 9.57895 4.09277 8.04632 4.09277 6.1579C4.09277 5.61737 4.2292 5.11105 4.4543 4.65263ZM7.39427 4.11895L9.54297 6.27421L9.55662 6.16474C9.55662 5.02895 8.64256 4.11211 7.51023 4.11211L7.39427 4.11895Z" fill="#09B39D"/>
    </svg>`;
  }
  showHideInput.style.border = "none";
  showHideInput.style.outline = "none";
}

function showHide2() {
  let showHideInput = document.getElementById("showHide2");
  let showHideButton = document.getElementById("showHideButton2");

  if (showHideInput.type === "password") {
    showHideInput.type = "text";
    showHideButton.innerHTML = `<svg color="red" width="20" height="20" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 0C4.09091 0 1.17955 2.07333 0 5C1.17955 7.92667 4.09091 10 7.5 10C10.9091 10 13.8205 7.92667 15 5C13.8205 2.07333 10.9091 0 7.5 0ZM7.5 8.33333C5.61818 8.33333 4.09091 6.84 4.09091 5C4.09091 3.16 5.61818 1.66667 7.5 1.66667C9.38182 1.66667 10.9091 3.16 10.9091 5C10.9091 6.84 9.38182 8.33333 7.5 8.33333ZM7.5 3C6.36818 3 5.45455 3.89333 5.45455 5C5.45455 6.10667 6.36818 7 7.5 7C8.63182 7 9.54545 6.10667 9.54545 5C9.54545 3.89333 8.63182 3 7.5 3Z" fill="#09B39D"/>
    </svg>
    `;
  } else {
    showHideInput.type = "password";
    showHideButton.innerHTML = `<svg width="20" height="20" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.50341 2.73684C9.38608 2.73684 10.9141 4.26947 10.9141 6.1579C10.9141 6.60263 10.8254 7.02 10.6685 7.41L12.6603 9.4079C13.6903 8.54579 14.502 7.43053 15 6.1579C13.8199 3.15421 10.9072 1.02632 7.49659 1.02632C6.54161 1.02632 5.62756 1.19737 4.78172 1.50526L6.25512 2.98316C6.64393 2.82579 7.06003 2.73684 7.50341 2.73684ZM0.682128 0.868947L2.23738 2.42895L2.55116 2.74368C1.41883 3.62632 0.53206 4.80316 0 6.1579C1.18008 9.16158 4.09277 11.2895 7.50341 11.2895C8.56071 11.2895 9.57026 11.0842 10.4911 10.7147L10.7776 11.0021L12.7763 13L13.6426 12.1311L1.54843 0L0.682128 0.868947ZM4.4543 4.65263L5.5116 5.71316C5.47749 5.85684 5.45703 6.00737 5.45703 6.1579C5.45703 7.29368 6.37108 8.21053 7.50341 8.21053C7.65348 8.21053 7.80355 8.19 7.94679 8.15579L9.00409 9.21632C8.54707 9.44211 8.04229 9.57895 7.50341 9.57895C5.62074 9.57895 4.09277 8.04632 4.09277 6.1579C4.09277 5.61737 4.2292 5.11105 4.4543 4.65263ZM7.39427 4.11895L9.54297 6.27421L9.55662 6.16474C9.55662 5.02895 8.64256 4.11211 7.51023 4.11211L7.39427 4.11895Z" fill="#09B39D"/>
    </svg>`;
  }
  showHideInput.style.border = "none";
  showHideInput.style.outline = "none";
}

function signUpButtonClicked() {
  let left = document.querySelector(".left");
  let right = document.querySelector(".right");

  left.style.backgroundColor = "#D6A7F926";
  right.style.backgroundColor = "white";

  left.innerHTML = `<img class="orangeCircle" src="../images/Circles/orangeCircle.png" alt="sekil yoxdur">
  <img class="lightBlueCircle" src="../images/Circles/lightBlueCircle.png" alt="sekil yoxdur">
  <img class="purpleCircle" src="../images/Circles/purpleCircle.png" alt="sekil yoxdur">
  <img class="lightPurpleCircle" src="../images/Circles/lightPurpleCircle.png" alt="sekil yoxdur">

  <h1>Daxil ol</h1>
  <p>Yeni hesabınız yoxdur? Qeydiyyatdan keçərək hesab yarada bilərsiniz</p>
  <button class="signInButton1" onclick="signInButtonClicked()">Daxil ol</button>`

  right.innerHTML = `<input type="text" name="" id="" placeholder="Ad, Soyad">
  <input type="text" name="" id="" placeholder="Telefon nömrəsi">
  <input type="text" name="" id="" placeholder="Email">
  <div class="password1">
      <input id="showHide1" type="password" name="" id="" placeholder="Şifrə">
      <button id="showHideButton1" onclick="showHide1()">

          <svg color="red" width="20" height="20" viewBox="0 0 15 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.5 0C4.09091 0 1.17955 2.07333 0 5C1.17955 7.92667 4.09091 10 7.5 10C10.9091 10 13.8205 7.92667 15 5C13.8205 2.07333 10.9091 0 7.5 0ZM7.5 8.33333C5.61818 8.33333 4.09091 6.84 4.09091 5C4.09091 3.16 5.61818 1.66667 7.5 1.66667C9.38182 1.66667 10.9091 3.16 10.9091 5C10.9091 6.84 9.38182 8.33333 7.5 8.33333ZM7.5 3C6.36818 3 5.45455 3.89333 5.45455 5C5.45455 6.10667 6.36818 7 7.5 7C8.63182 7 9.54545 6.10667 9.54545 5C9.54545 3.89333 8.63182 3 7.5 3Z"
                  fill="#09B39D" />
          </svg>

      </button>
  </div>

  <div class="password2">
      <input id="showHide2" type="password" name="" id="" placeholder="Şifrənin təkrarı">
      <button id="showHideButton2" onclick="showHide2()">

          <svg width="20" height="20" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.50341 2.73684C9.38608 2.73684 10.9141 4.26947 10.9141 6.1579C10.9141 6.60263 10.8254 7.02 10.6685 7.41L12.6603 9.4079C13.6903 8.54579 14.502 7.43053 15 6.1579C13.8199 3.15421 10.9072 1.02632 7.49659 1.02632C6.54161 1.02632 5.62756 1.19737 4.78172 1.50526L6.25512 2.98316C6.64393 2.82579 7.06003 2.73684 7.50341 2.73684ZM0.682128 0.868947L2.23738 2.42895L2.55116 2.74368C1.41883 3.62632 0.53206 4.80316 0 6.1579C1.18008 9.16158 4.09277 11.2895 7.50341 11.2895C8.56071 11.2895 9.57026 11.0842 10.4911 10.7147L10.7776 11.0021L12.7763 13L13.6426 12.1311L1.54843 0L0.682128 0.868947ZM4.4543 4.65263L5.5116 5.71316C5.47749 5.85684 5.45703 6.00737 5.45703 6.1579C5.45703 7.29368 6.37108 8.21053 7.50341 8.21053C7.65348 8.21053 7.80355 8.19 7.94679 8.15579L9.00409 9.21632C8.54707 9.44211 8.04229 9.57895 7.50341 9.57895C5.62074 9.57895 4.09277 8.04632 4.09277 6.1579C4.09277 5.61737 4.2292 5.11105 4.4543 4.65263ZM7.39427 4.11895L9.54297 6.27421L9.55662 6.16474C9.55662 5.02895 8.64256 4.11211 7.51023 4.11211L7.39427 4.11895Z"
                  fill="#09B39D" />
          </svg>

      </button>
  </div>

  <button class="signUpButton1">Qeydiyyatdan keç</button>`
}

function signInButtonClicked() {
  let left = document.querySelector(".left");
  let right = document.querySelector(".right");

  left.style.backgroundColor = "white";
  right.style.backgroundColor = "#D6A7F926";

  left.innerHTML = `<h1>Daxil ol</h1>
  <input type="text" name="" id="" placeholder="Telefon nömrəsi">
  <div class="password">
      <input id="showHide" type="password" name="" id="" placeholder="Şifrə">
      <button id="showHideButton" onclick="showHide()">
          <svg width="20" height="20" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.50341 2.73684C9.38608 2.73684 10.9141 4.26947 10.9141 6.1579C10.9141 6.60263 10.8254 7.02 10.6685 7.41L12.6603 9.4079C13.6903 8.54579 14.502 7.43053 15 6.1579C13.8199 3.15421 10.9072 1.02632 7.49659 1.02632C6.54161 1.02632 5.62756 1.19737 4.78172 1.50526L6.25512 2.98316C6.64393 2.82579 7.06003 2.73684 7.50341 2.73684ZM0.682128 0.868947L2.23738 2.42895L2.55116 2.74368C1.41883 3.62632 0.53206 4.80316 0 6.1579C1.18008 9.16158 4.09277 11.2895 7.50341 11.2895C8.56071 11.2895 9.57026 11.0842 10.4911 10.7147L10.7776 11.0021L12.7763 13L13.6426 12.1311L1.54843 0L0.682128 0.868947ZM4.4543 4.65263L5.5116 5.71316C5.47749 5.85684 5.45703 6.00737 5.45703 6.1579C5.45703 7.29368 6.37108 8.21053 7.50341 8.21053C7.65348 8.21053 7.80355 8.19 7.94679 8.15579L9.00409 9.21632C8.54707 9.44211 8.04229 9.57895 7.50341 9.57895C5.62074 9.57895 4.09277 8.04632 4.09277 6.1579C4.09277 5.61737 4.2292 5.11105 4.4543 4.65263ZM7.39427 4.11895L9.54297 6.27421L9.55662 6.16474C9.55662 5.02895 8.64256 4.11211 7.51023 4.11211L7.39427 4.11895Z"
                  fill="#09B39D" />
          </svg>

      </button>
  </div>
  <button class="signInButton">Daxil ol</button>
  <div class="agreement">
      <input type="checkbox" name="" id="">
      <a href="">Parolu unutmusunuz?</a>
  </div>`;

  right.innerHTML = `<h1>Qeydiyyat</h1>
  <img class="orangeCircle" src="../images/Circles/orangeCircle.png" alt="sekil yoxdur">
  <img class="lightPurpleCircle" src="../images/Circles/lightPurpleCircle.png" alt="sekil yoxdur">
  <img class="lightBlueCircle" src="../images/Circles/lightBlueCircle.png" alt="sekil yoxdur">
  <img class="purpleCircle" src="../images/Circles/purpleCircle.png" alt="sekil yoxdur">
  <p>Yeni hesabınız yoxdur? Qeydiyyatdan keçərək hesab yarada bilərsiniz</p>
  <button id="signUpButton" onclick="signUpButtonClicked()">Qeydiyyatdan keç</button>`;
}

