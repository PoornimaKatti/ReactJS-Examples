import React from "react";


 class Float extends React.Component {
    state = {
        value: 10,
    };
 
    onValueChange = (event) => {
        this.setState({ value: event.target.value });
    };
 
    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                    margin: "auto",
                }}
            >
                <h1 style={{ color: "green" }}>
                    Reactjs
                </h1>
                <h3>
                    React Example for Input Box with floating
                    number
                </h3>
                <label> Floating Number: </label>
                <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="20"
                    value={this.state.value}
                    onChange={(event) =>
                        this.onValueChange(event)
                    }
                />
                <h4>
                    Current input value is
                    {this.state.value}
                </h4>
            </div>
        );
    }
}

export default Float