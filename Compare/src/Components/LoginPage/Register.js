import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class Register extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                /*check fields*/
                //disabled={false}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Register" className={"LoginPageButton"}
                              onClick={this.handleOpen} />
                <Dialog
                    title="Register"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    Only actions can close this dialog.
                </Dialog>
            </div>
        );
    }
}