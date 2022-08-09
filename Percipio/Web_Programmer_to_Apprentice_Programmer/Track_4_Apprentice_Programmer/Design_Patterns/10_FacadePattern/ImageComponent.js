class ImageComponent extends React.Component {

    render() {
        return (
          <div>
                <img src={this.props.image} />
          </div>
        );
    }

    componentDidMount() {
        console.log("ImageComponent completed event fired");

        setTimeout(function () {
            document.dispatchEvent(new CustomEvent("completed", 
                                                {"detail": "ImageComponent"}));
        }, 5000);
    }
}
