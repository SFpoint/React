import { useState } from "react"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"

export function ChatList({onAddChat, chats}) {
   
    const [ value, setValue ] = useState ("")
    const [ , setChats] = useState(chats)

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddChat({
            id: nanoid(),
            name: value
        })
        setValue("")
    }
    const removeBtn = (id) => {
        setChats(chats.pop((chat) => chat.id !== id));
      };
    
    return (
        <>
        <ul>
            {chats.map((chat)=> {
                return(
                <li key={chat.id}>
                    <Link to={`/chats/${chat.name}`}>
                    {chat.name}
                    </Link>
                    <button onClick={removeBtn}>Remove</button>
                </li>)
            })}
        </ul>
        <h1>ChatList</h1>
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             onChange={handleChange}
              value={value} />
            <button >Create Chat</button>
        </form>
        </>
    )
}