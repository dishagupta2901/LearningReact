import React, {createContext, useContext} from "react";

const AppContext = createContext({
    currentUser : "My User"
})

export default AppContext;
