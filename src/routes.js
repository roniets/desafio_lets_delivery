import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import CharactersListPage from'./pages/charactersListPage/charactersListPage';
import FavoritesListPage from'./pages/favoritesPage/favoriteListPage';

export default function Routes ({children}){
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path="/" component={HomePage} />  
                <Route exact path="/charactersListPage" component={CharactersListPage} /> 
                <Route exact path="/favoritesListPage" component={FavoritesListPage} />             
            </Switch>
        </BrowserRouter>
    )
};