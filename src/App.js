<<<<<<< HEAD
import {Routes, Route} from 'react-router-dom'
import {Nav} from './components/Nav'
import {MainPage} from './pages/MainPage'
import {ProfilePage} from './pages/ProfilePage'
import {ChatPage} from './pages/ChatPage'
import {ChatList} from './components/ChatList'
import { nanoid } from "nanoid"
import { useState } from 'react'

const defaultMessages= {
    default: [
        {
            author: 'user',
            text: 'one text'
        },
        {
            author: 'user',
            text: 'two text'
        },
        {
            author: 'user',
            text: 'three text'
        }
    ]
}

function App() {

    const [messages, setMessages] = useState(defaultMessages)

    const chats = Object.keys(messages).map((chat) =>({
        id: nanoid(),
        name: chat
    }))

    const onAddChat = (newChat) => {
        console.log(newChat);
        setMessages({
            ...messages,
            [newChat.name]: []
        })
    }

    const onAddMessage = (chatId, newMessage) => {
        setMessages({
            ...messages,
            [chatId]: [...messages[chatId], newMessage]
        })
    }

    return(
        <>
        <Routes >
            <Route path='/' element={<Nav/>}>
                <Route index element={<MainPage/>}/>
                <Route path='profile' element={<ProfilePage/>}/>
                <Route path='chats'>
                    <Route index element={<ChatList chats={chats} onAddChat={onAddChat}/>}/>
                    <Route path=':chatId' element={<ChatPage chats={chats} messages={messages} onAddMessage={onAddMessage} onAddChat={onAddChat}/>}/>
                </Route>
            </Route>
            <Route path='*' element={<h2>404 NOT FOUND</h2>}/>

        </Routes>
        </>    
        )
}

=======
import {useEffect, useState}  from "react"
import { Message } from "./components/Message"
import './Styles/App.css'
import {AUTHOR} from "./constants"
import {MessageList} from "./components/MessageList"
import ChatList from './components/Chats'
import Grid from '@mui/material/Grid';


function App() {
    const [messageValue, setMessageValue] = useState ([])


    const addMessage = (newMessage) => {
        setMessageValue([...messageValue, newMessage])
    }

    useEffect(()=>{
        if (messageValue.length > 0 && messageValue[messageValue.length -1].author === AUTHOR.user){
            const timeout = setTimeout(()=>{
                addMessage({
                    author: AUTHOR.bot,
                    text: "I AM BOT"
                })
            }, 1500)
            return() =>{
                clearTimeout(timeout)
            }
        }
    })

    return(
        <>
            <div className="Body">
            <header className="App-header">
            <h1>Third Lesson</h1>
            </header>
            <main className="Main">
            <Message  title='MESSAGE' addMessage={addMessage}/>            
            </main>
            <div className="Chats">
            <Grid container spacing={4}>
            <Grid item xs={6}>
            <ChatList title='ChatList'/>
            </Grid>
            <Grid item xs={6}>
            <MessageList messages={messageValue} />
            </Grid>
            </Grid>
            </div>
            </div>

        </>    
        )
}

>>>>>>> lesson4
export default App