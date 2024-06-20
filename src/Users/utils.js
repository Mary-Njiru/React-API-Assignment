export const getUsers = async() =>{
    const baseUrl = process.env.REACT_APP_BASE_URL;
    try{
        const response = await fetch(`${baseUrl}/users`);
        console.log({response});
        return response.json();
    }catch (error) {
        throw new Error(error.message);
    }

}