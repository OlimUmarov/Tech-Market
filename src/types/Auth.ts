export type authType = {
    onClick: ()=> void,
    closeModel: (data:boolean) => void
}

export type Schema = {
    phone_number: string,
    password: string,
    confirmPassword?: string
}