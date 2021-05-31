import React from 'react';
import {Field,reduxForm} from 'redux-form';

class StreamForm extends React.Component{

    renderError({error,touched}){
        if(touched && error){
            return <div>{error}</div>
        }
    }

    renderInput=({input,label,meta})=>{

        return ( 
            <div className="field">
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            {this.renderError(meta)}
            </div>
        )
    }

    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues) 
    }

    render(){
        return (
            < form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
            <Field name="title" component={this.renderInput} label="Enter title "/>
            <Field name="description" component={this.renderInput} label="Enter description"/>
            <button className="ui button primary">Submit</button>
            </form>
        )
    }

}

const validate=(formValues)=>{
    const error={}
    if(!formValues.title){
        error.title="* You must enter a title"
    }
    if(!formValues.description){
        error.description="* you must enter a description"
    }
    return error;
}

export default reduxForm({form:'streamForm',validate})(StreamForm);
