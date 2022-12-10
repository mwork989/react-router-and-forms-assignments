import CourseList from '../components/courseList/CourseList';
import NotFoundComponent from '../components/NotFound/Notfound';
import { Route, Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Trainees from '../components/Trainees/Trainees';
import Loader from '../components/Loader/Loader'
const App = ()=>{
    return (
        <section>
         <Loader/>
         <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/courses" />
                </Route>
                {/* <Route  path="/register/:name/:id/:formColor" component={RegisterForm} /> */}
                <Route  path="/register" component={RegisterForm} />
                <Route path="/courses" component={CourseList} />
                <Route path="/trainees" component={Trainees} />
                <Route component={NotFoundComponent}/>
             
            </Switch>
            </Router>
         
        </section>
    )
}

export default App;