import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { Container, Row, Col } from "reactstrap";
import Button from '@material-ui/core/Button';
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const Profile = ({open, onClose}) => {
  const { user, logout } = useAuth0();
  
  const handleClose = () => {
    onClose();
  };

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div>
      <Dialog aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Settings
        </DialogTitle>
        <DialogContent dividers>
          <Container className="mb-5" p={2}>
            <Row className="align-items-center profile-header mb-5 text-center text-md-left">
              <Col md={3}>
                <img
                  src={user.picture}
                  alt="Profile"
                  className="rounded-circle img-fluid profile-picture mb-2 mb-md-0"
                />
              </Col>
              <Col md>
                <Typography >{user.name}</Typography >
                <Typography>{user.email}</Typography>
              </Col>
            </Row>
            <Row>
              <Button
                variant="contained"
                color="secondary"
                onClick={logoutWithRedirect}>
                Log Out
              </Button>
            </Row>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
