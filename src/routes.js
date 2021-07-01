import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import CharactersListPage from'./pages/charactersListPage/charactersListPage'

export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />  
                <Route exact path="/charactersListPage" component={CharactersListPage} />                
            </Switch>
        </BrowserRouter>
    )
};