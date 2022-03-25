import React from 'react';
import {Routes, Route } from 'react-router-dom';
import NewUser from '../Views/NewUser';
import Users from '../Views/Users';
import NewBank from '../Views/NewBank';

const AppRoutes = () => {
  return (
      <Routes>
        <Route exact path='/' element={<Users/>} />
        <Route path='/newuser' element={<NewUser/>}/>
        <Route path='/newbank' element={<NewBank/>} />
        <Route path='/updateuser' element={<NewUser/>}/>
        <Route path='/updatebank' element={<NewBank/>}/>
      </Routes>
  );
};

export default AppRoutes;