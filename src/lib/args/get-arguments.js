import { UNEXCEPTED_EXCEPTION } from "../../const.js";

export const getArguments = ()=> {
    if(Array.isArray(process.argv) && process.argv.length > 2) {
        return process.argv.slice(2);
    }
    throw UNEXCEPTED_EXCEPTION;
}