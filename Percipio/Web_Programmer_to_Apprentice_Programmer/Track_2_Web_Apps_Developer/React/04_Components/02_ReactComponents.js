class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h2 className = "class-highlight">Hello World of components!</h2>
            </div>
        );
    }
};

class MyFruitList extends React.Component {
    render() {
        const orange_str = "Orange";
        const apple_str = "Apple";
        const banana_str = "Banana";

        const img_src = "images/pexels-arkhod-9556703.jpg";
        const img_el = <img src = {img_src} />

        var items = ["Mango", "Strawberry", "Blueberry", "Peach"];

        var item = items[Math.floor(Math.random() * items.length)];
        
        const fruit_list = (
            <div>
                <div key="el-key" className="my-fruit">
                    Some of my favorite fruits
                </div>
                <ul>
                    <li key = "a-key">{orange_str}</li>
                    <li key = "b-key">{apple_str}</li>
                    <li key = "c-key">{banana_str}</li>
                    <li key = "d-key" className="my-fruit">{item}</li>
                </ul>
                {img_el}
            </div>
        );

        return fruit_list;
    }
}

ReactDOM.render(<MyFirstComponent/>, document.getElementById("my-first-component"));

function on_tick() {
    ReactDOM.render(<MyFruitList/>, document.getElementById("my-fruits-list"));
}

setInterval(on_tick, 2000);