const users = [
    { name : "sarah" , comment : "j'aime ce poste <3" },
    { name : "monya" , comment : "le poste est null :( " },
    { name : "carlos" , comment : "salut l'algérie" }
    ];

console.log("users = [{ name : "+"sarah"+", comment:" + "j'aime ce poste <3"+ "},{ name :"+ "monya"+ ", comment :" +"le poste est null :( "+"},{ name :" + "carlos"+ ", comment :" +"salut l'algérie" +"}]")
MoodDetect( users );

function MoodDetect( e ){
    for(let i=0;i<e.length;i++){
    if (e[i].comment.includes("aime") || e[i].comment.includes("adore")){
     e[i].etat="heureux";
     delete e[i].comment;
     
    }    
    else{
        if(e[i].comment.includes("null") || e[i].comment.includes("n'importe quoi")){
            e[i].etat="triste";
     delete e[i].comment;
     
    }
else{
    e[i].etat="neutre";
     delete e[i].comment;

     }

    }
    }
    console.log(e)
    }
