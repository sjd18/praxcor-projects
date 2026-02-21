function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
  document.getElementById("contact-form").reset();
}
