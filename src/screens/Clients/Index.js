import React, { Component } from 'react';


export class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        }
    }

    expandMenu = event => {
        this.setState({ menu: true })

    }
    takeMenu = event => {
        this.setState({ menu: false })
    }
    componentWillMount() {

    }

    render() {
        return (

            <div>
                <h1>Clients</h1>
            </div>

        )

    }

};

export default Index;


