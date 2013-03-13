////////////////////////////////////////////////
//
//                Init.js
//////////////////////////////////////////////////
//
// init all the managers

var onLoad = function()
{
	console.log("Initializing JS");
	jManager = new JourneyManager();

	var stracturedUser = jManager.loadUser();
	currentUser = new User();
	currentUser.unstructurize(stracturedUser);

	runTest();
	currentUser.print();

	//setup timer
	var d = new Date();
	timer = d.getTime();
}

var onUnload = function()
{
	//get time spent on website
	var d = new Date();
	var n = d.getTime();

	currentUser.addNewStep("Website" , ["main","web"], Math.floor((n-timer)/1000));
	jManager.saveUser(currentUser);
	console.log("unloaded");
}

var runTest = function()
{
	//add user
	currentUser.init( 0 , "Jacek" );
	
	//currentUser.addNewStep("Website" , ["writers","france"], 100);
	//jManager.saveUser(currentUser);
	//currentUser.addNewStep("Website" , ["italy","cake"], 100);
	//currentUser.addNewStep("Website" , ["world_war_2","japan"], 100);
	//jManager.saveUser(currentUser);


	////-----------------------------TO reset user 
	//resetUser();
	///--------------------------------------------

}

var resetUser = function()
{
	currentUser.reset();
	jManager.saveUser(currentUser);
}

//global variables
//user
var currentUser;
var jManager;
var timer;



