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

  if (
    form.elements.name.value.length == 0 &&
    form.elements.email.value.length == 0 &&
    form.elements.message.value.length == 0
  ) {
    console.log("You must enter some data to submit this form");
  } else {
    if (form.elements.name.value.length == 0) {
      console.log("Name: No submission");
    } else {
      console.log("Name:", form.elements.name.value);
    }
    if (form.elements.email.value.length == 0) {
      console.log("Email: No submission");
    } else {
      console.log("Email:", form.elements.email.value);
    }

    if (form.elements.message.value.length == 0) {
      console.log("Message: No submission");
    } else {
      console.log("Message:", form.elements.message.value);
    }
  }
}
