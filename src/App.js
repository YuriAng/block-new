import { Provider } from 'react-redux'
import styled from 'styled-components';
import MovieList from "../src/components/movie-list";
import store from "./store"
import Header from "../src/components/header"
import Actions from "../src/components/actions"
import Search from "../src/components/search"
import Filter from "../src/components/filter"
import "../src/css/styles.css"

const AppStyled = styled.div``

function App() {
    return (
      <AppStyled>
        <Provider store={store}>
          <Header/>
          <Actions>
            <Search/>
            <Filter/>
          </Actions>
          <MovieList />
        </Provider>
      </AppStyled>

    );

}

export default App;
