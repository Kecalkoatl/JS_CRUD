package boot_crud.crud_app.controller;


import boot_crud.crud_app.dao.RoleRepository;
import boot_crud.crud_app.model.Role;
import boot_crud.crud_app.model.User;
import boot_crud.crud_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@org.springframework.web.bind.annotation.RestController

@RequestMapping("/api")
public class RestController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/users")
    public List<User> showAllUsers() {
        List<User> allUser = userService.getAllUsers();
        return allUser;
    }

    @GetMapping("/{id}")
    public User getUserByID(@PathVariable("id") int id) {
        User user = userService.getUserById(id);
        return user;
    }


    @DeleteMapping("/{id}")
    public User delete(@PathVariable("id") int id) {
        userService.removeUser(id);
        User user = new User();
        return user;
    }

    @PatchMapping("/{id}")
    public User update(@PathVariable("id") int id, @RequestBody User updatedUser, @RequestParam("roleId") String roleId) {

        System.out.println(roleId);

        User user = getUserByID(id);
        Set<Role> roles = user.getRoles();
        roles.add(roleRepository.findRoleById(Integer.parseInt(roleId)));

        updatedUser.setRoles(roles);
        userService.updateUser(updatedUser);

        return updatedUser;
    }


    @PostMapping("/users")
    public User create(@RequestBody User user, @RequestParam("roleId") String roleId) {

        Set<Role> roles = new HashSet<>();
        roles.add(roleRepository.findRoleById(Integer.parseInt(roleId)));

        user.setRoles(roles);
        userService.saveUser(user);

        return user;
    }

    @GetMapping("/user")
    public User getAutorizedUser(Principal principal){
        User user = userService.findUserByUsername(principal.getName());
        return user;
    }
}