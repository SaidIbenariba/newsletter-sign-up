const contactContainer = document.querySelector(".contact-form-container");
const pictureContactContainer = document.getElementById("contact-picture");
const dismissBtn = document.getElementById("dismiss-button");
const inputEmail = document.querySelector("[type='email']");
const submitBtn = document.querySelector(
  "[value='Subscribe to monthly newsletter']"
);
const contactContainerSuccess = document.querySelector(
  ".contact-form-container-success"
);
const subscribeBtn = document.getElementById("Subscribe-btn");
// subscribeBtn.style.animationPlayState = "paused";
// change contact layer
window.onload = function () {
  if (window.innerWidth <= 1440) {
    pictureContactContainer.setAttribute(
      "src",
      "assets/images/illustration-sign-up-mobile.svg"
    );
    contactContainerSuccess.classList.add("mobile");
  } else {
    pictureContactContainer.setAttribute(
      "src",
      "assets/images/illustration-sign-up-desktop.svg"
    );
  }
};
window.addEventListener("resize", function () {
  if (window.innerWidth <= 1440) {
    pictureContactContainer.setAttribute(
      "src",
      "assets/images/illustration-sign-up-mobile.svg"
    );
    contactContainerSuccess.classList.add("mobile");
  } else {
    pictureContactContainer.setAttribute(
      "src",
      "assets/images/illustration-sign-up-desktop.svg"
    );
    contactContainerSuccess.classList.remove("mobile");
  }
});

// button succes and Active
// confirmation
inputEmail.addEventListener("focus", function () {
  subscribeBtn.classList.add("active");
  inputEmail.classList.remove("input-error");
});
inputEmail.addEventListener("blur", function () {
  subscribeBtn.classList.remove("active");
});
submitBtn.addEventListener("click", function () {
  let inputString = inputEmail.value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;

  if (inputString.match(regex)) {
    // Succes
    // contactContainerSuccess.classList.remove("hide");
    // contactContainer.classList.remove("show");
    contactContainerSuccess.classList.remove("hide");
    contactContainer.classList.add("hide");
    dismissBtn.classList.add("active");
  } else {
    // cas Erreur
    contactContainerSuccess.classList.add("hide");
    contactContainer.classList.remove("hide");
    inputEmail.classList.add("input-error");
  }
});

dismissBtn.addEventListener("click", () => {
  dismissBtn.classList.remove("active");
  setTimeout(function () {
    // when dismiss msg
  });
});
