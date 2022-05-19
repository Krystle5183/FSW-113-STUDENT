let student;


document.getElementById('print').addEventListener('click', function(){
    instantiate();
    print();
});


document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('studentName').value = ' ';
    document.getElementById('className').value = ' ';
    document.getElementById('studentScores').value = ' ';
    document.getElementById('possibleScores').value = ' ';
    document.getElementById('certStudentName').innerHTML = '';
    document.getElementById('certClassName').innerHTML = '';
    document.getElementById('certGrade').innerHTML = '';
});


function instantiate(){
    student = new Student(
        document.getElementById('studentName').value,
        document.getElementById('className').value,
        convertArray(document.getElementById('studentScores')),
        convertArray(document.getElementById('possibleScores'))
    )
};

function print(){
    document.getElementById('certStudentName').innerHTML = student.studentName;
    document.getElementById('certClassName').innerHTML = student.className;
    document.getElementById('certGrade').innerHTML = student.calculateScores();
};

function convertArray(std) {
    ary = std.value.split(',');
    ary = ary.map(function(i){
        return parseInt(i)
    })
    return ary;
};