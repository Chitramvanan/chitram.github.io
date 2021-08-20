let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

var item;
if (document.querySelector('div [class="form-check"]')) {
  document.querySelectorAll('div [class="form-check"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
      item = event.target.value;
    });
  });
}
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  console.log(form.elements[2].type);
  console.log("=================Form Submission==============");
  console.log("Name:", form.elements.name.value);
  console.log("Email:", form.elements.email.value);
  console.log("Message:", form.elements.message.value);
}
