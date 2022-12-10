import React, { Component } from 'react';
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import './RegisterForm.css'
import { connect } from 'react-redux';
import { enrollToCourses } from '../../actions'


class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailId: '',
      contact: ''
    }

    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.contactChange = this.contactChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  firstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  lastNameChange(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  emailChange(event) {
    this.setState({
      emailId: event.target.value
    });
  }

  contactChange(event) {
    this.setState({
      contact: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {firstName, lastName, emailId, contact, courseId, courseName, formBgColor, enrolledDate, } = this.state;
    this.props.enrollToCourses({
      firstName,
      lastName,
      emailId,
      contact,
      courseId,
      courseName,
      formBgColor,
      enrolledDate,
    })

  }

  static getDerivedStateFromProps(props) {
    const {params} = props.location.state;
    return {
      courseId: params.id,
      courseName: params.name,
      formBgColor: params.formColor
    }
  }

  render() {
    if (this.props.isRegsitrationSuccessFull) {
      return <p className="register-success">Registration Successfull 
                        <ul>
                            <li><Link to="/courses">Go Back To Courses</Link></li>
                            <li><Link to="/trainees">View Trainees Registered</Link></li>
                        </ul>
                    </p>
    } else {
      const registerFormTitle = `Well Done! Please Register for  ${this.state.courseName} course`;
      return (
        <span>
                <Header title={registerFormTitle}/>
                <form onSubmit={this.handleSubmit} style={{
          backgroundColor: this.state.formBgColor.replaceAll('-', '%')
        }}>  
            <label >FirstName: </label>
            <input id="fname" type="text" value={this.state.firstName} onChange={this.firstNameChange} />
            <br/><br/>
            <label >LastName: </label>
            <input id="lname" type="text" value={this.state.lastName} onChange={this.lastNameChange} />
            <br/><br/>
            <label >Email: </label>
            <input id="email" type="email" value={this.state.email} onChange={this.emailChange} />
            <br/><br/>
            <label >Contact: </label>
            <input id="contact" type="text" value={this.state.contact} onChange={this.contactChange} />
            <br/><br/>
            <button  className="btn first" type="submit" >Submit</button>
            </form>
            </span>
      )
    }
  }
}


const mapDispatchToProps = {
  enrollToCourses: enrollToCourses,
}

const mapStateToProps = (state) => (
{
  isRegsitrationSuccessFull: state.courses.isRegsitrationSuccessFull
})
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
