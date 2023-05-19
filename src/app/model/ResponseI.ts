// import { Persona } from "./Persona";

export interface ResponseI {
    json(): import("./Persona").Persona[];
    status: string,
    data: any,
}