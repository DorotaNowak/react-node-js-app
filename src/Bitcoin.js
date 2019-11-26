import React from 'react';
import axios from 'axios';
import CurrencyForm from "./CurrencyForm";

export default class Bitcoin extends React.Component {
    state = {
        bitcoin: [],
        currency: 'EUR',
    }

    componentDidMount() {
        this.updateState(this.state.currency)
    }

    updateState(currency) {
        let url = "https://api.coindesk.com/v1/bpi/currentprice/" + currency + ".json";
        console.log(url);
        axios.get(url)
            .then(res => {
                try {
                    const bitcoin = res.data;
                    const curr = this.state.currency;
                    console.log("choosen currency: " + curr);
                    const rate = bitcoin['bpi'][curr]['rate'];
                    this.setState({bitcoin: rate});
                    console.log(this.state.bitcoin);
                } catch {
                    alert("Please, give correct currency!");
                }
            })
    }


    onFormSubmit = (currency) => {
        console.log(currency);
        this.updateState(currency);
        this.setState({currency: currency});
        console.log("onFormSumbit " + this.state.currency);
    }

    render() {
        return (
            <div>
                <h3> Here you can check the bitcoin rate!</h3>
                <CurrencyForm onFormSubmit={this.onFormSubmit}/>
                <h4>Bitcoin rate in {this.state.currency}: </h4>
                <div className="card">
                    <div className="card-body">
                        {this.state.bitcoin}
                    </div>
                </div>
            </div>
        );
    }
}