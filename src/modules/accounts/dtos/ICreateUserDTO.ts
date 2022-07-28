interface ICreateUserDTO {
    id?: string;
    avatar?: string;
    name?: string;
    email: string;
    password: string;
}

export { ICreateUserDTO }