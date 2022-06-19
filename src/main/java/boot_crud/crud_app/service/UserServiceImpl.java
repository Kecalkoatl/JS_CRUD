package boot_crud.crud_app.service;


import boot_crud.crud_app.dao.UserRepository;
import boot_crud.crud_app.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(int id) {

        User returnUser = new User();
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            returnUser = user.get();
        }
        return returnUser;
    }

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

    @Override
    public void updateUser(User updatedUser) {
        userRepository.save(updatedUser);
    }


    @Override
    public void removeUser(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = findUserByUsername(username);

        if(user == null){
            throw new UsernameNotFoundException("Not found");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),user.getAuthorities());
    }
}
