
  // Initialize EmailJS with your Public Key
  (function(){
    emailjs.init("DZOk_9D6HUhGAtw4i"); // Replace with your own key
  })();

  // Handle form submit
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_z845ge1", "template_pxuwfim", this)
      .then(function(response) {
         alert("Email sent successfully!");
      }, function(error) {
         alert("Failed to send email. Please try again.");
         console.error(error);
      });
  });

