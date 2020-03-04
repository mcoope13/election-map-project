var createPolitician = function(name){
 
    var politician = {}; // new blank object!
    politician.name = name; // set name property to the value of the name parameter
    politician.electionResults = null;
    politician.totalVotes = 0;
    
    return politician;
 
};
 
var democrat = createPolitician("Elizabeth Warren");
 
var republican = createPolitician("Donald Trump");

//Array of results
democrat.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

republican.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

democrat.electionResults[9] = 1;
republican.electionResults[9] = 28;
 
democrat.electionResults[4] = 17;
republican.electionResults[4] = 38;
 
democrat.electionResults[43] = 11;
republican.electionResults[43] = 27;
 
console.log(democrat.electionResults);
console.log(republican.electionResults);

//method for counting votes
politician.countTotalVotes = function ()
{
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++)
        {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
};

//calling method to count votes
democrat.countTotalVotes();
republican.countTotalVotes;

//logging to console tallied votes
console.log(democrat.totalVotes);
console.log(republican.totalVotes);

var winner = "TBD";

if (democrat.totalVotes > republican.totalVotes) {
    winner = democrat.name;
}
else if (republican.totalVotes < democrat.totalVotes) {
    winner = republican.name;
}
else{
    winner = "No one"
}

console.log(winner = " won the election!");



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