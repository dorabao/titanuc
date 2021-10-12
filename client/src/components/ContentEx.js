import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import sequence_diagram from '../assets/sequence-diagram.svg';

const styles = ({ breakpoints, transitions }) => ({
  root: {
    padding: 16,
    transition: transitions.create(),
    [breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 700,
      margin: 'auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: 960,
    },
  },
  imageContainer: {
    transition: transitions.create(),
    [breakpoints.up('xs')]: {
      margin: '-50, 0, 0, 0',
      maxWidth: 320,
    },
    [breakpoints.up('sm')]: {
      maxWidth: 700,
    },
    [breakpoints.up('md')]: {
      margin: '-110, 0, 0, 0',
      maxWidth: 960,
    },
  }
});

const ContentEx = ({ classes }) => (
  <div className={classes.root}>
    <Typography weight={'bold'} variant={'h4'} gutterBottom>
      What is TitanUC?
    </Typography>
    <Typography indent={'small'}>
      TitanUC is a web-based application which allows users to have secure peer-to-peer
      communication. This cross-platform solution makes audio/video/text interaction available
      between users on all existing computing platforms.
    </Typography>
    <br />
    <Typography weight={'bold'} variant={'h4'} gutterBottom>
      How it works?
    </Typography>
    <Typography>
    The system is using the client-server architecture. 
    </Typography>
    <Typography>
    React is used for building front-end web UI. The front-end uses the auth0 react module to handle sign up/log in/log out and retrieve user information, including name, email, avatar, etc. 
    This module is a react hook and connects its authentication and authorization services that implement the OAuth 2.0 protocol. 
    In addition, WebRTC API is utilized to manage audio/video input devices and capture audio/video streams on all modern browsers.
    </Typography>
    <Typography>
    The Node Express back-end serves the React production bundle. On top of Express, a web socket server keeps track of current online users and exchanges peer signals when peer communication was initiated.
    The simple-peer.js npm module was used for NAT traversal and peer to peer communication. This module is based on the Interactive Connectivity Establishment (ICE) protocol, which is part of WebRTC specification. 
    The application is deployed on Google Cloud, linking with the custom domain titanuc.com on GoDaddy.
    </Typography>
    <Typography>
    See the sequence diagram below to see how peers interact each other on titanuc:
    </Typography>
    <img className={classes.imageContainer} src={sequence_diagram} alt="Sequence_Diagram" />
  </div>
);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default withStyles(styles)(ContentEx);
