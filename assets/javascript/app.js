$(document).ready(function () {
var count = 0;
var time = 16;
var isSelected = false;
var ticker;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var question = ["Who is Luke Skywalkers birth mother?",
"Who survived two attack runs on the Death Star?", "Who flew the Kessle Run in 12 Parsecs?", "Where is Darth Vaders base located?", "What is the name of the band in Jabbas Palace?",
"Who directed the Empire Strikes Back?", "Who runs Cloud City?", "What are the odds of successfully navigating an asteroid field?"];
    var answer = ["Padme Amidala", "Wedge Antilles", "Han Solo", "Mustafar", "Max Rebo Band", "Irvin Kershner", "Lando Calrissian", "3720 to 1"];
    var firstChoice = ["Padme Amidala", "Biggs Darklighter", "Luke Skywalker", "Imperial City", "Sly Stothis", "George Lucas", "Boba Fett", "4 to 1"];
    var secondChoice = ["Mon Montha", "Tyco Celchu", "Lando Calrissian", "Dathomier", "Panic at the Death Dticks", "Irvin Kershner", "Lobot", "500 to 1"];
    var thirdChoice = ["Jyn Erso", "Wedge Antilles", "Han Solo", "Ahch-to", "Lousy Caboosee", "Steven Spielberg", "Lando Calrissian", "3720 to 1"];
    var fourthChoice = ["Maz Kanata", "Luke Skywalker", "Boba Fett", "Mustafar", "Max Rebo Band?", "Francis Ford Copolla", "Darth Vader", "2"];


    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion() {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);



    }
    $("#choice-holder-1").on("click", checkAnswer);
    $("#choice-holder-2").on("click", checkAnswer);
    $("#choice-holder-3").on("click", checkAnswer);
    $("#choice-holder-4").on("click", checkAnswer);


    function checkAnswer() {

        hideHolders();

        if ($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        }

        checkGameEnd();
    }

    function checkGameEnd() {
        if (count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function () {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 16;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);

        if (time <= 0) {
            hideHolders();
            stopTime();
            $("#answer-holder").show();
            $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
            displayImage();
            unanswered++;
            count++;
            checkGameEnd();
        }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if (count < question.length - 1) {
            setTimeout(startTime, 1000);
            setTimeout(displayQuestion, 1000);
        }
    }

    resetTime();


    function displayImage() {
        if (count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Padmegreenscrshot.jpg">');
        }
        else if (count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/WedgeHelmetless-ROTJHD.jpg">');
        }
        else if (count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Han-Solo.jpg">');
        }
        else if (count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Mustafar.jpg">');
        }
        else if (count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Max-Rebo.jpg">');
        }
        else if (count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/irvin.jpg">');
        }
        else if (count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Lando.jpg">');
        }
        else if (count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Falcon.jpg">');
        }
    }

    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }

    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }


    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }


    $(".start").on("click", function () {
        startGame();
    });
});
