import React from "react";
import {connect} from "react-redux";

class View extends React.Component{
  render()
  {
    return (
      <div>
      {this.props.data.map(item=>(<li key={item.id}>{item.text}</li>))}
      </div>
    );
  }
}


function muni(state){
  return{
    data:state.todo
  }
}

export default connect(muni)(View);
