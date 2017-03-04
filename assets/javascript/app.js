jQuery(document).ready(function($){
console.log("Loadup");


$(".btn").click(function(){
	console.log("buttonpress");
   	$("#timer").html(game.count);
   	game.nextQuestion();
	game.start();
	$(".btn").remove();
});


$(".answer").click(function(){
	console.log("answerpress");
	if (game.questionNum==4) {
		$("#question").html("Game Over!");
		$(".answer").remove();
		stop();
		$("#timer").remove();
	} else{
		setTimeout(game.counter, 4000);
	   	game.nextQuestion();
	};
});
  		//show correct answer
  		//play animation
  		//show next question



var game = {
	//basic variables
	correct: 0,
	incorrect: 0,
	questionNum: -1,



	//timer
	count: 30,
	start: function() {nextQuestion = setInterval(game.counter, 1000);},
  	stop: function() {clearInterval(intervalId);},
  	reset: function() {
  		game.count = 30;
  		$("#timer").html(game.count)

  	},

	counter: function() {
		game.count--;
   		$("#timer").html(game.count);
		console.log(game.count);
  		if (game.count == 0) { //or if user answers question
  			game.reset();
	  	};
 	},

	//questions and answers for quiz
	nextQuestion: function() {
		if (this.questionNum<5 || this.counter < 1) {
			this.questionNum ++;
			$("#question").html(game.questions[this.questionNum].question);
			$("#a1").html(game.questions[this.questionNum].a);
			$("#a2").html(game.questions[this.questionNum].b);
			$("#a3").html(game.questions[this.questionNum].c);
			$("#a4").html(game.questions[this.questionNum].d);
		} else {
			//game over
			console.log("game over")
		};
	},

	questions:[
		q1= {
			question: "What color is Mario's hat?",
			a: "blue",
			b: "red",
			c: "green",
			d: "violet",
		},
		q2= {
			question: "wtf is a Yoshi, anyway?",
			a: "dinosaur",
			b: "pokemon",
			c: "amorphous blob",
			d: "dragon",
		},
		q3= {
			question: "What color is Link's hair in 'The Legend of Zelda: A Link to the Past'?",
			a: "brown",
			b: "pink",
			c: "blond",
			d: "green",
		},
		q4= {
			question: "Who is the main antagonist in 'Super Mario RPG: Legend of the Seven Stars'?",
			a: "Birdo",
			b: "Smithy",
			c: "Bowser",
			d: "King Dedede",
		},
		q5= {
			question: "What year was the first Pokemon game released?",
			a: "1994",
			b: "1996",
			c: "1998",
			d: "2000",
		},
	],

	answers: ["red", "dinosaur", "pink", "Smithy", "1996"]

}; //end game object






}); //end jquery wrapper