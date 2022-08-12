comingsoon = () => {
    alert('Coming Soon...');
}
chbo = () => {
    // document.getElementById('albox').style.innerHTML="Hi "+ $(name)+", Welcome to Skill Resource! To get any type of help click on the question.";
    document.getElementById('chatbox').style.display = 'block';
}
cl = () => {
    document.getElementById('chatbox').style.display = 'none';
    document.getElementById('chatans').style.innerHTML = "";
}
q1 = () => {
    document.getElementById('chatans').innerHTML = 'We had made most of the courses free. Which will help you to boost your carrer.';
    document.getElementById('chatans').style.display = 'block';
    document.getElementById('chatans').style.display = 'flex';
}
q2 = () => {
    document.getElementById('chatans').innerHTML = '<a href="mailto:techytrigger@gmail.com">Mail Here</a>';
    document.getElementById('chatans').style.display = 'block';
}
q3 = () => {
    document.getElementById('chatans').innerHTML = '<a href="mailto:techytrigger@gmail.com">Mail Us</a> or <a href="tel:5012456985">Contact Here</a>';
    document.getElementById('chatans').style.display = 'block';
}
q4 = () => {
    document.getElementById('chatans').innerHTML = 'Yes you will get the certificate of Internship which you can also display in resume.';
    document.getElementById('chatans').style.display = 'block';
}
cmore = () => {
    document.getElementById('chatQ').style.height = '80%';
    document.getElementById('sdown').style.display = 'none';
}
sidNavOp = () => {
    document.getElementById('clicn').style.display = 'block';
    document.getElementById('slideNavBack').style.width = '100vw';
    document.getElementById('slideNav').style.width = '60vw';
    document.getElementById('hamIcn').style.display = 'none';
}
sidNavCl = () => {
    document.getElementById('clicn').style.display = 'none';
    document.getElementById('slideNavBack').style.width = '0vw';
    document.getElementById('slideNav').style.width = '0vw';
    document.getElementById('hamIcn').style.display = 'block';
}
sideNavClick = () => {
    document.getElementById('clicn').style.display = 'none';
    document.getElementById('slideNavBack').style.width = '0vw';
    document.getElementById('slideNav').style.width = '0vw';
    document.getElementById('hamIcn').style.display = 'block';
}
signup = () => {
    document.getElementById('signin').style.display = 'none';
    document.getElementById('signup').style.display = 'flex';
}
signin = () => {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('signin').style.display = 'flex';
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}