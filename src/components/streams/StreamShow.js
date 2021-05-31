import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions'
class  StreamShow extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
   render(){

    if(!this.props.stream){
        return <div>Loading...</div>
    }

    return(
        <div>
            <h4>{this.props.stream.title}</h4>
            <h5>{this.props.stream.description}</h5>
        </div>
    );
   }
}

const mapStateToprops=(state,ownProps)=>{
    return(
        {stream:state.streams[ownProps.match.params.id]}
    )

}

export default connect(mapStateToprops,{fetchStream})(StreamShow);