import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../constants'
import { Button } from './button'

export function Message({addMessage}) {

const [text, setText] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    //todo...
    addMessage({
      author: AUTHOR.user,
      text
    })

    setText('')
  }
    return(
        <>
        <div className="Message">
        <form onSubmit={handleSubmit}>
        <textarea className="Input" value={text} type="text" placeholder="Just write something here" onChange = {(event) => setText(event.target.value)}/>
        <Button type="submit">Add message</Button>
        </form>
        </div>
        </>
    )
}

Message.propTypes = {
    addMessage: PropTypes.func
  }