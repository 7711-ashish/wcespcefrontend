import apiClient from "./client";
import { View, TextInput, Button, Alert } from 'react-native';


const signIn = (payload) => {
    return apiClient.post("/users/signin", payload);
};

const signUp = (payload) => {
    const strongPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordPattern.test(payload.password)) {
      Alert.alert(
        'Error',
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return {
        res : {
            ok: false,
            data: ""
        }
      };
    }
    return apiClient.post("/users/signup", payload);
};

const updateUser = (payload) => {
    console.log(payload)
    return apiClient.put("/users",payload);
}

export { signIn, signUp, updateUser };
