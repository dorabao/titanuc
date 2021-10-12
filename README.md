TitanUC is a web-based application which allows users to have secure peer-to-peer
communication. This cross-platform solution makes audio/video/text interaction available
between users on all web browsers.

The system is using the client-server architecture. 

React and Material UI are used for building the front end. Auth0 react module is used for user authentication. 
This module is a react hook and connects its authentication and authorization services that implement the OAuth 2.0 protocol. 
In addition, WebRTC API is utilized to manage audio/video input devices and capture audio/video streams on all modern browsers.

The Node Express back end serves the React production bundle. On top of Express, a web socket server keeps track of current online users and exchanges peer signals when peer communication was initiated.
The simple-peer.js Node module was used for peer to peer communication. This module is based on the Interactive Connectivity Establishment (ICE) protocol for NAT traversal, which is part of WebRTC specification. 
The application is deployed on Google Cloud, and links a custom domain https://www.titanuc.com on GoDaddy.
