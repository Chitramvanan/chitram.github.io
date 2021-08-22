let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  alert("Thank you. Contact Form has been submitted successfully.");
  console.log(form.elements[2].type);
  console.log("=================Form Submission==============");
  console.log("Name:", form.elements.name.value);
  console.log("Email:", form.elements.email.value);
  console.log("Message:", form.elements.message.value);
}
