import React from "react";
import MenuContext from "./context/MenuContext";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// The components:
import BottomMenu from "./components/BottomMenu";
import Expenses from "./components/Expenses";


function TheMainApp() {

    return (
    <>
        <Router>
            <Switch>
                <Route path={'/'}>
                    <Expenses/>
                </Route>
            </Switch>
            <BottomMenu/>
        </Router>
    </>
    );
}

function App() {
    const [menu, setMenu] = React.useState('meetings');

    const MenuContextValues = {
        state: {
            menu,
            setMenu
        },
        values: {
            currentMenu: menu
        }
    }
  return (
      <>
          <MenuContext.Provider value={MenuContextValues}>
              <TheMainApp/>
          </MenuContext.Provider>
      </>
  );
}

export default App;
