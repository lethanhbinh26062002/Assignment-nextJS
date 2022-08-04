export interface registerType {
    _id?: String
    name?:String,
    address?:String,
    email?:String,
    password?:String,
}
export interface loginType {
    _id?: String,
    email: String,
    password:String
}