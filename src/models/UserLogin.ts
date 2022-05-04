interface UserLogin {
    id:number;
    usuario: string;
    dataNascimento:string;
    senha:string;
    token?: string | null
}

export default UserLogin;