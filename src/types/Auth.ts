export type authType = {
    onClick: ()=> void,
    closeModel: (data:boolean) => void
}

export type Schema = {
    phone_number: string,
    password: string,
    confirmPassword?: string
}

export type profile = {
    first_name: string,
    last_name: string,
    middle_name: string | '',
    email: string,
    phone: string,
}

export type userProfile = {
    id: number,
    phone_number: string,
}