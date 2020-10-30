function ageCalculate() {

    var profile = {
        fname: document.getElementById('fname').value,
        sname: document.getElementById('sname').value,
        sname: document.getElementById('age').value,
        age: document.getElementById('height').value,
        height: document.getElementById('country').value,
    }

    document.getElementById("message").innerHTML = ("here's your profile <br/><br/> name: " + profile.fname + "<br/> Surname: " + profile.sname + "<br/> Age: " + profile.age + "<br/> Height: " + profile.height + "<br/> Country: " + profile.country);
}