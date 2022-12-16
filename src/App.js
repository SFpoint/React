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

export default App