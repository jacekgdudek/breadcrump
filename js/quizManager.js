var quizManager = function()
{
	//define private
	var questions = new Array();
	var difficulty;
	var score;

	this.init = function()
	{
		//init varibles
		score = 0;  //todo::load from storage
		difficulty = 0; //todo::calculate difficulty based on previous performance

		//load questions content
		initQuestions();
	}

	this.initQuestions = function()
	{
		//get recent keywords
		//---------------------------

		//search and randomize questions based on keywords and difficulty
		//---------------------------

		//set UI elements
		initGraphics();
	}

	this.initGraphics = function()
	{
		var questionList = getElementById("question-list"); /// somethin' missin'
		console.log("question list :" + questionList);
	}