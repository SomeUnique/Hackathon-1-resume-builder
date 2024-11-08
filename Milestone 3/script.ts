document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const cityElement = document.getElementById('city') as HTMLInputElement;
    const countryElement = document.getElementById('country') as HTMLInputElement;
    const currentAddressElement = document.getElementById('address') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const achievementsElement = document.getElementById('achivement') as HTMLInputElement;

    if (profilePictureInput && nameElement && cityElement && countryElement && currentAddressElement &&
        emailElement && phoneElement && educationElement && experienceElement && skillsElement && achievementsElement) {
        
        const name = nameElement.value;
        const city = cityElement.value;
        const country = countryElement.value;
        const currentAddress = currentAddressElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const achievements = achievementsElement.value;

        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        const resumeHTML = `
            <div class="contact-info">
                <div><strong>${name}</strong></div>
                <div>${city}, ${country}</div>
                <div>${email}</div>
                <div>${phone}</div>
            </div>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" style="width: 120px; height: 120px;">` : ''}
            <h2>Profile</h2>
            <div class="info-block">
                <p>${currentAddress}</p>
            </div>
            <h2 class="section-title">Education</h2>
            <p>${education}</p>
            <h2 class="section-title">Experience</h2>
            <p>${experience}</p>
            <h2 class="section-title">Skills</h2>
            <p>${skills}</p>
            <h2 class="section-title">Achievements</h2>
            <p>${achievements}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});
