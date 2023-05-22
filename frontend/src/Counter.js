import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        numProductsToAdd: 5,
        items: []
    };

    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
        this.incrementCart = this.incrementCart.bind(this);
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState({ items: [...this.state.items, "item" + this.state.count] });
    };

    incrementCart(numProduct){
        this.setState({
        count: this.state.count + numProduct });
        }
        

    renderTags() {
        if (this.state.items.length === 0)
            return <p>There are no items!</p>;
        return <ul>
            {this.state.items.map(item => (
                <li key={item}>{item}</li>))}
        </ul>

    }

    render() {
        let classes = "btn btn-";
        classes += this.state.count === 0 ? "warning" : "primary";

        return (
            <div>
                <span className={classes} style={this.styles}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary" onClick={this.handleIncrement}>Increment</button>
                {this.renderTags()}
                <span><br /><br /></span>
                <button onClick={() => this.incrementCart(this.state.numProductsToAdd)}
                    className="btn btn-secondary">Add 5 more items to cart</button>
            </div>
        );
    }

    formatCount() {
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
}

export default Counter;
