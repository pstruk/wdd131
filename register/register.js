// javascript for the youth registration form 
//set participants to 1 on loading and increment up when button is clicked
let participants = 1;
//add an event listener to the add participant button
document.querySelector("#add").addEventListener("click", function () {
  ++participants;
  participantTemplateCount(participants);
})
//create html to be inserted for each additional participant
function participantTemplateCount(count) {

  const participantHtml =
    `<section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
          <label for="fname"> First Name<span>*</span></label>
          <input id="fname" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
          <label for="activity">Activity #<span>*</span></label>
          <input id="activity" type="text" name="activity" />
        </div>
        <div class="item">
          <label for="fee">Fee ($)<span>*</span></label>
          <input id="fee" type="number" name="fee" />
        </div>
        <div class="item">
          <label for="date">Desired Date <span>*</span></label>
          <input id="date" type="date" name="date" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select>
            <option selected value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
     </section>`

  const participantInsertLocation = document.querySelector("#add");
  participantInsertLocation.insertAdjacentHTML("beforebegin", participantHtml);
}

//Event Listener for form submission
document.querySelector("form").addEventListener("submit", submitForm);

//create registration object
const registrationProfile = {name: "", participantNum: 0, totalFees: 0};

//stop form from reloading page
function submitForm(event) {
  event.preventDefault();
  //gather summary information for object, incl. total fees
  registrationProfile.name = document.querySelector("#adult_name").value;
  registrationProfile.participantNum = participants;
  registrationProfile.totalFees = totalFees();
  //call summary function
  successTemplate(registrationProfile);
}

function totalFees() {
  // the selector below lets us grab any element that has an id that begins with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]");
  console.log(feeElements);
  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
  // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
  feeElements = [...feeElements];
  // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
  // Remember that the text that was entered into the input element will be found in the .value of the element.
  // once you have your total make sure to return it!
  let total = feeElements.reduce((acc, nd) => acc + parseInt(nd.value), 0);
  return total;
}

function successTemplate(info) {
  // output message: info will be an object with the adult name, number of participants, 
  // and fee total. (i.e. the registrationProfile)
  document.querySelector("form").style.display = "none";
  //message: "Thank you NAME for registering. You have registered N participants and owe $N in Fees."
  const successMessage = `Thank you ${info.name} for registering. You have registered ${info.participantNum} 
                          participants and owe $${info.totalFees} in Fees.`;
  document.querySelector("#summary").innerHTML = successMessage;
  }

  // An easy way to hide an element with only Javascript is: element.style.display 
  // OR you could create a class in your CSS like: .hide { display: none; }
  // and then in the Javascript do something like element.classlist.add('hide')
