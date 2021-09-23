player_1 = document.getElementById("player1_name").Value;
player_2 = document.getElementById("player2_name").value;

player1_score = 0;
player2_score = 0;



document.getElementById("player1_name").innerHTML = player_1;
document.getElementById("player2_name").innerHTML = player2;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_qution").innerHTML = "question Trun -" + player_1;
document.getElementById("player_answer").innerHTML = "Answer Trun - " + player_2;

