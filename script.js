// Smooth scroll to sections

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

}

// Contact form submission (dummy alert)

document.querySelector("form").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you for contacting me! I will reply soon.");

});