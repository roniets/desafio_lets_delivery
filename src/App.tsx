import Route from './routes.js';
import NavHeaderBar from './components/navHeaderBar/navHeaderBar';
import Footer from './components/footer/footer';
import React, { useState } from 'react';
import { character } from './components/typing/character';
import { favorite } from './components/typing/favorite';

import './App.css';

export const FavoritesContext = React.createContext<any>({});

function App() {

  const [favorites, setFavorites] = useState<Array<character>>([]);

  function increment(f: favorite) {
    /* Devido a API não retornar informação sobre a paginação quando buscando uma lista de personagens passando um range de ID's,
     decidi então limitar o número de favoritos em 20 para não necessitar o desenvolvimento da paginação no front end por questões 
     de tempo e prazo.
     EX: https://rickandmortyapi.com/api/character/[1,2,3] */
    if(favorites.length === 20){
      alert("O limite de 20 favoritos foi atingido! Não é possivel adicionar mais personagens aos favoritos!")
      return
    }
    setFavorites(f)
  }

  return (
    <FavoritesContext.Provider value={{favorites, increment}}>
    <div className="App">  
      <Route>
        <NavHeaderBar />
      </Route> 
      <Footer />
    </div>
    </FavoritesContext.Provider>
  );
}

export default App;
