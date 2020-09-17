import React from 'react';
import Form, { Input, Button, Validator} from './components/form'

const App = () => (
  <div className="App">
    <div className="App-header">
      <Form onSubmit={(data) => console.log(data)}>
        <p>
          <Validator trigger="onChange" regex={/\d+/} notEmpty>
            <Input name="login" />
          </Validator>
        </p>
        <Validator trigger="onSubmit" notEmpty>
          <Input name="password" />
        </Validator>
        <Button>Send</Button>
      </Form>
    </div>
  </div>
);

export default App;
