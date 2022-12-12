import {useEffect, useState}  from "react"
import { Message } from "./components/Message"
import './Styles/App.css'
import {AUTHOR} from "./constants"
import {MessageList} from "./components/MessageList"

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
    },[messageValue])

    return(
        <>
        <div className="Body">
            <header className="App-header">
            <h1>Second Lesson</h1>
            </header>
            <main className="Main">
            <Message  title='MESSAGE' addMessage={addMessage}/>            
            </main>
            <MessageList messages={messageValue} />
            </div>

        </>    
        )
}

export default App