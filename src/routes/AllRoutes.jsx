import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';


function AllRoutes(props) {
    return (
        <Routes>
            <Route path='/' Component={Homepage}/>
        </Routes>
    );
}

export default AllRoutes;