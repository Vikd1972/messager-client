import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';

import MessagesList from './pages/MessagesList/MessagesList';
import WriteMessage from './pages/WriteMessage/WriteMessage';
import AppContainer from './App.styles';
import messagerTheme from './messagerTheme';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={messagerTheme}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
