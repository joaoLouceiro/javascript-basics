class TextComponent extends React.Component {

    render() {
        return (
          <div className="randomText">
               This is some random text that you see
          </div>
        );
    }

    componentDidMount() {
        console.log("TextComponent completed event fired");

        setTimeout(function () {
            window.dispatchEvent(new CustomEvent("completed", 
                                                {"detail": "TextComponent"}));
        }, 5000);
    }
}