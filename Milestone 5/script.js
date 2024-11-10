"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf_js_1 = require("html2pdf.js");
// Get references to the form and display area
var resumeForm = document.getElementById('resume-form');
var resumeDisplayDiv = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLink = document.getElementById('shareable-link');
var pdfDownloadButton = document.getElementById('download-pdf');
// Handle form submission
resumeForm.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var achievement = document.getElementById('achievement').value;
    // Check for profile picture
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePicture = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    // Create an object for the form data
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
        achievement: achievement
    };
    // Save form data in localStorage with the username as the key
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        <h3>Achievements</h3>\n        <p contenteditable=\"true\">").concat(achievement, "</p>\n    ");
    if (profilePicture) {
        var imageUrl = URL.createObjectURL(profilePicture);
        resumeHTML = "<img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" width=\"150\"><br>") + resumeHTML;
    }
    // Display the generated resume
    resumeDisplayDiv.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLink.href = shareableURL; // Set href on anchor element
    shareableLink.textContent = "Click here to view your shareable resume";
});
// Handle PDF download
pdfDownloadButton.addEventListener('click', function () {
    (0, html2pdf_js_1.default)().from(resumeDisplayDiv).save('Resume.pdf');
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
            document.getElementById('achievement').value = resumeData.achievement;
        }
    }
});
