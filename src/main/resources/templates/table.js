async function getAllUsers() {
    const response = await fetch('http://localhost:3336/newapp/api/users');
    const data = await response.json();


    usersToHtml(data);
    getModalWindowsForUsers(data);
}

function getModalWindowsForUsers(data) {

    var modalWindows = document.getElementById('modalWindows')

    for (var i = 0; i < data.length; i++) {

        var allRoles = '';

        var row1 = `${data[i].roles.forEach(el => {
            allRoles += el.role + ' '
        })}`

        var row = ` <div class="modal fade" id="exampleModalCenter${data[i].id}""
                                                     tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
                                                     aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLongTitle">Edit
                                                                    user</h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                        aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                          
                                                                <div class="modal-body">
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="nameEdit${data[i].id}"><strong> Enter
                                                                                name: </strong> </label>
                                                                        </p>
                                                                        <input type="text" name="name"
                                                                               class="form-control"
                                                                               value ="${data[i].name}" id="nameEdit${data[i].id}"
                                                                               placeholder="Name">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="surnameEdit${data[i].id}"
                                                                                   class="text-center"><strong>Enter
                                                                                surname: </strong></label>
                                                                        </p>
                                                                        <input type="text" name="surname"
                                                                               class="form-control"
                                                                               value = "${data[i].surname}"
                                                                               id="surnameEdit${data[i].id}" placeholder="Surname">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="departamentEdit${data[i].id}"><strong>Enter
                                                                                departament:</strong>
                                                                            </label>
                                                                        </p>
                                                                        <input type="text" name="departament"
                                                                               class="form-control"
                                                                              value = "${data[i].departament}"
                                                                               id="departamentEdit${data[i].id}"
                                                                               placeholder="Departament">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="salaryEdit${data[i].id}"><strong>Enter
                                                                                salary:</strong> </label>
                                                                        </p>
                                                                        <input type="number" name="salary"
                                                                               class="form-control"
                                                                               value = "${data[i].salary}"
                                                                               id="salaryEdit${data[i].id}" placeholder="Salary">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="usernameEdit${data[i].id}"><strong>Enter
                                                                                username:</strong> </label>
                                                                        </p>
                                                                        <input type="text" name="username"
                                                                               class="form-control"
                                                                               value = "${data[i].username}"
                                                                               id="usernameEdit${data[i].id}" placeholder="Username">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="passwordEdit${data[i].id}"><strong>Enter
                                                                                password:</strong> </label>
                                                                        </p>
                                                                        <input type="text" name="password"
                                                                               class="form-control"
                                                                               value = "${data[i].password}"
                                                                               id="passwordEdit${data[i].id}" placeholder="Password">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="RolesEdit${data[i].id}"><strong>Choose
                                                                                role</strong></label>
                                                                        </p>
                                                                        <select multiple class="custom-select" size="2"
                                                                                id="RolesEdit${data[i].id}"
                                                                                name="roles">
                                                                            <option value="2">ROLE_ADMIN</option>
                                                                            <option value="1">ROLE_USER</option>
                                                                        </select>
                                                                    </div>

                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" id = "closeEditButton${data[i].id}" class="btn btn-secondary close-popup"
                                                                            data-dismiss="modal">Close
                                                                    </button>
                                                                    <button onclick="editUser(${data[i].id})" type="submit" class="btn btn-primary">Save
                                                                        changes
                                                                    </button>
                                                                </div>                                   
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                 <div class="modal fade" id = "UserDelete${data[i].id}"
                                                     tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
                                                     aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="UserDelete">Delete user</h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                        aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <fieldset disabled>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="nameDelete"><strong>
                                                                                Name: </strong> </label>
                                                                        </p>
                                                                        <input type="text" name="name"
                                                                               class="form-control"
                                                                               value ="${data[i].name}" id="nameDelete"
                                                                               placeholder="Name">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="surnameDelete"
                                                                                   class="text-center"><strong>Surname: </strong></label>
                                                                        </p>
                                                                        <input type="text" name="surname"
                                                                               class="form-control"
                                                                               value ="${data[i].surname}"
                                                                               id="surnameDelete" placeholder="Surname">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="departamentDelete"><strong>Departament:</strong>
                                                                            </label>
                                                                        </p>
                                                                        <input type="text" name="departament"
                                                                               class="form-control"
                                                                               value ="${data[i].departament}"
                                                                               id="departamentDelete"
                                                                               placeholder="Departament">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="salaryDelete"><strong>Salary:</strong>
                                                                            </label>
                                                                        </p>
                                                                        <input type="number" name="salary"
                                                                               class="form-control"
                                                                               value ="${data[i].salary}"
                                                                               id="salaryDelete" placeholder="Salary">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="usernameDelete"><strong>Username:</strong>
                                                                            </label>
                                                                        </p>
                                                                        <input type="text" name="username"
                                                                               class="form-control"
                                                                               value ="${data[i].username}"
                                                                               id="usernameDelete"
                                                                               placeholder="Username">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="passwordDelete"><strong>Password:</strong>
                                                                            </label>
                                                                        </p>
                                                                        <input type="text" name="password"
                                                                               class="form-control"
                                                                               value ="${data[i].password}"
                                                                               id="passwordDelete"
                                                                               placeholder="Password">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <p class="text-center">
                                                                            <label for="RolesDelete"><strong>Role</strong></label>
                                                                        </p>
                                                                        <select multiple class="custom-select" size="2"
                                                                                id="RolesDelete"
                                                                                name="roles">
                                                                            <option value="2">ROLE_ADMIN</option>
                                                                            <option value="1">ROLE_USER</option>
                                                                        </select>
                                                                    </div>
                                                                </fieldset>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" id = "closeButton${data[i].id}" class="btn btn-secondary"
                                                                        data-dismiss="modal">Close
                                                                </button>
                                                               
                                                                    <button onclick="deleteUser(${data[i].id})" type="submit" id = "deleteUser" class="btn btn-primary delete-button">Delete
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
        
        `

        modalWindows.innerHTML += row;
    }
}

