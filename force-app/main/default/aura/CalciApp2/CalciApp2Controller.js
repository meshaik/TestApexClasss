({
        add : function(component, event, helper) {
            alert("add");
        var x=component.find("FirstNumberid").get("v.value");
            alert(x);
           
        var y=component.find("SecondNumberid").get("v.value");
        var z=parseInt(x)+parseInt(y);
                alert(z);
        component.find("resultid").set("v.value",z);
        },
        sub : function(component, event, helper){
        alert("sub");
     var x = component.find("FirstNumberid").get("v.value");
     var y = component.find("SecondNumberid").get("v.value");
     var z = parseInt(x)-parseInt(y);
   
     
      component.find("resultid").set("v.value",z);    
    },
    press : function(component, event, helper){
    alert(event.getSource().getLocalId());
    },
    })
