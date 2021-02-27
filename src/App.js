import React from "react";
import MenuContext from "./context/MenuContext";


// The components:
import BottomMenu from "./components/BottomMenu";
import Expenses from "./components/Expenses";
import Meetings from "./components/Meetings";
import Reminders from "./components/Reminders";


function TheMainApp() {
    const something = React.useContext(MenuContext);
    const currentMenu = something.values.currentMenu;

    return (
    <>
        {currentMenu === 'expenses' ? <Expenses/> : null}
        {currentMenu === 'meetings' ? <Meetings/> : null}
        {currentMenu === 'reminders' ? <Reminders/> : null}
        <BottomMenu/>
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
