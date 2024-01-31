
document.getElementById('generateButton').addEventListener('click', function () {
    let initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surNameOutput').innerText = initPerson.surName;
    document.getElementById('fathersNameOutput').innerText = initPerson.fathersName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthDMY;
    document.getElementById('professionOutput').innerText = initPerson.profession;
});

document.getElementById('clearButton').addEventListener('click', function () {
    let initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('surNameOutput').innerText = "";
    document.getElementById('fathersNameOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "Дата рождения";
    document.getElementById('professionOutput').innerText = "";
})