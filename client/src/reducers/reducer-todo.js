let id=0;
export const Todo=(state=[],action)=>{
  console.log(action);
  switch(action.type){
    case  "ADDTODO":return [...state,
      {id: id++,
      text:action.payload,
      completed:false}];
      break;

    case "TOGGLETODO":
    var toggle=state.map(item=>{
      if(item.id==action.payload.id){
        item.completed=!item.completed;
      }
      return item;
    });

    return toggle;
    break;
  }
  return state;
}
