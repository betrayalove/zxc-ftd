import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Buy from "./pages/Buy";
import Collab from "./pages/Collab";
import Contacts from "./pages/Contacts";
import NotFoundPage from "./pages/NotFoundPage";
import Sold from "./pages/Sold";
import './index.css'
import Favorite from "./pages/Favorite";
import Test from "./pages/Test";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/buy' element={<Buy/>}></Route>
                <Route path='/sold' element={<Sold/>}></Route>
                <Route path='/collab' element={<Collab/>}></Route>
                <Route path='/contacts' element={<Contacts/>}></Route>
                <Route path='/favorite' element={<Favorite/>}></Route>
                <Route path='/test' element={<Test/>}></Route>
                <Route path='*' element={<NotFoundPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;