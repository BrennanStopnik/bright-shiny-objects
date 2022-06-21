// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘


// CREATE USER
function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
}
console.log(createUser("Wolfie", "Stopnik"));


// SET AGE
function setAge(user, age){
    user.age = age;
    return user
}
console.log(setAge(createUser("Wolfie", "Stopnik"), 3));

let mrUser = {
    firstName: "Tyler",
    lastName: "Durden"
}
console.log(setAge(mrUser, 41))


// INCREMENT AGE
function incrementAge(user){
    user.age = user.age + 1;
    return user;
}
console.log(incrementAge(mrUser));


// FIX CAR
function fixCar(car){
    car.needsMaintenance = false
    return car;
}

const car = {
    make: "Subaru",
    model: "Ascent",
    year: 2022,
    needsMaintenance: true
}
console.log(fixCar(car));


// ADD GRADES
    // concat()
function addGrades(student, updates){
    student.grades = student.grades.concat(updates);
    return student;
}

    // push()
function adddddGrades(student, updates){
    for (let i = 0; i < updates.length; i++){
        student.grades.push(updates[i]);
    }
    return student
}

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};
const student2 = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};

const newGrades = [88, 70, 90];

console.log(addGrades(student, newGrades));
console.log(adddddGrades(student2, newGrades));


// GET DATA TYPE
function getDataType(obj, key){
    return typeof obj[key]
}
console.log(getDataType(car, "make"));



// ADD TODO
function addTodo(todo, newItem){
    todo.push(newItem);
    return todo
}

const todos = [
    { 
        title: 'Get gas', 
        isComplete: false },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
];

const newTodo = {
    title: 'Call mom', 
    isComplete: false
};
console.log(addTodo(todos, newTodo))


// ADD SONG
function addSong(playlist, song){
    playlist.songs.push(song);
    playlist.duration = playlist.duration + song.duration;
    return playlist;
}

const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};

console.log(addSong(playlist, newSong));


// UPDATE REPORT CARD
function updateReportCard(reportCard, grade){
    let total = 0;
    reportCard.grades.push(grade);
    if (reportCard.lowestGrade > grade){
        reportCard.lowestGrade = grade;
    }
    if (reportCard.highestGrade < grade){
        reportCard.highestGrade= grade;
    }
    for(let i = 0; i < reportCard.grades.length; i++){
        total += reportCard.grades[i];
    }
    reportCard.averageGrade = (total/reportCard.grades.length);
    return reportCard;
}
const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
};
console.log(updateReportCard(reportCard, 62));
console.log(updateReportCard(reportCard, 100))




// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
