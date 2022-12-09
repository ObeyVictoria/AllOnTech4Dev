//
var idx;
var arrStudents = ['Doreen', 'Mariam', 'Rahma', 'Miracle', 'Folashade'];
//arrStudents[idx]
//document.getElementById('studentList').innerHTML = "<div>" + arrStudents[0] + "</div>" 
//+ "<div>" + arrStudents[1] + "</div>"
//+ "<div>" + arrStudents[2] + "</div>"
//+ "<div>" + arrStudents[3] + "</div>"
//+ "<div>" + arrStudents[4] + "</div>"

//document.getElementById('studentList').innerHTML = arrStudents.join("<br>")
//for (let idx = 0; idx < arrStudents.length; idx++) {
    //const element = arrStudents[idx]
    //console.log(element)
    //document.getElementById('studentList').innerHTML = arrStudents.join("<br>")
    //document.write(element + '<br>')
//} 
var holder = document.getElementById('studentList');
function showList() {
    holder.innerHTML = ''
    for (let i = 0; i < arrStudents.length; i++) {
        holder.innerHTML = holder.innerHTML + '<p>' + arrStudents[i] + '</p>';
    }
}

showList()

function addToList(){
    var studentName = document.getElementById('student')
    arrStudents.push(studentName.value)
    console.log(arrStudents)
    showList()
}

function removeFromList(){
    var studentName = document.getElementById('student')
    arrStudents.pop(studentName.value)
    console.log(arrStudents)
    showList()
}

function removeFirstFront(){
    var studentName = document.getElementById('student')
    arrStudents.shift(studentName.value)
    console.log(arrStudents)
    showList()
}