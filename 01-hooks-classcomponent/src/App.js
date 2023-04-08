import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/Theamcontexts';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar/>
      <BookList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
