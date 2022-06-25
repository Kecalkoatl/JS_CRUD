package boot_crud.crud_app.controller;


import boot_crud.crud_app.dao.RoleRepository;
import boot_crud.crud_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class UserController {


    @RequestMapping("/table.js")
    public String tableJS(){
        return "table.js";
    }

    @RequestMapping("/userDetails.js")
    public String userDetailsJS(){
        return "userDetails.js";
    }



    @GetMapping("/admin")
    public String adminPanel() {
        return "userList";
    }


    @GetMapping("/user")
    public String userPage (){
        return "user";
    }

}
