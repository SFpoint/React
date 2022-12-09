import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../constants'
import IButton from '@mui/material/Button'
import { TextField } from '@mui/material'

export function Message({addMessage}) {

const [text, setText] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
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
        <TextField
          label='Enter Message'
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          variant="standard"
          value={text} 
          type="text"
          onChange = {
            (event) => 
            setText(event.target.value)
          }
        />
        <IButton 
        variant='contained'
         color='secondary'
          type="submit"
          size='small'
          >Add message</IButton>
        </form>
        </div>
        </>
    )
}

Message.propTypes = {
    addMessage: PropTypes.func
  }