import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  userProfile: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [over, setOver] = useState(null);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [ name, setName ] = useState('');
  const [ email, onEmailChangeHandler ] = useState('');
  const [ password, onPasswordChangeHandler ] = useState('');

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  const handleUnclick = (clicked) => setIsClicked({ ...initialState, [clicked]: false });

  const setCurrOver = (item) => {
    setCurrentColor(item);
  };

  const onValueChangeHandler = (event) => {
    setVal(event.target.value);
  };

  return(
    <StateContext.Provider 
      value={{
        activeMenu, setActiveMenu, over, setOver, isClicked, setIsClicked, handleClick, screenSize, setScreenSize,
        name, setName, email, onEmailChangeHandler, password, onPasswordChangeHandler
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);