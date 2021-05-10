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
      



function str(value){
    value = String(value);
    return value
}

function int(value){
    return parseInt(value)
}
function float(value){

    return parseFloat(value).toFixed(1)
}

function type(value){
    return typeof(value)
}
print("trst")
print(len("444"))
print(type(1))
print(int(1.5))
print(float(9))
