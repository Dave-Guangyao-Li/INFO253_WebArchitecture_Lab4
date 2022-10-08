const contactForm = document.querySelector('#contactForm');


// when submit -> submitbutton become circular loader, after 3 seconds -> alert message and circular loader return to original state
const submitLoad = () => {
    const submitButton = document.querySelector('#submitBtn');
    //update its text to a circular loader
    submitButton.innerHTML = `<div class="circular">
    <div class="inner"></div>
    <div class="outer"></div>
    
    <div class="circle">
       <div class="dot">
          <span></span>
       </div>
       <div class="bar left">
          <div class="progress"></div>
       </div>
       <div class="bar right">
          <div class="progress"></div>
       </div>
    </div>
 </div>`;
    // Once the 3 seconds are complete, create an alert with a meaningful message using your form's input.
    setTimeout(() => {
        const impressionText = document.contactForm.impression.value;

        const checkboxItems = document.getElementsByName('checkbox')
        let checkboxResult = "";
        for (var i = 0; i < checkboxItems.length; i++) {
            if (checkboxItems[i].checked) {
                checkboxResult += checkboxItems[i].value 
                    + " " + "platform, ";
            }
        }
        
        const radioItems = document.getElementsByName('newsletter')
        let radioResult = "";
        for (var i = 0; i < radioItems.length; i++) {
            if (radioItems[i].checked) {
                radioResult += radioItems[i].value;
            }
        }

        // alert with a meaningful message
        window.alert(`Your first impression on my is: ${impressionText}.And you made connection with me through ${checkboxResult}your willingness to subscribe to my newsletter is ${radioResult}.Thank you for your feedback!`);
        submitButton.innerHTML = `<button type="submit" value="submit" id="submit" >Submit</button>`
    }, 3000);
}


// Add event listener to the submit button
contactForm.addEventListener("submit", (event) => {
    submitLoad();
    event.preventDefault();
    
});



