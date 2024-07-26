import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import MessagesList from './pages/MessagesList/MessagesList';
import WriteMessage from './pages/WriteMessage/WriteMessage';
import AppContainer from './App.styles';
import messagerTheme from './messagerTheme';

function App() {
  return (
    <ThemeProvider theme={messagerTheme}>
      <Router>
        <AppContainer>
          <MessagesList />
          <WriteMessage />
          <ToastContainer
            className="toast"
            bodyClassName="toast-body"
          />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
