import React, {Component} from "react";

class CurrencyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log("handleChange " + this.state.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        const {value} = this.state;
        console.log("handleSubmit " + this.state.value);
        console.log(value);
        this.props.onFormSubmit(value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Currency (e.g. PLN, EUR) :
                    <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        );
    }
}

export default CurrencyForm;