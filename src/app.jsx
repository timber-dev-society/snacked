import React from 'react';
import Form, { Input, Button, Validator} from './components/form'
import { OneTimeOver } from './assets/lottie/one-time-over'
import animationData from './assets/lottie/json/hotdog.json'

const App = () => (
  <div className="App">
    <OneTimeOver animationData={animationData} style={{width: '200px', height: '200px'}} />
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
