class Student {
    constructor(args) {
        this.studentName = arguments[0],
        this.className = arguments[1],
        this.studentScores = arguments[2],
        this.possibleScores = arguments[3]
    };

    
    calculateScores() {
        let scores = this.calculateStudentScores() / this.calculatePossibleScores();
        switch(true) {
            case (scores < .6): return 'F'; break;
            case (scores < .7): return 'D'; break;
            case (scores < .8): return 'C'; break;
            case (scores < .9): return 'B'; break;
            default: return 'A'; break;
        };
    };

   
    calculateStudentScores() {
        let studentScores = this.studentScores.reduce(
            (currentTotal, item) => {
                return item + currentTotal
            },
            0
        )
        return studentScores;
    };

   
    calculatePossibleScores() {
        let possibleScores = this.possibleScores.reduce(
            (currentTotal, item) => {
                return item + currentTotal
            },
            0
        )
        return possibleScores;
    };

}