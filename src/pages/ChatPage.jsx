import { useEffect }  from "react"
import { Message } from "../components/Message"
import '../Styles/App.css'
import { AUTHOR } from "../constants"
import { MessageList } from "../components/MessageList"
import Grid from '@mui/material/Grid';
import { useParams, Navigate } from "react-router-dom"

export function ChatPage({onAddMessage, messages}) {
   // const [messages, setMessages] = useState ([])
    const {chatId} = useParams()



    useEffect(()=>{
        if ( chatId &&
             messages[chatId] &&
              messages[chatId].length > 0
               && messages[chatId][messages[chatId].length - 1].author === AUTHOR.user){
            const timeout = setTimeout(()=>{
                onAddMessage(chatId,{
                    author: AUTHOR.bot,
                    text: "I AM BOT"
                })
            }, 1500)
            return() =>{
                clearTimeout(timeout)
            }
        }
    }, [chatId, messages, onAddMessage])

    const handleAddMessage = (message) => {
        if (chatId){
            onAddMessage(chatId, message)
        }
    }

    if(chatId && !messages[chatId]){
        return <Navigate to='/chats' replace></Navigate>
    }

    return(
        <>
            <div className="Body">
            <h1>Welcome to chat</h1>
            <main className="Main">
            <Message  title='MESSAGE' addMessage={handleAddMessage}/>            
            </main>
            <div className="Chats">
            <Grid container spacing={4}>

            <Grid item xs={6}>
            <MessageList messages={chatId ? messages[chatId] : []} />
            </Grid>
            </Grid>
            </div>
            </div>

        </>    
        )
}
