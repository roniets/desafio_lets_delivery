import Route from './routes.js';
import NavHeaderBar from './components/navHeaderBar/navHeaderBar'
import Footer from './components/footer/footer'
import React, { useState } from 'react';
import { character } from './components/typing/character'

import './App.css'

export const FavoritesContext = React.createContext<any>({});

function App() {

  const [favorites, setFavorites] = useState<Array<character>>([]);

  function increment(a: any) {
    if(favorites.length === 20){
      alert("O limite de 20 favoritos foi atingido! Não é possivel adicionar mais personagens favoritos!")
      return
    }
    setFavorites(a)
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
