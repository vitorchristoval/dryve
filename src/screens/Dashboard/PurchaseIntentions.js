import React, { Component } from 'react';

export class PurchaseIntentions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    model: 'HB20',
                    img: '/img/brands/hyundai.png',
                    amount: '197',

                },
                {
                    model: 'Onix',
                    img: '/img/brands/chev.png',
                    amount: '183',

                },
                {
                    model: 'Renegade',
                    img: '/img/brands/jeep.png',
                    amount: '125',

                },
                {
                    model: 'T-Cross',
                    img: '/img/brands/vw.png',
                    amount: '109',

                },
                {
                    model: 'Kicks',
                    img: '/img/brands/nissan.png',
                    amount: '86',

                },
            ]

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="card purchase">
                <div className="card-body p-0">
                    <div className='row p-3'>
                        <div className='col-12'>
                            <h3>Top intenções de compra</h3>
                            <ul>
                                {this.state.items.map((item, index) => (
                                    <li><img src={item.img} />{item.model} <span>{item.amount}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

};

export default PurchaseIntentions;


