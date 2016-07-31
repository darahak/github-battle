const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello ReactJS Program</div>
        )
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);
