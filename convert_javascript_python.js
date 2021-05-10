function print(value,...values){
    var vin = "";
    if (values.length > 0) {
        for(let i = 0; i<values.length;++i){
            vin += values[i] + " ";
        }
        return console.log(value,vin)
    }else{
return console.log(value);
    }
}

function len(value,...values){
    var vin = "";
    value = String(value);
    vin = value.length + " ";
   
    if (values.length > 0) {
        for(let i = 0; i<values.length;++i){
                values[i] = String(values[i]);
                vin += values[i].length;
            }
        }
  return vin
    }
      



function str(value,...values){
    var vin = "";
    value = String(value);
    vin = value + " ";
        if (values.length > 0) {
        for(let i = 0; i<values.length;++i){
                values[i] = String(values[i]);
            }
            console.log(String(value));
        }
    
    return vin
}

