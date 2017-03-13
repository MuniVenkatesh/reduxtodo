import React from "react";
import ReactDOM from 'react-dom';
import {bindActionCreators} from "redux";
import {addtodo} from "../actions/addtodo.js";
import {connect} from "react-redux";

class Add extends React.Component{
  todo(){
    var value=ReactDOM.findDOMNode(this.refs.data).value;
    ReactDOM.findDOMNode(this.refs.data).value=''
    this.props.add(value);
  }
  render()
  {
    return (
      <div>
        <input type="text" ref="data"/>
        <button onClick={()=>{this.todo()}}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    data:state.todo
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({add:addtodo},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Add);
