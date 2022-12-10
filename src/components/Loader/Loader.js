
import { BiLoader } from 'react-icons/bi';
import { connect } from "react-redux";
import './Loader.css';


let Loader =({loading})=>(

  loading ? ( 
    <div className="loaderStyle">
        <p><BiLoader/></p>
        <p>Loading ...</p>
    </div>)
  :null
)
const mapStateToProps = (state)=> {return {loading: state.courses.isLoading}};

Loader = connect(mapStateToProps,null)(Loader);

export default Loader;