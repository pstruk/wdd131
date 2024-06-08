// form-demo.js

  function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
    // To keep it from happening we can call e.preventDefault()
    // You should always give feedback to the user about what went wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;
    // add our validations here
    
    if (theForm.fullName.value !== "Bob") {
      isValid = false;
      errors.push("Your name is not Bob!");
    } 
    
    if(theForm.paymentMethod.value === "creditCard") {
    
      if (theForm.creditCardNumber.value !== "1234123412341234") {
        isValid = false;
        errors.push("You submitted the wrong credit card number. Try again.");
      }
    }
    
    // if we ran into any problems above valid will be false.
    if (!isValid) {
      //stop the form from being submitted; preventDefault() is a built-in method.
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
  }

  function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.querySelector("#checkoutForm");
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.querySelector("#creditCardNumberContainer");
    const paypalContainer = document.querySelector("#paypalUsernameContainer");
    // Hide all containers by adding the '.hide' class to each of them
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
    // Disable required for all fields...if we hide a required field the browser will throw an error when we try to submit!
    theForm.creditCardNumber.removeAttribute("required");  // or you could use document.querySelector to get to that field id
    theForm.paypalUsername.removeAttribute("required");
    // Show the container based on the selected payment method, and add the required attribute back.
    console.log("e.target");    //the thing that actually triggered the event/change
    console.log("e.target.value");  // the value of that input using .value
    
    if(e.target.value === "creditCard") {
    //show the credit card number
      creditCardContainer.classList.remove("hide");
      theForm.creditCardNumber.setAttribute("required");
    } 
    else if (e.target.value === "paypal") {
      paypalContainer.classList.remove("hide");
      theForm.paypalUsername.setAttribute("required");
    }
    
    // Optional Method: which removes "hide" and therefore shows the credit card or paypal
    // if (theForm.paymentMethod.value === "creditCard") {
    //       creditCardContainer.classList.remove("hide");
    //       theForm.creditCardNumber.required = true;
    // } else if (theForm.paymentMethod.value === "paypal") {
    //       paypalContainer.classList.remove("hide");
    //       theForm.paypalUsername.required = true;
    // }
  }

  // helper function to display our errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }

  // attach a change event handler to the paymentMethod input
  document.querySelector("#paymentMethod").addEventListener("change", togglePaymentDetails);
  // attach a submit event handler to the form
  document.querySelector("#checkoutForm").addEventListener("submit", validateForm);