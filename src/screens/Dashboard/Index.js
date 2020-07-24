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

            <div className='container p-5'>
                <div className='row'>
                    <div className='col'>
                        <div class="card">
                            <div class="card-body row">
                                <div className='col-9'>
                                    <h6>AVALIAÇÕES HOJE</h6>
                                    <h3>29</h3>
                                    <span>36% desde ontem</span>
                                </div>
                                <div className='col'><img src='/img/icons-menu/ic-directions-car-active.svg' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div class="card-body">
                                This is some text within a card body.
  </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div class="card-body">
                                This is some text within a card body.
  </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

};

export default Index;


