/*/////// String, Number, Boolean, Object, Array


// String
let firstName = "John Doe";
const idcar='AB123CD';
// Number
let age = 30;
let height = 5.9;

// Boolean
let isStudent = false;

firstName = 'test';
console.log('my name is', firstName ,'and I am', age, 'years old.');
 
+
-*
* คูณ
/ หาร
% หารเอาเศษ */
////////////////////////////////////////////////////////////////
/*
let Number1 = 'cc';
let Number2 = 'aaa';

let result = Number1 + Number2;
console.log("ผลบวก =", result);
*/
//////////////////////////////////////////////////////////////////
//conditional statements//
// if else if else
/*
== เท่ากับ
+= "ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ   
*/
/*
let  Number1 = 10;
let  Number2 = 20;

let conditional = Number1 > Number2;
console.log("result of condition is:", conditional);
*/

//////////////////////////////////////////////////////////////////
//  if - else  
    /*
let  Number1 = 10;
let  Number2 = 20;

if (Number1 != Number2) {
    console.log('this if');
} else if (Number1 == Number2) {
    console.log('this else if');
} else {
    console.log('this else');
}
*/
/*
Grade 
>= 80 A
>= 70 B
>= 60 C
>= 50 D
< 50 F
*/
/*
let score = prompt('ป้อนคะแนนของคุณ:');
console.log('คะแนนของคุณ'+ score);

if (score >=80){ 
    console.log('เกรด A'); // false
}else if (score >=70){
    console.log('เกรด B'); // false
}else if (score >=60){
    console.log('เกรด C');// false
}else if (score >=50){
    console.log('เกรด D');// false
}else {
    console.log('เกรด F');// true
}
    *///////////////////////////////////////////////////////////////
/*
&& และ
|| หรือ
! ไม่ใช่
*/
/*
let  Number1 = 5
let  Number2 = 10
// true && true = true
let condition =! ( Number1 >= 3 || Number2 > 10 );
console.log("condition:", condition);

let age = 20;
let grade = "ชาย";

if (age >= 20 && grade == "ชาย") {
    console.log("คุณเป็นผู้ชายที่มีอายุ 20 ปีขึ้นไป");
}   else {
    console.log("คุณไม่ใช่ผู้ชายที่มีอายุ 20 ปีขึ้นไป");
}
    *///////////////////////////////////////////////////////////////
/*
    let Number = 20;

    if (Number % 2 == 0) {
        console.log("เป็นเลขคู่");
    }   else {                              
        console.log("เป็นเลขคี่");
    }
        *///////////////////////////////////////////////////////////////
/*
loop statements:
while 
for
*/
/*
let coounter = -5;
while (coounter < 10) {
    console.log('Hello world');
    coounter= coounter + 1;             
}
for (let i=-10; i<10; i++){
    console.log('Hello for loop',i);
}for (let i=0; i<10; i++){
    console.log('555555',i);
}
*/
/*
let agr1 = 25;
let agr2 = 30;
let agr3 = 35;
console.log(agr1,agr2,agr3);

let ages = [25,30,35];
console.log(agrs);
console.log(agrs[1]);

//เปลี่ยนค่าใน Array
ages = [40,45,50];
console.log(ages);

//เพิ่มค่าใน Array
ages.push(55);
console.log(ages);

//ความยาวของ Array
console.log(ages.length);

//การลบค่าใน Array
ages.pop();
console.log(ages);

if (ages.includes(45)) {
    console.log("เจอ 45 ในอาเรย์");
}

let Number = [18,15,70,25,60];
Number.sort()
console.log(Number);

let names = ['John','Jane','Doe'];
names.push('Smith');
console.log(names);
console.log(names.length);

for (let i=0; i<names.length; i++){
    console.log(names[i]);
}
    */
/*
let Student = [{
    age : 30,
    name : "Tham",
    grade: 'A'
},{
    age : 25,
    name : "John",
    grade: 'B'
}];

Student.pop();
for (let i=0; i<Student.length; i++){
    console.log("Student"+ (i + 1) + ":");
    console.log("Name" + Student[i].name);
    console.log("Age" + Student[i].age);
    console.log("Grade" + Student[i].grade);
}

Student.push({
    age : 28,
    name : "Jane",  
    grade: 'A'
});
*/
/*
function calculate_grade(score) {
    if (score >= 80) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade;  
}

let Student_scores = 75;
let Student_grade = calculate_grade(Student_scores);
console.log("Student grade is:", Student_grade);
*/
/*
let score = [85, 72, 90, 65, 48];
for (let i = 0; i < score.length; i++) {
   console.log(`Score at index ${i}  is ${score[i]}`);   
}
score = score.map((s) => {
    return s *2 
});
score.forEach((s) => {
    console.log('Updated score:', s);
})
*/
/*
let score = [85, 72, 90, 65, 48];

let newscore = []

for (let index = 0; index < score.length; index++) {
    console.log (`Score` , score[index])
}

let newscore = score.filter((s) => {
    return s >= 60
})     
newscore.forEach((ns) => {
    console.log(`naw score:`, ns)
})
*/
/*
let Students = [
    {
        name:`aa`,
        score:`60`,
        grade:'D'
    },
    {
        name:`bb`,
        score:`85`,
        grade:'A'

    }
];
console.log(`Student :`, Students[0])

let Student = Students.map((s) => {
    if (s.name === 'aa'){
        return true
    }
})

let doublescore_student = Students.map((s) => {
    s.score = s.score * 2
    return s
})
console.log(`Updated Student:`, Student)

console.log(doublescore_student)

let highScore_student = Students.filter((s) => {
    if (s.score >= 80){
        return true
    }
})
console.log('High score student:', highScore_student);
*/