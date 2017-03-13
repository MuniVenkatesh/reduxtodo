export const Todo=(state=[],action)=>{
  switch(action.type){
    case  "ADDTODO":return [...state,
      {id: new Date(),
      text:action.payload}];
      break;
  }
  return state;
}
