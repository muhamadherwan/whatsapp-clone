import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Message, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import './Chat.css';

function Chat() {

    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');

    // get random avatar
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    // submit msg process
    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput('');
    };

    return (
        <div className='chat'>
            
            <div className='chat__header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
           
            <div className='chat__headerInfo'>
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>

            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
            </div>            

            <div className='chat__body'>
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>
                        wan
                    </span>
                    Hey wassup! 👻
                    <span className='chat__timestamp'>3:52am</span>
                </p>
                
                <p className='chat__message'>
                    <span className='chat__name'>
                        mat
                    </span>
                    Yo 🤞!
                    <span className='chat__timestamp'>3:53am</span>
                </p>
                
            </div>

            <div className='chat__footer'>
                <InsertEmoticon />
                <form>
                    <input
                    value={input} onChange={(e) => setInput(e.target.value)} 
                    placeholder='Type a message'
                    type='text' />
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <MicIcon />
            </div>            

        </div>
    )
}

export default Chat
