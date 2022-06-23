package boot_crud.crud_app.controller;


import boot_crud.crud_app.dao.RoleRepository;
import boot_crud.crud_app.model.Role;
import boot_crud.crud_app.model.User;
import boot_crud.crud_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.Set;


@Controller
@RequestMapping()
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/admin")
    public String adminPanel(Model model, Principal principal) {
        User user = userService.findUserByUsername(principal.getName());
        model.addAttribute("userName", user);
        model.addAttribute("newUser", new User());
        model.addAttribute("userList", userService.getAllUsers());
        return "userList";
    }


    @GetMapping("/user")
    public String userPage (Principal principal, Model model){
        User user = userService.findUserByUsername(principal.getName());
        model.addAttribute("user", user);
        return "user";
    }


    @PostMapping("/admin")
    public String create(@ModelAttribute("user") User user, @RequestParam ("roles") int role) {

        Set<Role> roles= user.getRoles();
        roles.add(roleRepository.findRoleById(role));
        user.setRoles(roles);

        userService.saveUser(user);
        return "redirect:/admin";
    }



    @PatchMapping("/admin/{id}")
    public String update(@RequestParam (name = "name") String name, @RequestParam(name = "surname") String surname, @RequestParam (name = "departament") String departament,
                         @RequestParam(name = "salary") int salary, @RequestParam(name = "username") String username, @RequestParam(name = "roles") int role,
                         @RequestParam(name = "password") String password, @PathVariable("id") int id ) {
        User user = userService.getUserById(id);
        Set<Role> roles= user.getRoles();
        roles.add(roleRepository.findRoleById(role));
        user.setName(name);
        user.setSurname(surname);
        user.setDepartament(departament);
        user.setSalary(salary);
        user.setUsername(username);
        user.setPassword(password);
        user.setRoles(roles);

        userService.updateUser(user);
        return "redirect:/admin";
    }

    @DeleteMapping("/admin/{id}")
    public String delete(@PathVariable("id") int id) {
        userService.removeUser(id);
        return "redirect:/admin";
    }


}
