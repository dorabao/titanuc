import React from 'react';
import ChatListItem from './ChatListItem';

const ChatList = ({ users, concise, unread, onUserSelected }) => {
  return users.map(item => (
    <ChatListItem key={item.name} {...item} unread={unread == null ? false : unread.email === item.email} concise={concise} onItemClick={onUserSelected}/>
  ));
};

export default ChatList;
