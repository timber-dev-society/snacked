import React from 'react';
import Form, { Input, Button } from './components/form'

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/app.js</code> and save to reload.
      </p>
      <Form>
        <Input name="login" />
        <Input name="password" />
        <Button>Send</Button>
      </Form>
    </header>
  </div>
);

export default App;
