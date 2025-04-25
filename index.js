const deliveryType=(deliveries)=>{
    deliveries.forEach(delivery=>{
        switch(delivery){
            case "Mon":
                console.log("Books delivery");
                break;
            case "Tue":
                console.log("Clothes delivery");
                break;
            case "Fri":
                console.log("Shoes delivery");
                break;
            default:
                console.log("Delivery type not supported");
                break;            

        }
    });
}
const  deliveries=["Mon","Tue","Fri"];
deliveryType(deliveries);


const bookStatuses=(books)=>{
    for(let i=0;i<books.length;i++){
     if(books[i] =="Available"){
        console.log("Ready to lend");

     }else{
        console.log("Checked out");
     }  
    }
};
const books=["Available","Available","Borrowed"];
bookStatuses(books)


const checkAge=(ages)=>{
    for(let i=0;i<ages.length;i++){
        if(ages[i]>=18){
            console.log("Adult");
        }else{
            console.log("Minor");
        }
    }
}
const ages=[18,9,25,10];
checkAge(ages)

const liveCountDown=(countdowns)=>{
    let lives=5;
    
    while(lives>=countdowns){
        
        console.log(`You have ${lives} lives left`);
        lives--;
    }

};
liveCountDown(0);

const commentsWithDoWhile=(feedbacks)=>{
    
    do{
        console.log(feedback.shift());

    }while(feedbacks.length > 0)


}
const feedback=["Good job","Better","Good Trial","You can do better"]

commentsWithDoWhile(feedback);

const loginStatuses=(loginfeedback)=>{
    for(let i=0;i<loginfeedback.length;i++){
        if(loginfeedback[i]=="Logged in"){
            console.log("Welcome back!");
        }else{
            console.log("Please log in");
        }
    }
}
const loginfeedback=["Logged in","sign"];
loginStatuses(loginfeedback);

const supportTicketPriorities=(priorities)=>{
    priorities.forEach(priority=>{
        switch(priority){
            case "low":
                console.log("Last to be addressed");
                break;
            case "medium":
                console.log("Second to be addressed");
                break;
            case "high":
                console.log("First to be addressed");
                break;
            default:
                console.log("Support ticket cannot be addressed at the moment");
                break;       

        }

    });
}
const priorities=["low","medium","high"];
supportTicketPriorities(priorities)



const quizCountDown=(second)=>{
    let seconds=10;
    while(seconds>=second){
        console.log(`You have ${seconds} seconds remaining`);
        seconds--;
    }
};
quizCountDown(0);

