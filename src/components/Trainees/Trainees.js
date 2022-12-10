import React, {Component} from 'react';
import { BiLoader } from 'react-icons/bi';
import Header from '../Header/Header';
import './Trainees.css';
import { connect } from 'react-redux';
import { getTrainees } from '../../actions'

class Trainees extends Component{
    constructor(){
        super()
        this.state= {
            traineesList:[],
            isTraineesListLoaded:false,
            error:null
        }
    }

    render(){
        const {error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
       } else{
        if( this.props.trainees.records &&  this.props.trainees.records.length >0){
        return (
            <ul className="trainee-list">
                <Header title="Trainees Who have registered the Course" />
                { 
                    
                        this.props.trainees.records.map( (record,index)=>{
                            return ( <li key={index}>
                                        <p><b>Name :</b>{record.firstName}{record.lastName}</p>
                                        <p><b>Email :</b>{record.emailId}</p>
                                        <p><b>Contact :</b>{record.contact}</p>
                                        <p><b>Course Name:</b>{record.courseName}</p>
                                        <p><b> Registered Date </b> :{record.enrolledDate}</p>
                                    </li>)
                            })
                    }
                   

            </ul>
            )
        }else{
            return null;
        }
    }
    }

    componentDidMount(){
       this.props.getTrainees();
    }
}

const mapDispatchToProps = {
    getTrainees: getTrainees,
  }
  const mapStateToProps = (state) => (
  {
    trainees: state.trainees
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Trainees);
