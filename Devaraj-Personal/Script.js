//Redirects to Whatsapp//
function redirectToURL() {
    window.location.href = "https://wa.me/+917396106066";
}
document.getElementById("downloadBtn").addEventListener("click", function() {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1n2G1PVRc_igZIxl1L0FDNGhfR4AUNEZR/view?usp=sharing"; // URL of the online file
    link.download = "RESUME.pdf"; // Optional: Rename the file on download

    // Programmatically click the anchor to trigger the download
    link.click();
});

//To Change the Images and button colors in Projects Section////
function myfun(){
var x=document.getElementById('menu');
if(x.style.display ==='none'){
x.style.display ='block';
}
else{
x.style.display ='none';
}  
}
function changeimage(button) {
document.querySelector('.A').style.backgroundColor = '';
document.querySelector('.A').style.color = '';
document.querySelector('.B').style.backgroundColor = '';
document.querySelector('.B').style.color = '';
document.querySelector('.C').style.backgroundColor = '';
document.querySelector('.C').style.color = '';
document.querySelector('.D').style.backgroundColor = '';
document.querySelector('.D').style.color = '';
const images = document.querySelectorAll('.projectsss');

if (button === 'A') {
document.querySelector('.A').style.backgroundColor = '#0077FF';
document.querySelector('.A').style.color = '#ffffff';
document.querySelector('.B').style.backgroundColor = '#ffffff';
document.querySelector('.B').style.color = '#0077FF';
document.querySelector('.C').style.backgroundColor = '#ffffff';
document.querySelector('.C').style.color = '#0077FF';
document.querySelector('.D').style.backgroundColor = '#ffffff';
document.querySelector('.D').style.color = '#0077FF';

} else if (button === 'B') {
document.querySelector('.B').style.backgroundColor = '#0077FF';
document.querySelector('.B').style.color = '#ffffff';
document.querySelector('.A').style.backgroundColor = '#ffffff';
document.querySelector('.A').style.color = '#0077FF';
document.querySelector('.C').style.backgroundColor = '#ffffff';
document.querySelector('.C').style.color = '#0077FF';
document.querySelector('.D').style.backgroundColor = '#ffffff';
document.querySelector('.D').style.color = '#0077FF';

} else if (button === 'C') {
document.querySelector('.C').style.backgroundColor = '#0077FF';
document.querySelector('.C').style.color = '#ffffff';
document.querySelector('.A').style.backgroundColor = '#ffffff';
document.querySelector('.A').style.color = '#0077FF';
document.querySelector('.B').style.backgroundColor = '#ffffff';
document.querySelector('.B').style.color = '#0077FF';
document.querySelector('.D').style.backgroundColor = '#ffffff';
document.querySelector('.D').style.color = '#0077FF';
}
else if (button === 'D') {
document.querySelector('.D').style.backgroundColor = '#0077FF';
document.querySelector('.D').style.color = '#ffffff';
document.querySelector('.A').style.backgroundColor = '#ffffff';
document.querySelector('.A').style.color = '#0077FF';
document.querySelector('.B').style.backgroundColor = '#ffffff';
document.querySelector('.B').style.color = '#0077FF';
document.querySelector('.C').style.backgroundColor = '#ffffff';
document.querySelector('.C').style.color = '#0077FF';
}
const imagePaths = {
A: [
'IMG/pro-1.png',
'IMG/pro-2.png',
'IMG/pro-3.png',
'IMG/pro-4.png',
'IMG/pro-5.png',
'IMG/pro-6.png'
],
B: [
'IMG/pro-6.png',
'IMG/pro-2.png',
'IMG/pro-3.png'   
],
C: [
'IMG/pro-3.png',
'IMG/pro-4.png',
'IMG/pro-6.png'      
],
D: [
'IMG/pro-2.png',
'IMG/pro-1.png',
'IMG/pro-6.png'
]
};
images.forEach((image, index) => {
image.src = imagePaths[button][index];
});
document.querySelector(`.${button}`).classList.add('active');
}
///To Change th button Colors and Process in User2 Section///
function changeProgress(button) {
    // Reset all buttons' background and text color
    document.querySelector('.X').style.backgroundColor = '';
    document.querySelector('.X').style.color = '';
    document.querySelector('.Y').style.backgroundColor = '';
    document.querySelector('.Y').style.color = '';
    document.querySelector('.Z').style.backgroundColor = '';
    document.querySelector('.Z').style.color = '';

    // Apply selected button's style
    if (button === 'X') {
        document.querySelector('.X').style.backgroundColor = '#0077FF';
        document.querySelector('.X').style.color = '#ffffff';
    } else if (button === 'Y') {
        document.querySelector('.Y').style.backgroundColor = '#0077FF';
        document.querySelector('.Y').style.color = '#ffffff';
    } else if (button === 'Z') {
        document.querySelector('.Z').style.backgroundColor = '#0077FF';
        document.querySelector('.Z').style.color = '#ffffff';
    }

    // Update headings and progress bars based on button clicked
    if (button === 'X') {
        document.getElementById('heading1').innerText = 'User Experience Design-UI/UX';
        document.getElementById('progress1').style.width = '90%';
        document.getElementById('heading2').innerText = 'Web & User Interface Design-Development';
        document.getElementById('progress2').style.width = '80%';
        document.getElementById('heading3').innerText = 'Interaction Design-Animation';
        document.getElementById('progress3').style.width = '50%';
    } else if (button === 'Y') {
        document.getElementById('heading1').innerText = 'Awards & Recognition';
        document.getElementById('progress1').style.width = '65%';
        document.getElementById('heading2').innerText = 'Publications & Speaking';
        document.getElementById('progress2').style.width = '80%';
        document.getElementById('heading3').innerText = 'Community Involvement';
        document.getElementById('progress3').style.width = '70%';
    } else if (button === 'Z') {
        document.getElementById('heading1').innerText = 'Education & Certifications';
        document.getElementById('progress1').style.width = '95%';
        document.getElementById('heading2').innerText = 'Relevant Coursework';
        document.getElementById('progress2').style.width = '90%';
        document.getElementById('heading3').innerText = 'Professional Development';
        document.getElementById('progress3').style.width = '80%';
    }
}