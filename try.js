let persons = [

    { name : "MONCEF" , age: 13} ,
    { name : "BAHIJA" , age: 23} ,
    { name : "ALA" , age: 18} ,
    
    ];
    
    
    persons.map(function(){
        for(let i =0;i<persons.length;i++){
            if(persons[i].age<18 ){
                persons[i].status="mineur";
                
            }
            
            else{
                persons[i].status="Majeur";
               
            }  
                      
            
    }
    
}) 
console.log(persons);

    
   
       
     
    
    