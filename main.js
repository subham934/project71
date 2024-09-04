const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const toggleButton = document.querySelector(".btn1");
const hidePara = document.querySelector(".hide");
const spanText = document.querySelector("#mySpan");

// toggleButton.onclick = () => {
//   hidePara.classList.toggle("dont-hide");
// };

toggleButton.addEventListener("click", () => {
  hidePara.classList.toggle("dont-hide");
  if (hidePara.classList.contains("dont-hide")) {
    spanText.textContent = "Less";
  } else {
    spanText.textContent = "More";
  }
});

var swiper = new Swiper(".about-slider", {
  loop: true,
  effect: "cards",
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  cardsEffect: {
    slideShadows: false,
  },
  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 10,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  pagination: {
    el: ".swiper-pagination",

  },
});

/*==================EMAIL JS CONTACT FORM================*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
      "service_xd5itc7",
      "template_oewqo8m",
      "#contact-form",
      "N7Tx0oDBugDxTa5eA"
    )
    .then(
      () => {
        // show sent message
        contactMessage.textContent = "Message Sent Successfully ✅";
        // remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //   clear input field

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message Not Sent ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true //animation repeat
});

sr.reveal(".home-text, .about-text");
sr.reveal(".about-slider", { origin: "bottom" });
sr.reveal(".courses", { origin: "left" });
sr.reveal(".contact", { origin: "right" });
sr.reveal(".footer, .service", { interval: 100 });
