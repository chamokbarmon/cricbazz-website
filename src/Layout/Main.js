import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Componeds/Headers/Header';
export const DataContext = createContext('dataRing')

const Main = () => {
    
    return (
     
           <div >
            <DataContext.Provider>
                <Header></Header>
                <Outlet></Outlet>
            </DataContext.Provider>
           </div>
       
    );
};

export default Main;