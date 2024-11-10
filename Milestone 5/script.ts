import html2pdf from "html2pdf.js";

// Get references to the form and display area
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayDiv = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
const pdfDownloadButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const achievement = (document.getElementById('achievement') as HTMLTextAreaElement).value;

    // Check for profile picture
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const profilePicture = profilePictureInput.files?.[0];

    // Create an object for the form data
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills,
        achievement
    };

    // Save form data in localStorage with the username as the key
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Generate the resume content dynamically
    let resumeHTML = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
        <h3>Achievements</h3>
        <p contenteditable="true">${achievement}</p>
    `;

    if (profilePicture) {
        const imageUrl = URL.createObjectURL(profilePicture);
        resumeHTML = `<img src="${imageUrl}" alt="Profile Picture" width="150"><br>` + resumeHTML;
    }

    // Display the generated resume
    resumeDisplayDiv.innerHTML = resumeHTML;

    // Generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(username)}`;
    
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLink.href = shareableURL; // Set href on anchor element
    shareableLink.textContent = "Click here to view your shareable resume";
});

// Handle PDF download
pdfDownloadButton.addEventListener('click', () => {
    html2pdf().from(resumeDisplayDiv).save('Resume.pdf');
});

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
            (document.getElementById('achievement') as HTMLTextAreaElement).value = resumeData.achievement;
        }
    }
});
