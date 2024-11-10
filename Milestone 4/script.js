var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var cityElement = document.getElementById('city');
    var countryElement = document.getElementById('country');
    var currentAddressElement = document.getElementById('address');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var achievementsElement = document.getElementById('achivement');
    if (profilePictureInput && nameElement && cityElement && countryElement && currentAddressElement &&
        emailElement && phoneElement && educationElement && experienceElement && skillsElement && achievementsElement) {
        var name_1 = nameElement.value;
        var city = cityElement.value;
        var country = countryElement.value;
        var currentAddress = currentAddressElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var achievements = achievementsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeHTML = "\n            <div class=\"contact-info\" contenteditable=\"true\">\n                <div><strong>".concat(name_1, "</strong></div>\n                <div>").concat(city, ", ").concat(country, "</div>\n                <div>").concat(email, "</div>\n                <div>").concat(phone, "</div>\n            </div>\n            ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\" style=\"width: 120px; height: 120px;\">") : '', "\n            <h2>Profile</h2>\n            <div class=\"info-block\" contenteditable=\"true\">\n                <p>").concat(currentAddress, "</p>\n            </div>\n            <h2 class=\"section-title\">Education</h2>\n            <p class=\"editable-section\" contenteditable=\"true\">").concat(education, "</p>\n            <h2 class=\"section-title\">Experience</h2>\n            <p class=\"editable-section\" contenteditable=\"true\">").concat(experience, "</p>\n            <h2 class=\"section-title\">Skills</h2>\n            <p class=\"editable-section\" contenteditable=\"true\">").concat(skills, "</p>\n            <h2 class=\"section-title\">Achievements</h2>\n            <p class=\"editable-section\" contenteditable=\"true\">").concat(achievements, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            makeSectionsEditable();
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
function makeSectionsEditable() {
    var editableSections = document.querySelectorAll('.editable-section, .contact-info, .info-block');
    editableSections.forEach(function (section) {
        section.addEventListener('input', function () {
            console.log("Content updated: ".concat(section.textContent));
        });
    });
}
