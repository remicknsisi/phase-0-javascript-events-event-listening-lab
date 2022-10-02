const input = document.getElementById('button');

function clickAlert(){
    alert('I was clicked!')
};

function addingEventListener() {
    return input.addEventListener('click', clickAlert)
}