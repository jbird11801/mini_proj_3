var player_choice

var ai_choices = ["rock","paper","scissors"];

var ai_choice = function () {
    var choice;
    choice = Math.floor((Math.random*3), 0 )
    return choice;
}
function rock() {
    player_choice = "rock";
}
function paper() {
    player_choice = "paper";
}
function scissors() {
    player_choice = "scissors";
}