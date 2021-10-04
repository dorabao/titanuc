import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Send from '@material-ui/icons/Send';

const useStyles = makeStyles(() => ({
  icon: {
    color: 'rgb(0, 153, 255)',
    width: 44,
    height: 44,
    padding: 6,
  },
  iconBtn: {
    padding: 8,
    color: '#fe7070',
  },
  input: {
    flex: 'auto',
    borderRadius: 40,
    paddingLeft: 16,
    backgroundColor: 'rgba(0,0,0,0.04)',
    margin: '0 8px',
    height: 36,
    fontSize: 13,
  },
}));

const ChatBar = ({connected, onSend}) => {
  const styles = useStyles();
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value)
  }
  const handleOnSend = (event) => {
    onSend(event, message)
    setMessage("")
  }

  return (
    <>
      <InputBase
        className={styles.input}
        placeholder={'Type a message...'}
        onChange={handleChange}
        value={message}
      />
      <IconButton className={styles.iconBtn} disabled={!connected} onClick={handleOnSend}>
        <Send />
      </IconButton>
    </>
  );
};

export default ChatBar;
