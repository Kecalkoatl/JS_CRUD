package boot_crud.crud_app.controller;


import boot_crud.crud_app.model.User;
import boot_crud.crud_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;


@Controller
@RequestMapping()
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/admin")
    public String getAllUsers(Model model) {
        model.addAttribute("userList", userService.getAllUsers());
        return "userList";
    }

    @GetMapping("/user")
    public String userPage (Principal principal, Model model){
        User user = userService.findUserByUsername(principal.getName());
        model.addAttribute("user", user);
        return "user";
    }


    @GetMapping("/admin/{id}")
    public String getUserById(@PathVariable("id") int id, Model model) {
        model.addAttribute("user", userService.getUserById(id));
        return "user";
    }

    @GetMapping("/admin/new")
    public String newUser(Model model) {
        model.addAttribute("user", new User());
        return "new";
    }

    @PostMapping("/admin")
    public String create(@ModelAttribute("user") User user) {
        userService.saveUser(user);
        return "redirect:/admin";
    }

    @GetMapping("/admin/{id}/edit")
    public String edit(Model model, @PathVariable("id") int id) {
        model.addAttribute("user", userService.getUserById(id));
        return "edit";
    }

    @PatchMapping("/admin/{id}")
    public String update(@ModelAttribute("user") User user) {
        userService.updateUser(user);
        return "redirect:/admin";
    }

    @DeleteMapping("/admin/{id}")
    public String delete(@PathVariable("id") int id) {
        userService.removeUser(id);
        return "redirect:/admin";
    }


}
