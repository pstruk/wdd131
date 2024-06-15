// courses.js
// Activity 1:
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353',
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T',
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A',
        },
    ],  

// Activity 2:
// aCourse.enrollStudent(1); using "this" = whatever is to the left of the dot   
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
            );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
    
// Activity 3: refactored enrollment:
    // changeEnrollment: function (sectionNum, add = true) {
    //     const sectionIndex = this.sections.findIndex(
    //         (section) => section.sectionNum == sectionNum
    //     );
    //     if (sectionIndex >= 0) {
    //         if (add) {
    //             this.sections[sectionIndex].enrolled++;
    //         } else {
    //             this.sections[sectionIndex].enrolled--;
    //         }
    //         renderSections(this.sections);
    //     }
    // },

};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name; 
    courseCode.textContent = course.code;
}

function renderSections(sections) {
    const sectionHtml = aCourse.sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
   document.querySelector("#sections").innerHTML = sectionHtml.join("");  
}

//listeners for Activity 2:
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

//listeners for Activity 3:
    // document.querySelector("#enrollStudent").addEventListener("click", function () {
    //     const sectionNum = document.querySelector("#sectionNumber").value;
    //     aCourse.changeEnrollment(sectionNum, true);
    // });
    
    // document.querySelector("#dropStudent").addEventListener("click", function () {
    //     const sectionNum = document.querySelector("#sectionNumber").value;
    //     aCourse.changeEnrollment(sectionNum, false);
    // });

setCourseInfo(aCourse);
renderSections(aCourse.sections);

