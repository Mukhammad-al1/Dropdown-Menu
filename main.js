console.log("This is working");

const elmenu = document.querySelector(".menu");
const elmenuinline = document.querySelector(".dropdown");

elmenu.addEventListener("click", () => {
  if (elmenuinline.style.display == "none") {
    elmenuinline.style.display = "block";
  } else {
    elmenuinline.style.display = "none";
  }
});

const elmenutwo = document.querySelector(".menutwo");
const elmenutwoinline = document.querySelector(".dropdowntwo");

elmenutwo.addEventListener("click", () => {
  if (elmenutwoinline.style.display == "none") {
    elmenutwoinline.style.display = "block";
  } else {
    elmenutwoinline.style.display = "none";
  }
});
