let = globalCount = 0;

function demonstrateLocalScope(){
    let localCount = 0;
    localCount++;
    globalCount++;
    console.log('inside local scope')
    console.log('local count', localCount)
    console.log('global count', globalCount)
}

function modifyCounts(){
    // localCount++; is not defined in this scope//
    globalCount++;
    console.log('inside modifyCounts function:')
    console.log('Global Count', globalCount);
} 

function student(name, age, grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
}

let student1 = new student('Alice', 20 , 'A')
let student2 = new student('Bob', 22, 'B')
let student3 = new student('Charlie', 20, 'C')

let classroom = {
    teacher: 'Mr.Williams',
    students: [student1,student2,student3],
    subject: 'Mathematics'
}