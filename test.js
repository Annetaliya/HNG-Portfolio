const updateTime = () => {
    const currentTimeElement = document.getElementById('current-time')
    const now = new Date();
    const utcString = now.toUTCString();
    currentTimeElement.innerText = utcString;
}

updateTime();
setInterval(updateTime, 1000)

const updateDay = () => {
    const slackEmailElememt = document.getElementById('slack-email');
    const now = new Date();
    const options = { weekday: 'long'};
    const currentDay = new Intl.DateTimeFormat('en-US', options).format(now);
    slackEmailElememt.setAttribute('data-testid', currentDay);

}

updateDay();

const slackEmail = 'annetaliya@gmail.com';
slackProfilePicture = './Images/slack profile.png';

document.getElementById('slack-email').innerText = slackEmail;
document.getElementById('slack-profile-picture').src = slackProfilePicture;

document.getElementById('currentYear').textContent = new Date().getFullYear();

const showSideBar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}

const hideSideBar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}