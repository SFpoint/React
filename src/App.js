import {useState}  from "react"
import { Message } from "./components/Message"
import './Styles/App.css'


function App() {
    const [messageValue, setMessageValue] = useState ('Enter your message')


    const handleChange = (event) => {
        setMessageValue(event.target.value)
    }

    return(
        <>
        <div className="Body">
            <header className="App-header">
            <h1>First Lesson</h1>
            </header>
            <main className="Main">
            <textarea className="Input" type="text" placeholder="Just write something here" onChange = {handleChange }/>
            <Message  title='MESSAGE' value={messageValue}/>
            </main>
            </div>

        </>    
        )
}

export default App