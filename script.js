// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Buy Button
document.querySelector(".buy-btn").addEventListener("click", () => {
  alert("Thank you for choosing Coffee Bliss! ☕ Your order is being processed.");
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  if (!email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  alert("Thank you! We'll get back to you soon.");
  this.reset();
});
