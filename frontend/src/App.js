import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [val, setVal] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api');
        setVal(response.data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);


  return (
    <div>
      얻은값: {val}입니다.
    </div>
  );
}

export default App;
