const React = require('react');
const Prompt = require('../components/Prompt');

class PromptContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            username: ''
        };

        this.handleUpdateUser = this.handleUpdateUser.bind(this);
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
    }

    handleUpdateUser(e) {
        this.setState({
            username: e.target.value
        });
    }

    handleSubmitUser(e) {
        e.preventDefault();
        const username = this.state.username;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            // go to /battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.props.username
                }
            });
        } else {
            // go to /playerTwo
            this.context.router.push('/playerTwo/' + this.state.username)
        }
    }

    render() {
        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username} />
        )
    }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = PromptContainer;
