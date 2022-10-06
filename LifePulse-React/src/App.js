import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { routeConfig } from "./utils/router";
import RouteComponet from './RouteComponent';
 

function App() {
  return (
     <BrowserRouter>
        <Routes>
            {
              routeConfig.map ( (route , index) =>{
                return <Route 
                key = {index}
                  path={route.path}
                  element = {<RouteComponet    
                    component = {route.component}
                    layout={ route.layout}
                  />}
                />
              })
            }

        </Routes>
     </BrowserRouter>
  );
}

export default App;
