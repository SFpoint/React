import PropTypes from 'prop-types'

export function MessageList ({messages}) {
<<<<<<< HEAD
=======
  
>>>>>>> lesson4
  return (
    <>
    <div>
      <h1>MessageList</h1>
          <ul>
<<<<<<< HEAD
            {messages.map((message, index) => (
              <li key={index}>
                {message.author}: {message.text}</li>
=======
            {messages.map((item, index) => (
              <li key={index}>{item.author}: {item.text}</li>
>>>>>>> lesson4
            ))}
          </ul>
    </div>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}