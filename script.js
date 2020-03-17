var createPolitician = function(politicianName, partyColor){
 
    var politician = {}; // new blank object!
    politician.name = politicianName; // set name property to the value of the name parameter
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
    
    //method for counting votes
politician.countTotalVotes = function ()
{
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++)
        {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
};
    
    return politician;
 
};
 
//pass the party color array 
var democrat = createPolitician("Elizabeth Warren", [132, 17, 11]);
var republican = createPolitician("Donald Trump", [245, 141, 136]);

//check to make sure the property is assigned correctly
console.log("Warren's party color is: " + democrat.partyColor);
console.log("Trump's party color is: " + republican.partyColor);

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

//determine the winner of the state
var setStateResults = function(state){

//state get elements
var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
 
    
 //State Winner Code   
    theStates[state].winner = null;
 
    if (democrat.electionResults[state] > republican.electionResults[state]) {
        
        theStates[state].winner = democrat; //set winner to the candidate object, not the candidate's name this time
 
    } else if (republican.electionResults[state] < democrat.electionResults[state]) {
 
        theStates[state].winner = republican;
    }
    
    //State color change
    var stateWinner = theStates[state].winner;
 
if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}
    
 //State table
stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = democrat.name;
candidate2Name.innerText = republican.name;
 
candidate1Results.innerText = democrat.electionResults[state];
candidate2Results.innerText = republican.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}   
    
};


//calling method to count votes
democrat.countTotalVotes();
republican.countTotalVotes();

//logging to console tallied votes
console.log(democrat.totalVotes);
console.log(republican.totalVotes);

var winner = "TBD";

if (democrat.totalVotes > republican.totalVotes) {
    winner = democrat.name;
}
if (republican.totalVotes > democrat.totalVotes) {
    winner = republican.name;
}
else{
    winner = "No one";
}

console.log(winner + " won the election!");


var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];
 
row.children[0].innerText = democrat.name;
row.children[1].innerText = democrat.totalVotes;
row.children[2].innerText = republican.name;
row.children[3].innerText = republican.totalVotes;
row.children[5].innerText = winner;




//determine winner of state
// party.electionResults[state];

/* var setStateResults = function() 
{
    if (democrat.electionResults[0] > republican.electionResults[0]) {
        stateWinner = democrat;
        console.log(democrat + " is the winner of " state.nameFull "!");
    }
    else if (republican.electionResults[0] > democrat.electionResults[0]) {
        stateWinner = republican;
        console.log(republican + " is the winner of " state.nameFull "!");
    }
    else {
        console.log("No one wins, call the Supreme Court!");
    }
        
} */

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