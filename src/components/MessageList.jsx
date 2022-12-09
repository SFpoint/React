import PropTypes from 'prop-types'

export function MessageList ({messages}) {
  return (
    <>
    <div>
      <h1>MessageList</h1>
          <ul>
            {messages.map((message, index) => (
              <li key={index}>
                {message.author}: {message.text}</li>
            ))}
          </ul>
    </div>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}