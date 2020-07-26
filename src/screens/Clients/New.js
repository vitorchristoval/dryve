import React, { Component } from 'react';
import DataClient from './DataClient'

export class New extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {

    }

    render() {
        return (

            <div className='container-fluid mt-4'>
                <h4>Adicionar cliente</h4>
                <div className='row mt-4'>
                    <div className='col-12 new-client'>
                        <div className='card'>
                            <div className='card-header '>
                                <div className='row text-center'>
                                    <div className='col active'>
                                        <h5>Dados do cliente</h5>
                                    </div>
                                    <div className='col'>
                                        <h5>Dados do veículo</h5>
                                    </div>
                                    <div className='col'>
                                        <h5>Itenção de compra</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body mt-4 mb-4'>
                                <form>
                                    <DataClient />
                                </form>
                            </div>
                            <div className='card-footer'>
                                <div className='row col-4'>
                                    <div className='col'>
                                        <button className='btn btn-secondary' onClick={() => window.location.href = '/clients/new'}>
                                            Salvar
                        </button>
                                    </div>
                                    <div className='col'>
                                       <a href='/clients'>Cancelar</a>
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

export default New;


