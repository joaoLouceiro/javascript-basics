class CurrentTimeComponent extends React.Component {

    render() {
        return (
          <div className="box">
                Current time: {new Date().toLocaleTimeString()}
          </div>
        );
    }

    componentDidMount() {
        console.log("CurrentTimeComponent mounted event fired");

        setTimeout(function () {
            window.dispatchEvent(new CustomEvent("mounted", 
                                            {detail: "CurrentTimeComponent"}));
        }, 5000);
    }
}