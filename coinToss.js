// grab elements from the dom
const form = document.querySelector('form');
const coin = document.querySelector('.coin img');
const results = document.querySelector('.results')

// declare variables
const msg = ['Good choice', 'Wrong choice'];
const coinimg = ['./images/heads.jpg', './images/tails.jpg']
const toss = ['Heads', 'Tails'];
let choice = '';
let record = [0,0]


// variable for outputing info to html
const output = (randy, i) => {
    const html = `<p>You chose ${choice}</p>
                  <p>The toss is ${toss[randy]}</p>
                  <p>${msg[i]}</p>
                  &nbsp;
                  <p>Wins = ${record[0]} Losses = ${record[1]}</p>`;
    
    results.innerHTML = html;
};

// event listener for lick
form.addEventListener('click', e => {
    if(e.target.value){ // checks to see if a button has been clicked
        let randy = Math.floor(Math.random() * 2);
        
        choice = e.target.value;

        coin.setAttribute('src', coinimg[randy]);
        
        if(choice === toss[randy]){ // compairs user choice with the toss
            record[0]++;
            output(randy, 0); // if user wins output a good message
        }else {
            record[1]++;
            output(randy, 1);
        }
    }
});