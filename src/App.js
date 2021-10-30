// Import CSS
import './App.css';
// Import major dependencies
import { BrowserRouter, Switch, Route } from "react-router-dom"
// Import components
import Dashboard from './views/Dashboard';
import Authentication from './views/Auth';
// Import icons
// Import API and static content

function App() {
    return (
        <div className="App"> 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Authentication} />
                    <Route path="/dashboard" component={Dashboard} />  
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
