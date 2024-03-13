import { useState} from 'react'

import Form from './components/Form';
import Table from './components/Table';

const App = () => {

  const [resultForm, setResultForm] = useState('');
  
  const updateResult = (result) => {
    setResultForm(result);
  }
    
    return (
      <>
        <Form handleResult = {updateResult} />
        {resultForm != 0 && 
          <Table result = {resultForm} />
        }
    </>
  )
}


export default App;