function usersToHtml(data) {

    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {

        var allRoles = '';

        var row1 = `${data[i].roles.forEach(el => {
            allRoles += el.role + ' '
        })}`

        var row = `<tr id = "user${data[i].id}"> 
<td>${data[i].id}</td>
<td>${data[i].name}</td>
<td>${data[i].surname}</td>
<td>${data[i].departament}</td>
<td>${data[i].salary}</td>
<td>${data[i].username}</td>
<td>${data[i].password}</td>
<td>${allRoles}</td>
<td>
 <button type="button" class="btn btn-info" data-toggle="modal"
data-target = "#exampleModalCenter${data[i].id}">
Edit
</button>
</td>                                              
<td>
 <button type="button" class="btn btn-danger" data-toggle="modal"
data-target = "#UserDelete${data[i].id}">
Delete
</button></td>
</tr>
`
        table.innerHTML += row;
    }
}

async function getUserDetails() {

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

async function deleteUser(id) {

    let response = await fetch(`http://localhost:3336/newapp/api/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (data) {
        document.getElementById(`user${id}`).remove();
        document.getElementById(`closeButton${id}`).click();
        document.getElementById(`UserDelete${id}`).remove();
        document.getElementById(`exampleModalCenter${id}`).remove();

    }

}

async function editUser(id) {
    const inputName = document.getElementById(`nameEdit${id}`)
    const inputSurname = document.getElementById(`surnameEdit${id}`)
    const inputDepartament = document.getElementById(`departamentEdit${id}`)
    const inputSalary = document.getElementById(`salaryEdit${id}`)
    const inputUsername = document.getElementById(`usernameEdit${id}`)
    const inputPassword = document.getElementById(`passwordEdit${id}`)
    const inputRole = document.getElementById(`RolesEdit${id}`)


    const name = inputName.value;
    const surname = inputSurname.value;
    const departament = inputDepartament.value;
    const salary = inputSalary.value;
    const username = inputUsername.value;
    const password = inputPassword.value;
    const role = inputRole.value;


    let response = await fetch(`http://localhost:3336/newapp/api/${id}?roleId=${role}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            id: id,
            name: name,
            surname: surname,
            departament: departament,
            salary: salary,
            username: username,
            password: password,
        })
    });

    const data = await response.json();

    if (data) {

        document.getElementById(`closeEditButton${id}`).click();


        var modalWindows = document.getElementById('modalWindows')
        modalWindows.textContent = '';
        var userTable = document.getElementById('myTable');
        userTable.textContent = '';


        await getAllUsers();

    }
}

async function newUser() {
    const inputName = document.getElementById(`nameNew`)
    const inputSurname = document.getElementById(`surnameNew`)
    const inputDepartament = document.getElementById(`departamentNew`)
    const inputSalary = document.getElementById(`salaryNew`)
    const inputUsername = document.getElementById(`usernameNew`)
    const inputPassword = document.getElementById(`passwordNew`)
    const inputRole = document.getElementById(`RolesNew`)

    const name = inputName.value;
    const surname = inputSurname.value;
    const departament = inputDepartament.value;
    const salary = inputSalary.value;
    const username = inputUsername.value;
    const password = inputPassword.value;
    const role = inputRole.value;

    let response = await fetch(`http://localhost:3336/newapp/api/users?roleId=${role}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            departament: departament,
            salary: salary,
            username: username,
            password: password,
        })
    });

    const data = await response.json();

    if (data) {


        var modalWindows = document.getElementById('modalWindows')
        modalWindows.textContent = '';
        var userTable = document.getElementById('myTable');
        userTable.textContent = '';


        await getAllUsers();

    }

}

window.addEventListener('DOMContentLoaded', getAllUsers);
window.addEventListener('DOMContentLoaded', getUserDetails);


