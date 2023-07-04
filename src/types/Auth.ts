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
  first_name: string;
  last_name: string;
  middle_name: string;
  birthday: string | Date 
  gender: string;
  email: string;
  phone_number: string;
  user_role?: "C"
}

export type userProfile = {
    id: number,
    phone_number: string,
}