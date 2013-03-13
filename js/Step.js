function Step()
{
	//elements
	var id;
	var type;
	var tags;
	var time;

	this.init = function(_type, _tags, _time)
	{
		type = _type;//new Array();
		tags = new Array();
		tags = _tags;
		time = _time;
	}

	this.initEx = function(structure)
	{
		type = structure.type;//new Array();
		tags = structure.tags;
		time = structure.time;
	}

	this.structurize = function()
	{
		var step = new Object();
		
		step.id = id;
		step.type = type;
		step.tags = tags;
		step.time = time;

		return step;
	}

	this.print = function()
	{
		console.log("-----step-----");
		console.log("type : " + type);
		for(var i = 0 ; i < tags.length ; i ++)
		{
			console.log("tags : " + tags[i]);
		}
		console.log("time : " + time);
		
		console.log("--------------")
	}
}