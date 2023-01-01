/*
const nameAreaClass = document.getElementById("inputClassName");
const nameAreaAssignment = document.getElementById("inputAssignmentName");
const DueDateAreaAssignment = document.getElementById("inputDueDateName");
const AssignmentCheckbox = document.getElementById("inputDone");
*/
const classesSelector = document.getElementById("classes");
const assignmentParameterScreen = document.getElementById("assignmentAddParameters");
const classParameterScreen = document.getElementById("classAddParameters");
const prevWeekScorePage = document.getElementById("prevWeeksScores");
const endOfWeekPage = document.getElementById("endOfWeek");


activeClass = 0;
var classes = [];
var weeks = [];

updatePage();

/*if()
{

}*/

class Class
{
    constructor(name, Assignments)
    {
        this.name = name;
        this.Assignments = Assignments;
    }
}
class Assignment 
{
    constructor(name = "", dueDate = "", done = false) 
    {
        this.name = name;
        this.dueDate = dueDate;
        this.done = done;
    }
}
class Week
{
    constructor(ClassesCompletionArray, totalAssignments, totalAssignmentsCompleted, weekNum)
    {
        this.ClassesCompletionArray = ClassesCompletionArray;
        this.totalAssignments = totalAssignments;
        this.totalAssignmentsCompleted = totalAssignmentsCompleted;
        this.weekNum = weekNum;
        if (this.totalAssignments != 0)
        {
            this.completionPercent = ((totalAssignmentsCompleted/totalAssignments) * 100);
        }
        else
        {
            this.completionPercent = "0%";
        }
    }
}
class ClassForWeek 
{
    constructor(className, Assignments, AssignmentsCompleted) 
    {
        this.className = className;
        this.Assignments = Assignments;
        this.AssignmentsCompleted = AssignmentsCompleted;
        if (this.Assignments != 0)
        {
            this.completionPercent = ((AssignmentsCompleted/Assignments) * 100);
        }
        else
        {
            this.completionPercent = "0%";
        }
    }
}
function updatePage()
{
    /*for (let i = 0; i < classes.length; i++)
    {
        //alert(classes[i].name);
    }*/ 
    areThereAssignments = false;

    loadPage();
    //alert(classes.length);
            if (classes.length == 0)
            {
            
                classesSelector.innerHTML = `
                <a href="../index.html">Back to Home</a>
                <h1>Class Organizer</h1>
                <button onclick="updatePrevWeeksPage()">Previous Weeks Scores</button>
                <button onclick="ChangeMenu('credits')">Credits!</button>
                <div class="clearLeft"></div>

                                <div id="addClassButtonHolder">
                    <button class="classAdd" onclick="ChangeMenu('classAddParameters')">Add Class</button> 
                </div>`
            }
else{
    classesSelector.innerHTML = `
    <a href="../index.html">Back to Home</a>
    <h1>Class Organizer</h1>
    <button onclick="updatePrevWeeksPage()">Previous Weeks Scores</button>
    <button onclick="ChangeMenu('credits')">Credits!</button>
    <div class="clearLeft"></div>`
    for (let i = 0; i < classes.length; i++)
    {
        //alert(classes[i].name);
        classesSelector.innerHTML += `<div class="class">
        <h2 class="className">${classes[i].name}<button class="editClass editButtons" onclick="OpenClassParameterMenu(${i}, true)">Edit</button><button class="editClass editButtons" onclick="deleteClass(${i})">Delete</button></h2>
            <div id="assignments${i}">`
        for (let e = 0; e < classes[i].Assignments.length; e++)
        {
            let activeAssignment = classes[i].Assignments[e];
            //alert(classes[i].Assignments[e].name);
            classesSelector.innerHTML += 
            `<div class="assignment">
                <h3 class="assignmentName assignmentInfo">${activeAssignment.name}</h3>
                <p class="dueDate assignmentInfo">${activeAssignment.dueDate}</p>`
                if (activeAssignment.done == true)
                {
                    classesSelector.innerHTML += `<input type="checkbox" onclick="checkbox(${i}, ${e}, false)" class="isAssignmentCompleted assignmentInfo" checked>`
                }
                else
                {
                    classesSelector.innerHTML += `<input type="checkbox" onclick="checkbox(${i}, ${e}, true)" class="isAssignmentCompleted assignmentInfo">`
                }
                classesSelector.innerHTML += `
                <button class="editAssignment assignmentInfo editButtons" onclick="changeOrAddAssignment(${i}, ${e}, true)">Edit</button>
                <button class="deleteAssignment assignmentInfo editButtons" onclick="deleteAssignment(${i}, ${e})">Delete</button>
            </div>`
            areThereAssignments = true;
            //alert(classesSelector.innerHTML)
        }
        classesSelector.innerHTML += `                    </div>
        <button class="assignmentAdd" onclick="changeOrAddAssignment(${i}, -1, false)">Add Assignment</button>
    </div>`
    }
    classesSelector.innerHTML +=
    `       <div id="addClassButtonHolder">
                <button class="classAdd" onclick="OpenClassParameterMenu(-1, false)">Add Class</button> 
            </div>
            <div class="clearLeft"></div>`

            if (areThereAssignments)
            {classesSelector.innerHTML += `<button class="endWeek" onclick="endWeek()">End Week</button>`}
            

            //console.log(classes[activeClass].Assignments[1].name);
            //alert(classesSelector.innerHTML);
}
}
function updatePrevWeeksPage()
{
    loadWeeks();
    ChangeMenu("prevWeeksScores");
    prevWeekScorePage.innerHTML = `<h1>Previous Weeks</h1>
    <button onclick="closeMenu('prevWeeksScores')">Back To Main Menu</button>`
    for (let i = 0; i < weeks.length; i++)
    {
        currentWeek = weeks[i];
        prevWeekScorePage.innerHTML += `<h2>Week ${currentWeek.weekNum}</h2>
        ${currentWeek.totalAssignmentsCompleted}/${currentWeek.totalAssignments} assignments completed | ${currentWeek.completionPercent}%`
        for (let ii = 0; ii < currentWeek.ClassesCompletionArray.length; ii++)
        {
            currentClass = currentWeek.ClassesCompletionArray[ii];
            console.log(currentClass)
            prevWeekScorePage.innerHTML += `<h4>${currentClass.className}</h4>
            <h6>${currentClass.AssignmentsCompleted}/${currentClass.Assignments} assignments completed | ${currentClass.completionPercent}%</h6>`
        }
    }

}
function checkbox(classNum, AssignmentNum, isChecked)
{
    classes[classNum].Assignments[AssignmentNum].done = isChecked;
    savePage();
    updatePage();
}
function cancelParameters(whichMenu)
{
    closeMenu(whichMenu);
}
function submitClassParameters(whichMenu, isEditing)
{
    //alert(isEditing);
    //AssignmentSave = classes[activeClass].Assignments;
    if (isEditing != true)
    {
        classes.push(new Class(document.getElementById("inputClassName").value, []));
    }
    else
    {
        //classes[activeClass] = new Class(document.getElementById("inputClassName").value, AssignmentSave);
        classes[activeClass].name = document.getElementById("inputClassName").value;
    }
    //console.log("bruh");
    closeMenu(whichMenu);
    savePage();
    updatePage();
}
function submitAssignmentParameters(whichMenu, AssignmentNum, isEditing)
{
    //alert(activeClass);
    //alert(AssignmentNum);
    
    loadPage();
    /*console.log(AssignmentNum)
    console.log(JSON.stringify(classes));
    console.log(isEditing);
    */
    //console.log(JSON.stringify(classes[activeClass].Assignments[AssignmentNum].name));
    if (isEditing == true)
    {
        /*classes[activeClass].Assignments[AssignmentNum].name = document.getElementById("inputAssignmentName").value;
        classes[activeClass].Assignments[AssignmentNum].dueDate = document.getElementById("inputDueDateName").value;
        classes[activeClass].Assignments[AssignmentNum].done = document.getElementById("inputDone").checked;*/
        classes[activeClass].Assignments[AssignmentNum] = new Assignment(document.getElementById("inputAssignmentName").value, document.getElementById("inputDueDateName").value, document.getElementById("inputDone").checked)
    }
    if (isEditing == false) 
    {
        classes[activeClass].Assignments.push(new Assignment(document.getElementById("inputAssignmentName").value, document.getElementById("inputDueDateName").value, document.getElementById("inputDone").checked));
    }
    console.log(JSON.stringify(classes));
    savePage();
    //alert(activeClass + "" + AssignmentNum)
    //alert(classes[activeClass].Assignments[AssignmentNum].name)

    //console.log(classes[activeClass].name)
    //console.log("bruh");
    closeMenu(whichMenu);
    updatePage();
}
function closeMenu(whichMenu)
{
    document.getElementById(whichMenu).style.display = "none";
    document.getElementById("classes").style.display = "block";
}
function deleteClass(classNum)
{
    loadPage();
    classes.splice(classNum, 1);
    savePage();
    updatePage();
}
function OpenClassParameterMenu(classNum, isEditing)
{
    //alert("bruh");
    //console.log(JSON.stringify(AssignmentSave))
    //alert(isEditing);
    document.getElementById("classAddParameters").style.display = "block";
    document.getElementById("classes").style.display = "none";
    activeClass = classNum;
    if (isEditing == false)
    {
        classParameterScreen.innerHTML = `                <h1>What class would you like to add?</h1>
        <p>Class Name</p>
        <input type="text" id="inputClassName" class="inputParameter">
        <div class="clearLeft"></div>
        <button class="parameterButton" onclick="cancelParameters('classAddParameters')">Cancel</button>
        <button class="parameterButton" onclick="submitClassParameters('classAddParameters', false)">Confirm</button>`
    }
    else
    {
        classParameterScreen.innerHTML = `<h1>Edit Class</h1>
        <p>Assignment Name</p>
        <input type="text" id="inputClassName" class="inputParameter" value="${classes[classNum].name}">
        <div class="clearLeft"></div><div class="clearLeft"></div>
        <button class="parameterButton" onclick="cancelParameters('classAddParameters')">Cancel</button>
        <button class="parameterButton" onclick="submitClassParameters('classAddParameters', true)">Confirm</button>`
    }
    //classes.Push();
}
function changeOrAddAssignment(classNum, assignmentNum, isEditing)
{
    //alert("bruh");
    document.getElementById("assignmentAddParameters").style.display = "block";
    document.getElementById("classes").style.display = "none";
    activeClass = classNum;
    if (isEditing == false)
    {
        assignmentParameterScreen.innerHTML = `                <h1>What assignment would you like to add?</h1>
        <p>Assignment Name</p>
        <input type="text" id="inputAssignmentName" class="inputParameter">
        <div class="clearLeft"></div>
        <p>Due Date</p>
        <input type="text" id="inputDueDateName" class="inputParameter">
        <div class="clearLeft"></div>
        <p>Done?</p>
        <input type="checkbox" id="inputDone" class="inputParameter">
        <div class="clearLeft"></div>
        <button class="parameterButton" onclick="cancelParameters('assignmentAddParameters')">Cancel</button>
        <button class="parameterButton" onclick="submitAssignmentParameters('assignmentAddParameters', -1, false)">Confirm</button>`
    }
    else
    {
        assignmentParameterScreen.innerHTML = `<h1>Edit Assignment</h1>
        <p>Assignment Name</p>
        <input type="text" id="inputAssignmentName" class="inputParameter" value="${classes[classNum].Assignments[assignmentNum].name}">
        <div class="clearLeft"></div>
        <p>Due Date</p>
        <input type="text" id="inputDueDateName" class="inputParameter" value="${classes[classNum].Assignments[assignmentNum].dueDate}">
        <div class="clearLeft"></div>
        <p>Done?</p>`
        if (classes[classNum].Assignments[assignmentNum].done == false)
        {
            assignmentParameterScreen.innerHTML += `<input type="checkbox" id="inputDone" class="inputParameter">`
        }
        if (classes[classNum].Assignments[assignmentNum].done == true)
        {
            assignmentParameterScreen.innerHTML += `<input type="checkbox" id="inputDone" class="inputParameter" checked>`
        }
        assignmentParameterScreen.innerHTML += `<div class="clearLeft"></div>
        <button class="parameterButton" onclick="cancelParameters('assignmentAddParameters')">Cancel</button>
        <button class="parameterButton" onclick="submitAssignmentParameters('assignmentAddParameters', ${assignmentNum}, true)">Confirm</button>`
    }
    //classes.Push();
}
function loadPage()
{
    if (localStorage.getItem('classes') != null)
    {
        classes = JSON.parse(localStorage.getItem('classes'));
    }
    else
    {
        classes = [];
    }
}
function savePage()
{
    localStorage.setItem('classes', JSON.stringify(classes));
}
function deleteAssignment(classNum, assignmentNum)
{
    loadPage();
    classes[classNum].Assignments.splice(assignmentNum, 1);
    savePage();
    updatePage();
}
function endWeek()
{
    loadWeeks();
    weekNumber = weeks.length + 1;
    let numOfAssignments = 0;
    let numOfCompletedAssignments = 0;
    var classesForWeek = []

    for(var ii = 0; ii < classes.length; ii++)
    {
        numOfAssignmentsForClass = 0;
        numOfCompletedAssignmentsForClass = 0;
        for(var i = 0; i < classes[ii].Assignments.length; i++)
        {

            let activeAssignment = classes[ii].Assignments[i];
            numOfAssignments += 1;
            numOfAssignmentsForClass += 1
            if (activeAssignment.done == true)
            {
                numOfCompletedAssignments += 1;
                numOfCompletedAssignmentsForClass += 1;
            }
            
        }
        thisClass = new ClassForWeek(classes[ii].name, numOfAssignmentsForClass, numOfCompletedAssignmentsForClass)
        //console.log(thisClass);
        classesForWeek.push(thisClass)
        //console.log(classesForWeek);
        //classes[ii].Assignments = [];
    }
    //console.log(numOfCompletedAssignments + "/" + numOfAssignments)
    
    weeks.push(new Week(classesForWeek, numOfAssignments, numOfCompletedAssignments, weekNumber));
    console.log(weeks[weekNumber - 1].completionPercent);


    for (var ii = 0; ii < classes.length; ii++)
    {
        classes[ii].Assignments = [];
    }
    /*for (var i = 0; i < classes[ii].Assignments.length; i++)
    {

    }*/
    savePage();
    ChangeMenu("endOfWeek");
    updatePage();

    //console.log(weeks[weeks.length].weekNum)

    if (weeks[weekNumber - 1].completionPercent < 50)
    {
        endOfWeekPage.innerHTML = `<h1>You'll have a better week next week. Keep your head up!</h1>
        <h2>Week #${weeks[weekNumber - 1].weekNum}</h2>
        <h3>${weeks[weekNumber - 1].completionPercent}%</h3>
        <p>You got ${weeks[weekNumber - 1].totalAssignmentsCompleted} out of ${weeks[weekNumber - 1].totalAssignments} assignments done!</p>
        <button onclick="closeMenu('endOfWeek')">Back to Main Menu</button>`
    }
    if (weeks[weekNumber - 1].completionPercent >= 50 && weeks[weekNumber - 1].completionPercent != 100)
    {
        endOfWeekPage.innerHTML = `<h1>Solid week! You're doing great!!</h1>
        <h2>Week #${weeks[weekNumber - 1].weekNum}</h2>
        <h3>${weeks[weekNumber - 1].completionPercent}%</h3>
        <p>You got ${weeks[weekNumber - 1].totalAssignmentsCompleted} out of ${weeks[weekNumber - 1].totalAssignments} assignments done!</p>
        <button onclick="closeMenu('endOfWeek')">Back to Main Menu</button>`
    }
    if (weeks[weekNumber - 1].completionPercent == 100)
    {
        endOfWeekPage.innerHTML = `<h1>You had a Perfect week, Keep it up!!!</h1>
        <h2>Week #${weeks[weekNumber - 1].weekNum}</h2>
        <h3>${weeks[weekNumber - 1].completionPercent}%</h3>
        <p>You got all ${weeks[weekNumber - 1].totalAssignments} assignments done!</p>
        <button onclick="closeMenu('endOfWeek')">Back to Main Menu</button>`
    }

saveWeeks();

    //console.log(weeks)
}
/*function resetSelectors()
{
}*/
function ChangeMenu(whichMenu)
{
    document.getElementById(whichMenu).style.display = "block";
    document.getElementById("classes").style.display = "none";
}
function saveClasses()
{
    console.log(localStorage.getItem("classes"));
}
function saveWeeks()
{
    localStorage.setItem('weeks', JSON.stringify(weeks));
}
function loadWeeks()
{
    if (localStorage.getItem('weeks') != null)
    {
        weeks = JSON.parse(localStorage.getItem('weeks'));
    }
    else
    {
        weeks = [];
    }
}
