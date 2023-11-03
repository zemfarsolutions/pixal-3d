$(document).ready(function () {
    var $form_contact=$("#contact-form-container");
    var $form_overlay=$("#form-overlay");

    //$(".forms").hide();
    function showForm() {
              $form_contact.addClass('visible');
              $form_overlay.addClass('visible');
              $('body').addClass('prevent-scroll');
              $('.scrollable').removeClass('no-display');
              

    }
    function hideForm() {
              $form_contact.removeClass('visible');
              $form_overlay.removeClass('visible');
              $('body').removeClass('prevent-scroll');
              $('.scrollable').addClass('no-display');
    }

    $(".round").on('click',showForm);
    $(".contact-us").on('click',showForm);
    $form_overlay.on('click',hideForm);

//-----------------------------------------------------------------
    var $select_industry=$("#industry");
    var $select_industry_dropdown=$("#industry-selection-select");
    $select_industry.change(function() {
        switch($(this).val()){
            case "Construction/Engineering":
                $select_industry_dropdown.html("<option>Topographical Survey</option><option>Volume Tracking</option><option>Site Orthomosiacs</option><option>Other</option>");
                break;
            case "Real Estate":
                $select_industry_dropdown.html("<option>Commercial Property Shoot</option><option>Residential Property Shoot</option><option>Other</option>");
                break;
            case "Insurance":
                $select_industry_dropdown.html("<option>General Property Assessment</option><option>Claims Related Assesments</option><option>Other</option>");
                break;
            case "Energy":
                $select_industry_dropdown.html("<option>Solar Inspections</option><option>Wind Turbine Inspections</option><option>Natural Gas Inspections</option><option>Electrical Utility/ Power line Inspections</option><option>Other</option>");
                break;
            case "Telecommunications":
                $select_industry_dropdown.html("<option>Line of Sight survey</option><option>Asset Inspections</option><option>Other</option>");
                break;
        }
        $('#industry-selection-label').addClass('visible');
        $select_industry_dropdown.addClass('visible');

    });








/*
const location = document.getElementById('location');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

const validate = (e) => {
  e.preventDefault();

  if (location.value.length < 3) {
    errorElement.innerHTML = 'Your location should be at least 3 characters long.';
    return false;
  }

  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! We will contact you soon.';

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
    hideForm();
  }, 4000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);
*/
//--------------------------------------------------------



});
