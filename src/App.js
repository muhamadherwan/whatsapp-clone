import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js";

function App() {

  // bind with backend pusher 
  useEffect(() => {
    const pusher = new Pusher('32c5c0415607032f896b', {
      cluster: 'ap1'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="app">
  
      <div className='app__body'>
      <Sidebar />
      <Chat />
      </div>

    </div>
  );
}

export default App;
