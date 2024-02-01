
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
    }
})

export const UserService = {
        async getAllUsers() {
            let response = await apiClient.get("/users");
            let allUsers = response.data
            return allUsers
        },

        async submitUser(newUser){
            await apiClient.post("/users", newUser)
        },

        async deleteUser(userId){
            try {
                await apiClient.delete(`/users/${userId}`);
            } catch (error) {
                console.error('Error al eliminar el usuario:', error);
                throw error;
            }
        }

};

