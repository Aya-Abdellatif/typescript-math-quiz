(function () {
    alert("Please Enter Your Email and Password!");
    var trials = 0;
    while (trials < 3) {
        var input1Email = prompt("Please Enter Your Email");
        var input1Pass = prompt("Please Enter Your Password");
        if (input1Email !== "aya@gmail.com" || input1Pass !== "123") {
            trials++;
        }
        else {
            var input2NumberOfQuestions = Number(prompt("Enter the Number of Questions:"));
            var score = 0, numberOfQ = input2NumberOfQuestions;
            while (numberOfQ--) {
                var q = generateQ();
                var input3Ans = Number(prompt(q.question));
                if (input3Ans === q.answer) {
                    score++;
                }
            }
            alert("You Scored ".concat(score, " / ").concat(input2NumberOfQuestions));
            break;
        }
    }
    if (trials === 3)
        alert("Please Refresh the page to Continue!");
    function generateQ() {
        var rand = generateRandom();
        return {
            question: "".concat(rand.n1, " ").concat(rand.op, " ").concat(rand.n2, " = "),
            answer: rand.ans
        };
    }
    function generateRandom() {
        var n1 = Math.floor((Math.random() * 10) + 1);
        var n2 = Math.floor((Math.random() * 10) + 1);
        var opN = Math.floor((Math.random() * 3) + 1);
        var op = "+";
        var ans = n1 + n2;
        switch (opN) {
            case 2:
                op = "-";
                ans = n1 - n2;
                break;
            case 3:
                op = "*";
                ans = n1 * n2;
                break;
        }
        return { n1: n1, n2: n2, op: op, ans: ans };
    }
})();
