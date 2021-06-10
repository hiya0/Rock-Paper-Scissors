let userScore=0;
let compScore=0;
const userScore_span=document.getElementById('user-score');
const compScore_span=document.getElementById('comp-score');
const scoreBoard_div= document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallUser="user".fontsize(3).sub();
const smallComp="comp".fontsize(3).sub();


function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convert(letter){
	if(letter=='r') return "Rock";
	if(letter=='p') return "Paper";
	if(letter=='s') return "Scissors";
}

function win(userChoice,computerChoice){
	const userChoice_div=document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_p.innerHTML=`${convert(userChoice)}${smallUser} beats ${convert(computerChoice)}${smallComp}. You win! 🔥 🔥`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(()=>userChoice_div.classList.remove('green-glow'),300);
}

function lose(userChoice,computerChoice){
	const userChoice_div=document.getElementById(userChoice);
	compScore++;
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_p.innerHTML=`${convert(computerChoice)}${smallComp} beats ${convert(userChoice)}${smallUser}. You lose! 💩 💩 💩 💩`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(()=>userChoice_div.classList.remove('red-glow'),300);
}

function draw(userChoice,computerChoice){
	const userChoice_div=document.getElementById(userChoice);
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_p.innerHTML=`${convert(computerChoice)}${smallComp} equals ${convert(userChoice)}${smallUser}. It's a draw! 🤝`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(()=>userChoice_div.classList.remove('gray-glow'),300);
}


function game(userChoice){
	const computerChoice=getComputerChoice();
		switch(userChoice + computerChoice){
		case "pr" :
		case "sp" :
		case "rs" :
			win(userChoice,computerChoice);
			break;
		case "rp" :
		case "ps" :
		case "sr" :
			lose(userChoice,computerChoice);
			break;
		case "rr" :
		case "pp" :
		case "ss" :
			draw(userChoice,computerChoice);
			break;
	}
}



function main(){
	rock_div.addEventListener('click', ()=> game("r"));
	paper_div.addEventListener('click', ()=> game("p"));
	scissors_div.addEventListener('click', ()=> game("s"));
}
main();










