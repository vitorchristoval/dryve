import React, { Component } from 'react';

export class DataClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    change() {
        this.setState({ show: true })
    }
    componentWillMount() {

    }

    render() {
        return (

            <div className='row col-7'>
                <div className="form-group col-6">
                    <input type="text" className="form-control" placeholder="Nome" />
                </div>
                <div className="form-group col-6">
                    <input type="text" className="form-control" placeholder="Sobrenome" />
                </div>
                <div className="form-group col-12">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group col-6">
                    <input type="text" className="form-control" placeholder="Telefone" />
                </div>
                <div className="form-group col-6 mt-3">
                    <a href='#' className='pt-5' data-testid='addPhone' onClick={() => this.change()}> + adicionar outro</a>
                </div>
                <div className={this.state.show ? 'form-group col-6 phone-2' : 'd-none'} data-testid='result'>
                    <input type="text" className="form-control" placeholder="Telefone 2" />
                </div><br/>
                {/* ADICIOANR OUTRO TELEFONE MAP*/}
                <div className="form-group col-6">
                    <input type="text" className="form-control" placeholder="CEP" />
                </div>
                <div className="form-group col-12">
                    <input type="text" className="form-control disabled" placeholder="Endereço" />
                </div>
                <div className="form-group col-6">
                    <input type="text" className="form-control disabled" placeholder="Número" />
                </div>
                <div className="form-group col-6">
                    <input type="text" className="form-control disabled" placeholder="Complemento" />
                </div>
                <div className="form-group col-12">
                    <input type="text" className="form-control disabled" placeholder="Bairro" />
                </div>
                <div className="form-group col-6">
                    <input type="text" className="form-control disabled" placeholder="Cidade" />
                </div>
                <div className="form-group col-6">
                    <input type="text" className="form-control disabled" placeholder="Estado" />
                </div>

            </div>

        )

    }

};

export default DataClient;


