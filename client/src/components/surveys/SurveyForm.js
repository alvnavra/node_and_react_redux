import  React, { Component }  from "react";
import {reduxForm, Field} from 'redux-form'
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import _ from 'lodash'
import validateEmails from '../../utils/validateEmails'
import FIELDS from './formsFields'

class SurveyForm extends Component
{
    renderFields(){
      return _.map(FIELDS, ({label, name}) => {
          return <Field key={name} label={label} name={name} component={SurveyField} type="text"/>
      })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(values=>this.props.onSurveySubmit())}>
                {this.renderFields()}
                <Link to="/surveys" className="red flat btn-flat white-text">
                    Cancel
                </Link>
                <button className="teal btn-flat right white-text" type="submit">
                    Next
                <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        )
    }
}

function validate(values)
{
    const errors={};

    errors.recipients = validateEmails(values.recipients||'')

    _.each(FIELDS,({name})=>{
        console.log(values);
        console.log(name, values[name]);
        if(!values[name]){
            errors[name] = `You must provide a value`
            console.log(errors.name)
        }

    })

    return errors;
}

export default reduxForm({
    validate,
    form:'surveyForm',
    destroyOnUnmount:false
}) (SurveyForm)