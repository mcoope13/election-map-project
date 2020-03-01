var createPolitician = function(name){
 
    var politician = {}; // new blank object!
    politician.name = name; // set name property to the value of the name parameter
    politician.electionResults = null;
    politician.totalVotes = 0;
    
    return politician;
 
};
 
var democrat = createPolitician("Elizabeth Warrn");
 
var republican = createPolitician("Donald Trump");


/* var demPolitician = function()
{
politician1 {};
var politician1.name = "Elizabeth Warren";
var politician1.party= "Democrat";
var politician1.electionResults = null;
var politician1.totalVotes = 0;
politician1.announcePolitician = function()
    {
    console.log(this.name + " is a " this.party + " candidate who received " + this.totalVotes + " resulting in a " + this.electionResults + "!")
};
    politician1.announcePolitician();
    return politician1;
};
var democrat = demPolitician();
  

var repPolitician = function()
{
politician2 {};
var politician2.name = "Donald Trump"
var politician2.party = "Republican"
var politician2.electionResults = null;
var politician2.totalVotes = 0;
politician2.announcePolitician = function()
    {
    console.log(this.name + " is a " this.party + " candidate who received " + this.totalVotes + " resulting in a " + this.electionResults + "!")
};
    politician2.announcePolitician();
    return politician2;
};
var republican = repPolitician */