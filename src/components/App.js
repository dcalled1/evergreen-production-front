import React, { useState, useEffect } from 'react';
import './App.css';
import CreateMonitoredDatum from './CreateMonitoredDatum';
import ListMonitoredData from './ListMonitoredData';
import api from '../api/monitoredData'

function App() {
  const [data, setData] = useState([]);

  const createHandle = (datum) => {
    
    const sendCreate = async() => {
      const {event, ...rest} = datum;
      await api.post(`monitored-data/${event}`, rest);
      const allData = await retrieveData();
      if(allData) setData(allData);;
    }
    sendCreate();
  }

  const removeHandle = (id) => {
    const sendRemove = async () => {
      await api.delete(`monitored-data/${id}`);
      alert("Deleted!")
      const allData = await retrieveData();
      if(allData) setData(allData);
    }
    sendRemove()
  }

  const retrieveData = async () => {
    const response = await (await api.get('monitored-data')).data;
    return response;
  }

  useEffect(() => {
    const getAllData = async() => {
      const allData = await retrieveData();
      if(allData) setData(allData);
    }
    getAllData();
  }, []);

  return (
    <div className='ui container'>
      <CreateMonitoredDatum createHandle={createHandle}/>
      <ListMonitoredData data={ data } removeHandle={removeHandle}/>
    </div>
  );
}

export default App;
