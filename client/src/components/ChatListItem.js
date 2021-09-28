import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
  root: () => ({
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, .05)'
  }),
  avatar: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  primary: ({ bold }) => ({
    ...(bold && { fontWeight: 'bold' }),
  }),
  secondary: () => ({
    fontSize: 13,
    color: '#999',
  }),
  float: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: '#09f',
    borderRadius: '50%',
  }
}));

const ChatListItem = ({
  unread,
  avatar,
  name,
  email,
  concise,
  onItemClick,
}) => {
  const styles = useStyles();
  return (
    <Box px={1}>
      <ListItem className={cx(styles.root, styles.rootHover)} button onClick={(event) => onItemClick(event, email)}>
        <Avatar src={avatar} className={styles.avatar} />
        {!concise && (
          <>
            <ListItemText
              primary={name}
              secondary={email}
              primaryTypographyProps={{ noWrap: true }}
              secondaryTypographyProps={{ noWrap: true }}
              classes={{ primary: styles.primary, secondary: styles.secondary }}
            />
            <Box position={'relative'}>
              {unread && <div className={styles.dot} />}
            </Box>
          </>
        )}
      </ListItem>
    </Box>
  );
};

export default ChatListItem;
