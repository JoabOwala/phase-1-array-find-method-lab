// code your solution here
function superbowlWin(record){
   let finalResult = record.find(record=>record.result==="W");
   if(finalResult){
    return finalResult.year;
   }else{
    return undefined;
   }
}