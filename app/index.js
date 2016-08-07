const USER_DATA = {
    name: 'Tyler McGinnis',
    username: 'tylermcginnis',
    image: 'https://avatars0.githubusercontent.com/u/2933439?v=3&s=460'
};

const React = require('react');
const ReactDOM = require('react-dom');

class ProfilePic extends React.Component {
    render() {
        return <img src={this.props.imageUrl} style={{width: 100, height: 100}} />
    }
}

class ProfileLink extends React.Component {
    render() {
        return (
            <div>
                <a href={'https://www.github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        );
    }
}

class ProfileName extends React.Component {
    render() {
        return (
            <div>{this.props.name}</div>
        );
    }
}

class Avatar extends React.Component {
    render() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        );
    }
}

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);
