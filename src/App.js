// Import CSS
import './App.css';
// Import major dependencies
import { BrowserRouter, Switch, Route } from "react-router-dom"
// Import components
import DashboardView from './views/DashboardView';
import AuthView from './views/AuthView';
// Import icons
// Import API and static content

function App() {
    return (
        <div className="App"> 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AuthView} />
                    <Route path="/dashboard" component={DashboardView} />  
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
