export const validate=(email,password,userName)=>{
    const validEmail=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
    const validUserName=/^[A-Za-z][A-Za-z0-9_]{5,29}$/.test(userName);
    if(!validUserName){
        return "Invalid Username";
    }
    if(!validEmail){
        return "Invalid Email";
    }
    if(!validPassword){
        return "Password must contain 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
    }
    return null;
}