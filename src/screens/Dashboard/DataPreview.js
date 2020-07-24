import React, { Component } from 'react';


export class DataPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className='row'>
                <div className='col'>
                    <div class="card ">
                        <div class="card-body row dash-view">
                            <div className='col-9'>
                                <h6>AVALIAÇÕES HOJE</h6>
                                <h3>29</h3>
                                <span className='percentage positve'><img src='/img/ic-arrow-drop-down.svg' />36%</span>
                                <span>desde ontem</span>
                            </div>
                            <div className='col icon'><img src='/img/icons-menu/ic-directions-car-active.svg' /></div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="card">
                        <div class="card-body row dash-view">
                            <div className='col-9'>
                                <h6>CARROS PUBLICADOS</h6>
                                <h3>397</h3>
                                <span className='percentage positve'><img src='/img/ic-arrow-drop-down.svg' />4%</span>
                                <span>este mês</span>
                            </div>
                            <div className='col icon'><img src='/img/ic-important-devices.svg' /></div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div class="card">
                        <div class="card-body row dash-view">
                            <div className='col-9'>
                                <h6>TICKET MÉDIO DO ESTOQUE</h6>
                                <h3>R$ 42.567</h3>
                                <span className='percentage negative'><img src='/img/ic-arrow-drop-down-negative.svg' />6%</span>
                                <span>este mês</span>
                            </div>
                            <div className='col icon'><img src='/img/ic-attach-money.svg' /></div>
                        </div>
                    </div>
                </div>
            </div>


        )

    }

};

export default DataPreview;


