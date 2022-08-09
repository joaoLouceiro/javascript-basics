//import React, { React.Component } from 'react'

// This class is a decorator
class CustomBorder extends React.Component {
    render() {
        return (
            <div className = {'bt bt-' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}

// This class is a decorator
class CustomBackground extends React.Component {
    render() {
        return (
            <div className = {'bg-' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}

// This class is a decorator
class CustomColor extends React.Component {
    render() {
        return (
            <div className = {'cc-' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}

// This class is a decorator
class CustomFont extends React.Component {
    render() {
        return (
            <div className = {'cf-' + this.props.size}>
                {this.props.children}
            </div>
        );
    }
}

class PlainText extends React.Component {
    render() {
        return (
            <div>
               {this.props.message} 
            </div>
        )
    }
}


//ReactDOM.render(<PlainText message="Decorators"/>, document.getElementById('root'));

ReactDOM.render(
    <CustomFont size="large">
        <CustomBackground color="green">
            <CustomColor color="red">
                <CustomBorder color="red">
                    <PlainText message="Decorators"/>
                </CustomBorder>
            </CustomColor>
        </CustomBackground>
    </CustomFont>
    , document.getElementById('root'));