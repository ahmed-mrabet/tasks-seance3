const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';
console.log(str1);
FormatToArray(str1);
function FormatToArray(e){
   let list1=e.split("-");
   
   let list2=[
    
   ];
   
    let names =[];
    for(let i=0;i<list1.length;i++){
      
      names[i] = list1[i].split("&");
      list2[i]={};
        
    }
    
    list2.map(function(){
        for(let i=0;i<list1.length;i++){
                    
            list2[i].name = names[i][0]; 
            list2[i].lastname = names[i][1];    
           
          }
    })
    
        
      
    console.log(list2);
   
  
   
   
  


}