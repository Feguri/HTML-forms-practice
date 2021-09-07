// @ts-check

let darkmode = false;
function changeToDarkMode() {
    darkmode = true;
    let html = document.getElementById('1');
    let labels = document.getElementsByTagName('label');
    let inputs = document.getElementsByTagName('input');
    let section = document.getElementById('section');
    let hrs = document.getElementsByTagName('hr');
    let textarea = document.getElementById('text');
    let signup = document.getElementById('signup');
    let themeButton = document.getElementById("theme");

    html.style.backgroundColor = '#030515';
    html.style.color = 'white';
    section.style.backgroundColor = '#1c1c29';
    textarea.style.backgroundImage = 'linear-gradient(132deg, #493e59, rgb(72 53 53))';
    textarea.style.color = 'white';
    signup.style.borderColor = 'rgb(184 184 184)';
    themeButton.style.borderColor = 'rgb(184 184 184)';
    themeButton.style.backgroundImage = 'linear-gradient(to right, #493e59, rgb(72 53 53))';
    themeButton.style.color = 'white';
    themeButton.innerHTML = 'Light Mode';
    
    
    for (let label of labels) {
        label.style.color = 'white';
    }
    for (let input of inputs) {
        input.style.color = 'white';
        input.style.backgroundImage = 'linear-gradient(to right, #493e59, rgb(72 53 53))';
    }
    for (let hr of hrs) {
        hr.style.display = 'none';
    }
    
    document.getElementById("theme").removeEventListener('click', changeToDarkMode);
    document.getElementById("theme").addEventListener('click', changeToLightMode);
}

function changeToLightMode() {
    darkmode = false;
    let html = document.getElementById('1');
    let labels = document.getElementsByTagName('label');
    let inputs = document.getElementsByTagName('input');
    let section = document.getElementById('section');
    let hrs = document.getElementsByTagName('hr');
    let textarea = document.getElementById('text');
    let signup = document.getElementById('signup');
    let themeButton = document.getElementById("theme");

    html.style.backgroundColor = 'azure';
    html.style.color = 'black';
    section.style.backgroundColor = '#e5f5ff';
    textarea.style.backgroundImage = 'linear-gradient(to right, #aadefd, rgb(164 185 227))';
    textarea.style.color = 'black';
    signup.style.borderColor = 'rgb(145 196 255)';
    themeButton.style.borderColor = 'rgb(145 196 255)';
    themeButton.style.backgroundImage = 'none';
    themeButton.style.color = 'black';
    themeButton.innerHTML = 'Dark Mode';
    
    
    for (let label of labels) {
        label.style.color = 'black';
    }
    for (let input of inputs) {
        input.style.color = 'black';
        input.style.backgroundImage = 'linear-gradient(to right, #aadefd, rgb(164 185 227))';
    }
    for (let hr of hrs) {
        hr.style.display = 'block';
    }

    document.getElementById("theme").removeEventListener('click', changeToLightMode);
    document.getElementById("theme").addEventListener('click', changeToDarkMode);
}

document.getElementById("theme").addEventListener('click', changeToDarkMode);
