var typed = new Typed(".typing", {
  strings: ["Frontend Developer", "Web Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    console.log(document.body.scrollTop)
    console.log(document.documentElement.scrollTop)
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// SEND EMAIL 
function sendEmail() {

  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let message = document.getElementById("message").value

  let body = "Name :" + name + "<br/>  Email :" + email + "<br/> Message :" + message;
  Email.send({
    SecureToken: "fac1da81-91be-4f34-a5ae-80578c5985b6",
    To: 'gokulnathsrit@gmail.com',
    From: "gokulnathsrit@gmail.com",
    Subject: "Message from your contact",
    Body: body
  }).then(
    message => alert("Submitted Successfully")
  );
}