function addUser(){
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItems("player1_name",player1_name);
    localStorage.setItems("player2_name",player2_name);
    window.location = "game_project.html";}