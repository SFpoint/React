import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react'
import React from 'react';


export function Chats () {

    const [ChatList] = useState([
        {
            name: 'MainChat',
            id: 1,
        },
        {
            name: 'Work',
            id: 2,
        },
        {
            name: 'Family',
            id: 3,
        }
    ])

    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {ChatList.map((item) => (
          <ListItem
            key={item.id}
          >
            {item.name}
          </ListItem>
        ))}
      </List>
    )
}

export default Chats