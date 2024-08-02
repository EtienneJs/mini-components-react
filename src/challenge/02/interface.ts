export type circle = {
    className:string,
    value:string,
    active:boolean
}
export type btn = {
    disable:boolean,
    nombre:string
}
export interface btnInterface {
    next:btn,
    prev:btn
} 

export type useProgressType =  [
    string,
    circle[],
    btnInterface,
     ()=> void,
    ()=> void
]