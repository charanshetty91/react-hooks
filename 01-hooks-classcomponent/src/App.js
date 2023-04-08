import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/Theamcontexts';
import ToggleTheme from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>      
        <Navbar />
        <BookList /> 
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
