import React, { Component } from 'react'
import { FaVuejs, FaNodeJs, FaAngular, FaReact } from 'react-icons/fa';
import { SiNextDotJs } from 'react-icons/si';
import Header from '../Header/Header';

import { connect } from 'react-redux';
import { getCourses } from '../../actions'

import { Link } from 'react-router-dom';
import './CourseList.css'




class CourseList extends Component {

  renderCourseIcon(course) {
    if (course) {
      let icon = null;
      switch (course.icon) {
        case "FaReact":
          icon = <FaReact/>;
          break;
        case "FaAngular":
          icon = <FaAngular/>;
          break;
        case "FaNodeJs":
          icon = <FaNodeJs/>;
          break;
        case "FaVuejs":
          icon = <FaVuejs/>;
          break;
        case "SiNextDotJs":
          icon = <SiNextDotJs/>;
          break;
      }
      return icon;
    }
  }
  componentDidMount() {
    this.props.getCourses();
  }

  render() {

    const {error, records} = this.props.state.courses;
    if (error) {
      return <div>Error: {error.message}</div>
    } else {
      if (records && records.length > 0) {
        const CourseList = records.map((course, index) => {
          const bgColor = `hsl(${(index + 6) * 100},93%,53%)`;
          const processBgColor = bgColor.trim().replaceAll('%', '-');
          return ( <ul className="courseListStyle" key={index}
            style={{
              backgroundColor: bgColor
            }}
            >
                      <li className="itemStyle"><h2>{course.name}</h2>{this.renderCourseIcon(course)}</li>
                      <li>{course.description}</li>    
                      <li>Course Starting Date: {course.dateOfStart}</li> 
                      { /* <li className="itemStyle"><span>Total Seats Available: {course.totalSeats} </span><button  className="btn first"><Link to={`/register/${course.name}/${course.courseId}/${bgColor.trim().replaceAll('%','-')}`}> */ }
                      <li className="itemStyle"><span>Total Seats Available: {course.totalSeats} </span><button  className="btn first"><Link to=
            {{
              pathname: '/register',
              state: {
                params: {
                  name: course.name,
                  id: course.courseId,
                  formColor: processBgColor
                }
              }
            }}>
                       Enquire</Link></button></li>  
                  </ul>)
        })
        return (
          <div>
               <Header />
               <Link className="trainee-link" to="/trainees">Trainees Registered</Link>
               <div className="courseSectionStyle">{CourseList}</div>
          </div>
        )
      } else {
        return null;
      }
    }
  }
}

const mapDispatchToProps = {
  getCourses: getCourses,
}
const mapStateToProps = (state) => (
{
  state: state
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);


