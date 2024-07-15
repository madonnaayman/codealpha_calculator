var screen = document.getElementById('screen');
var operType ='';
var values ={ prev :null , new :null };
var isLastBtnNumber = false;


function getNumbers(num){

    if (isLastBtnNumber) {
        var result ;
        if (values.new) {
            result = values.new + '' +num;
            values.new = result;
            screen.value = result;    
        }
        else {
            result = values.prev + '' + num;
            values.prev = result;
            screen.value = result;
        }   
    }
    else {
        screen.value=num
        if(values.prev){
            values.new = num;
        } else {
            values.prev = num;
        }
        isLastBtnNumber =true;
    } 
}

function getOperators(Oper){
    operType = Oper;
    isLastBtnNumber = false;
}

function calculate(){
    if(!values.new){
        return;
    }
    if(values.new && values.prev && operType){
        switch (operType) {
            case "+":
               var newValue= Number(values.prev) + Number(values.new ); 
               screen.value = newValue ;
               values.prev = newValue;
                break;
            case "-":
                var newValue= Number(values.prev) - Number(values.new ); 
                screen.value = newValue ;
                values.prev = newValue;
                break;
            case "*":
                var newValue= Number(values.prev) * Number(values.new ); 
                screen.value = newValue ;
                values.prev = newValue;
                 break;
            case "/":
                 var newValue= Number(values.prev) / Number(values.new ); 
                 screen.value = newValue ;
                 values.prev = newValue;
                 break;
        
            default:
                return;
        }
    }
    isLastBtnNumber = false;
}

function deleteLast() {
        if (isLastBtnNumber) {

           if (values.new) {
               values.new=String( values.new).slice(0,-1);
               screen.value= values.new || '0';
           } else {
               values.prev = String(values.prev).slice(0,-1);
               screen.value= values.prev;
           }

        } else {

                  if(values.new){
                    values.new = String(values.new).slice(0,-1);
                    screen.value= values.new || '0';
    
                    }

                    values.prev = null;
                }

        if (!values.new && !values.prev) {
             isLastBtnNumber=false;
        }
    
    

}