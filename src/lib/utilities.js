const Utilities ={
    randomKey : function(){
        return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    }
}

//get randomkey
export  default    Utilities