export const errorHandler=(statuscode,message)=>{
    //constructor
    const error=new Error();
    error.statuscode=statuscode;
    error.message=message;
    return error;
};