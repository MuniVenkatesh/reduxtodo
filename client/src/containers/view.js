import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {toggletodo} from "../actions/toggletodo.js";

class View extends React.Component{
  render()
  {
    var todosDone=this.props.data.filter(item=>(item.completed==true));
    var todosPending=this.props.data.filter(item=>(item.completed==false));
    return (
      <div className="container row">
        <div className="col-lg-6">
        Completed:
        {todosDone.map(item=>(<li key={item.id} onClick={()=>{this.props.toggle(item)}}>{item.text}</li>))}
        </div>
        <div className="col-lg-6">
        Pending:
        {todosPending.map(item=>(<li key={item.id} onClick={()=>{this.props.toggle(item)}}>{item.text}</li>))}
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({toggle:toggletodo},dispatch);
}

function muni(state){
  return{
    data:state.todo
  }
}

export default connect(muni,matchDispatchToProps)(View);
