import React from 'react'; 
import { Container } from '@material-ui/core'
import { Login} from './components/Login'
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <Container>
      <Login/>
      <LoginForm />
    </Container>
  );
}

export default App;
