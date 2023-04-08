import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/Theamcontexts';
import ToggleTheme from './components/ThemeToggle';
import AuthContextProvider from './contexts/Authcontexts';

function App() {
  return (
    <div className="App">
      {/* consumed two different provider to get global data */}
      <ThemeContextProvider> 
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    
    </div>
  );
}

export default App;
