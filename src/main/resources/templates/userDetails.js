
async function getUserDetailsAlone() {

    const response = await fetch('http://localhost:3336/newapp/api/user');
    const data = await response.json();

    var shapka = document.getElementById('userDetail')
    var userTable = document.getElementById('userTable')

    var allRoles = '';

    var row1 = `${data.roles.forEach(el => {
        allRoles += el.role + ' '
    })}`


    var tableForUser = `<tr>
<td>${data.id}</td>
<td>${data.name}</td>
<td>${data.surname}</td>
<td>${data.departament}</td>
<td>${data.salary}</td>
<td>${data.username}</td>
<td>${data.password}</td>
<td>${allRoles}</td>
</tr>`

    userTable.innerHTML+=tableForUser;


    var innerShapka = `<a> ${data.name} with roles ${allRoles}</a>`
    shapka.innerHTML += innerShapka;

}

window.addEventListener('DOMContentLoaded', getUserDetailsAlone);