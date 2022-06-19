package boot_crud.crud_app.service;


import boot_crud.crud_app.model.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User getUserById(int id);

    void saveUser(User user);

    void updateUser(User updatedUser);

    void removeUser(int id);

    User findUserByUsername(String username);
}
