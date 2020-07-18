import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import "./style/style.scss";

//REACT COMPONENT USING CLASS
class App extends React.Component {
    // WE REPLACE CONSTRACTOR WITH BELOW STATE INITIALISATION
    state = { lat: null, errorMessage: "" };

    // COMPONENT LIFECYCLE METHODS (this will called after first rendering!!)
    componentDidMount() {
        console.log("THE COMPONENT DID MOUNTED!!");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (error) => {
                this.setState({ errorMessage: error.message });
            }
        );
    }
    componentDidUpdate() {
        console.log("THIS COMPONENT IS UPDATED");
    }
    componentWillUnmount() {
        console.log("THIS COMPONENT WILL BE UNMOUNTED!!");
    }
    // FUNCTION TO DEAL WITH CONDITIONS BEFORE RENDERING
    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            );
        }
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error:{this.state.errorMessage}</div>;
        }
        return <Loader message="Please accept the request" />;
    }
    // HELPER FUNCTION FOR RENDERING (must be there in class)
    render() {
        return <div>{this.renderContent()}</div>;
    }
}
// POINTING THE LOCATION TO PLACE AT 'DOM'
ReactDOM.render(<App />, document.querySelector("#root"));
