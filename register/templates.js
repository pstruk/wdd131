//ES module for the register folder

//create html to be inserted for each additional participant
export function participantTemplateCount(count) {

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

export function successTemplate(info) {
    // output message: info will be an object with the adult name, number of participants, 
    // and fee total. (i.e. the registrationProfile)
    // An easy way to hide an element with only Javascript is: element.style.display 
    // OR you could create a class in your CSS like: .hide { display: none; }
    // and then in the Javascript do something like element.classlist.add('hide')
    document.querySelector("form").style.display = "none";
    //message: "Thank you NAME for registering. You have registered N participants and owe $N in Fees."
    const successMessage = `Thank you ${info.name} for registering. You have registered ${info.participantNum} 
                            participants and owe $${info.totalFees} in Fees.`;
    document.querySelector("#summary").innerHTML = successMessage;
    }

    