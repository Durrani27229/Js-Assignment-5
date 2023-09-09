// var student1 = {
//     firstName : 'Muhammad Usama',
//     lastName : 'Masood',
//     age : 27,
//     qualification : 'Intermediate',
//     id : Math.random()
// }
// var student2 = {
//     firstName : 'Syed Noman',
//     lastName : 'Ali',
//     age : 25,
//     qualification : 'Intermediate',
//     id : Math.random()
// }
// var student3 = {
//     firstName : 'Muhammad Danish',
//     lastName : 'Khan',
//     age : 28,
//     qualification : 'Intermediate',
//     id : Math.random()
// }
// var student4 = {
//     firstName : 'Sarfaraz',
//     lastName : 'Arshad',
//     age : 26,
//     qualification : 'Matric',
//     id : Math.random()
// }
// var student5 = {
//     firstName : 'Shahzad',
//     lastName : 'Banaras',
//     age : 30,
//     qualification : 'Matric',
//     id : Math.random()
// }
// var student6 = {
//     firstName : 'Shehzad',
//     lastName : 'Mashar',
//     age : 29,
//     qualification : 'Matric',
//     id : Math.random()
// }
// var student7 = {
//     firstName : 'Waqas',
//     lastName : 'Wiki',
//     age : 25,
//     qualification : 'Matric',
//     id : Math.random()
// }


var stdFirstName = document.getElementById('stdFirstName');
var stdLastName = document.getElementById('stdLastName')
var stdAge = document.getElementById('stdAge')
var stdEdu = document.getElementById('stdEdu')
var stdId = document.getElementById('stdId')
var studentList = []
var tBody = document.getElementById('tBody');



function render(){
    tBody.innerHTML = "";
    for (var i = 0; i < studentList.length; i++){
        tBody.innerHTML += `<tr> 
        <td> ${i+1} </td>
        <td> ${studentList[i].firstName}</td>
        <td> ${studentList[i].lastName}</td>
        <td> ${studentList[i].age}</td>
        <td> ${studentList[i].qualification}</td>
        <td> ${studentList[i].id}</td>
        <td><button onclick="deleteData()" class="tbody-btn">Delete</button></td>
        </tr>`
    }
}

function addStudent(){
    var a = stdFirstName.value;
    var b = stdLastName.value;
    var c = stdAge.value;
    var d = stdEdu.value; 
    var e = stdId.value;      
    var obj = {
        firstName: a,
        lastName: b,
        age: c,
        qualification: d,
        id: e,
    }
    studentList.push(obj);
    stdFirstName.value = "";
    stdLastName.value = "";
    stdAge.value = "";
    stdEdu.value = "";
    stdId.value = "";
    render();
}

function deleteData(indexNumber){
    studentList.splice(indexNumber,1);
    render();
}

function deleteAll(){
    studentList = [];
    tBody.innerHTML = "";

}
