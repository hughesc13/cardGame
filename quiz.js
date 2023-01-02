//array containing questions and possible answers
//array within an array here!!!
var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    //this generateQuiz functions contains the helper functions showQuestions, showResults

	function showQuestions(questions, quizContainer){
        //var means ur declaring a variable!
		var output = []; //to store output
        var answers;

        //loop through questions (is an array)
        for (var i = 0; i < questions.length; i++){
            //reset list of answers for each question
            answers = [];

            for (letter in questions[i].answers){
                //add an html radio button
                //<input type ="radio"> defines a radio button
                //radio butons let a user select only one of a certain number of choices
                answers.push(//push adds an iem to the end of an arraay
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value ="' + letter + '">' //WHAT R THESE QUOTES
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push('<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>');
            quizContainer.innerHTML = output.join('');
        }
	}

    /*
    Here's how our JavaScript logic will look:
    For each question, find the selected answer
    If the answer is correct, respond accordingly
    If the answer is wrong, respond accordingly
    Show the number of correct answers out of the total
    */
	function showResults(questions, quizContainer, resultsContainer){
        //returns nodelist of  elements matching .answers ??
		var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        //for each question
        for (var i =0; i <questions.length; i++){
            //this finds selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            //if answer is correct
            
            //if answer is incorrect
        }

	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}