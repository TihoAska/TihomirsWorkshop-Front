export interface UserToRegisterDTO{
    firstName : string,
    lastName : string,
    userName : string,
    email : string,
    password : string,
    confirmPassword : string,
    imageUrl ?: string;
}