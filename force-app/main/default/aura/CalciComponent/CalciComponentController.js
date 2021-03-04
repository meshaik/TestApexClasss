({
	add : function(component, event, helper) { 
        
        alert('Enter into the Add function'); 
        var firstnumber=component.get("v.firstnumber");
        var secondnumber= component.get("v.secondnumber");
        var result= parseInt(firstnumber)+parseInt(secondnumber);
        component.set("v.result",result);
        
	},
    
    sub  : function(component,event,helper) {
   
        var firstnumber=  component.get("v.firstnumber");
        var secondnumber= component.get("v.secondnumber");
        var  result = parseInt(firstnumber)-parseInt(secondnumber);
        component.set("v.result" ,  result);
       
    },
    
    mul   :  function(component,event,helper){
        var firstnumber=  component.get("v.firstnumber");
        var secondnumber= component.get("v.secondnumber");
        var result= parseInt(firstnumber)*parseInt(secondnumber);
        component.set("v.result",result);
    },
    
    div : function(component,event,helper){
        
        var firstnumber=    component.get("v.firstnumber");
        var secondnumber=   component.get("v.secondnumber");
        var result=  parseInt(firstnumber)/parseInt(secondnumber);
        component.set("v.result", result);

    }
    
})