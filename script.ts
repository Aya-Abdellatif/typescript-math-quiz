(
    function () {
        alert("Please Enter Your Email and Password!");

        let trials: number = 0;

        while (trials < 3) {
            let input1Email = prompt("Please Enter Your Email");
            let input1Pass = prompt("Please Enter Your Password");

            if (input1Email !== "aya@gmail.com" || input1Pass !== "123") {
                trials++;
            }
            else {
                let input2NumberOfQuestions: number = Number(prompt("Enter the Number of Questions:"));
                let score: number = 0, numberOfQ = input2NumberOfQuestions;
                while (numberOfQ--) {
                    let q = generateQ();
                    let input3Ans: number = Number(prompt(q.question));
                    if (input3Ans === q.answer) {
                        score++;
                    }
                }
                alert(`You Scored ${score} / ${input2NumberOfQuestions}`);
                break;
            }
        }
        if (trials === 3)
            alert("Please Refresh the page to Continue!");


        function generateQ(): { question: string; answer: number } {
            let rand = generateRandom()

            return {
                question: `${rand.n1} ${rand.op} ${rand.n2} = `,
                answer: rand.ans
            }
        }

        function generateRandom() {
            let n1: number = Math.floor((Math.random() * 10) + 1);
            let n2: number = Math.floor((Math.random() * 10) + 1);

            let opN = Math.floor((Math.random() * 3) + 1);
            let op: string = "+";
            let ans: number = n1 + n2;

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

            return { n1, n2, op, ans };

        }
    }
)();
