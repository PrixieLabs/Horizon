

// for popup content while clicking button on contact-us section//

const form = document.getElementById('contact-us-form-sec4');
const popup = document.getElementById('popup-contact-result-sec4');
const close = document.getElementById('close-contact-sec4');
const details = document.getElementById('details-contact-sec4');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // const model = document.getElementById('model').value;
  // const color = document.getElementById('color').value;
  const name = document.getElementById('sec4-form-input-1').value;

 details.textContent = `Thankyou  ${name} For Contacting Us!! `;


 form.reset();


  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});





// schedule a meet popup sec4 //

document.getElementById('meetingForm-sm-popup-sec4').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  // You can add code here to handle form submission, like sending the data to a server or displaying a confirmation message.
  alert('Meeting scheduled successfully!');
  this.reset(); // Reset the form after submission
});







