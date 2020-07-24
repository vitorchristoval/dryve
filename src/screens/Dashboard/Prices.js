import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export class Prices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graph: [
                {
                    title: 'Na média',
                    value: 60,
                    color: '#1070ca',

                },
                {
                    title: 'Na média',
                    value: 25,
                    color: '#ec4c47',

                },
                {
                    title: 'Abaixo da média',
                    value: 15,
                    color: '#f7d154',

                },
            ]

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div class="card mt-3 price">
                <div class="card-body p-0">
                    <div className='row p-3'>
                        <div className='col-12'>
                            <h3>Preços - Dryve x KBB</h3>
                            <div className='chart'>
                                <div className='row'>
                                    <div className='col-5'>
                                        <PieChart
                                            labelPosition={50}
                                            startAngle={280}
                                            lineWidth={20}
                                            data={this.state.graph}
                                        />
                                    </div>
                                    <div className='col'>
                                        <ul>
                                            {this.state.graph.map((item, index) => (
                                                <li>
                                                    <p><div className='dot' style={{backgroundColor: item.color}}></div>{item.title} {item.value}%</p></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )

    }

};

export default Prices;


