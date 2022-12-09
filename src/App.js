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

export default App