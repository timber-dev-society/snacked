import React from 'react';
import Form, { Input, Button, Validator} from './components/form'

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/app.js</code> and save to reload.
      </p>
      <Form onSubmit={(data) => console.log(data)}>
        
        <p>
          <Validator trigger="onChange" regex={/\d+/} notEmpty>
            <Input name="login" />
          </Validator>
        </p>
        <Input name="password" />
        <Button>Send</Button>
      </Form>
    </header>
  </div>
);

export default App;
