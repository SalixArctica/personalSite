import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled, { keyframes } from 'styled-components';

const StyledLabel = styled.label`
    display: block;
    margin: 1rem 0;
`
const StyledInput = styled.input`
    display: block;
    font-size: 2rem;
    width: 100%;
`

const StyledTextarea = styled.textarea`
    display: block;
    height: 10rem;
    width: 100%;
    resize: none;
    font-size: 2rem;
`

const Button = styled.button`
    padding: .5rem 1rem;
    transition: all .5s ease-in-out;
    min-width: 10rem;
    border-radius: .5rem;
    box-shadow: none;
    background: ${props => 
        props.done ? 'green' : props.error ? 'red' : 'teal'
    };
    color: white;
    border: none;
    transition: all .2s ease-in-out;
    cursor: ${props => (props.loading || props.done) ? 'default' : 'pointer'};
    font-size: 2rem;
    margin: 1rem;
    
    &:hover {
        box-shadow: ${props => (props.loading || props.done) ? 'none' : '2px 2px 5px slategrey'};
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingButton = (props => (
    <Button red={props.error} disabled={props.loading || props.done || props.error} {...props}>
        {
            props.error 
            ? 'Error'
            : props.loading
                ? 'Sending...' 
                : props.done 
                    ? props.formStatus || 'Done'
                    : props.children
        }
    </Button>
))

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formStatus: 'Send',
        }
    }

    handleSubmit = async (info, { setSubmitting }) => {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:7000/api/contact', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            })
            .then(res => {
                if(res.status == 200) {
                    this.setState({done: true, formStatus: 'Sent'});
                    resolve();
                } else {
                    this.setState({error: true, formStatus: 'Error'})
                    console.error(res);
                    reject(res);
                }
            })
            .catch(err => {
                console.error(err);
                this.setState({error: true, formStatus: 'Error'})
                reject();
            })
        })
    }
    
    render() {
        return (
            <Formik
                enableReinitialize={true}
                initialValues={{name: '', email: '', message: ''}}
    
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required'),
                    email: Yup.string()
                        .required('Required')
                        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, {message: 'Please enter a valid Email'}),
                    message: Yup.string()
                        .required('Required')
                })}
                onSubmit={this.handleSubmit}
            >
            {formik => (
            <form onSubmit={formik.handleSubmit}>
                <div style={{marginRight: '1rem'}}>
                    <StyledLabel>
                        Name <span style={{color: 'red'}}>{formik.touched.name && formik.errors.name ? '*' + formik.errors.name : null}</span>
                        <StyledInput width='20' id='name' error={formik.touched.name && formik.errors.name} {...formik.getFieldProps('name')} />
                    </StyledLabel>
                    <StyledLabel>
                        E-mail <span style={{color: 'red'}}>{formik.touched.email && formik.errors.email ? '*' + formik.errors.email : null}</span>
                        <StyledInput width='20' id='email' error={formik.touched.email && formik.errors.email} {...formik.getFieldProps('email')} />
                    </StyledLabel>
                    <StyledLabel>
                        Message <span style={{color: 'red'}}>{formik.touched.message && formik.errors.message ? '*' + formik.errors.message : null}</span>
                        <StyledTextarea id='message' error={formik.touched.message && formik.errors.message} {...formik.getFieldProps('message')} />
                    </StyledLabel>
                    <LoadingButton done={this.props.done} formStatus={this.state.formStatus} type='submit' error={Object.entries(formik.errors).length !== 0 || this.props.error} loading={formik.isSubmitting || formik.isValidating}>{this.state.formStatus}</LoadingButton>
                </div>
            </form>
            )}
            </Formik>
        )
    }
}
