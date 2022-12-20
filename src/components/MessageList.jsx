import PropTypes from 'prop-types'

export function MessageList ({messages}) {
  
  return (
    <>
    <div>
      <h1>MessageList</h1>
          <ul>
            {messages.map((item, index) => (
              <li key={index}>{item.author}: {item.text}</li>
            ))}
          </ul>
    </div>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}