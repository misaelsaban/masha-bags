import React from "react";

class Home extends React.Component{
    render() {
        return (
                <div className="jumbotron">
                    <h1 className="display-4">{this.props.greeting}</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida magna orci, et placerat eros dignissim in. Donec dapibus commodo rutrum. Suspendisse volutpat velit turpis, eget scelerisque enim dictum eget. Aenean at ipsum purus. Nulla feugiat laoreet lobortis. </p>
                    <hr className="my-4"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida magna orci, et placerat eros dignissim in.</p>
                </div>
        )}
  };

export default Home;


