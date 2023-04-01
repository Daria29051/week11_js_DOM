const inputArgument = document.getElementById('input1');

const inputResult = document.getElementById('input2');

const button = document.getElementById('button');


const countDoubled = () => inputResult.value = inputArgument.value ** 2;
    

button.addEventListener('click', countDoubled);




