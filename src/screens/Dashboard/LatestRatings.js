import React, { Component } from 'react';
import API from '../../API'

export class LatestRatings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avaliations: [],
            loading: true,
            data: new Date()

        }
    }
    componentDidMount() {
        API.get('5eb553df31000060006994a8')
            .then(async response => {
                // If request is good...
                console.log(response)
                await this.setState({ avaliations: response.data, loading: false })


            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className='col-8'>
                <div className="card ">
                    <div className='latest-ratings'>
                        <div className="card-body p-0">
                            {this.state.loading ?
                                <div className='loading'>
                                    <i className="fas fa-circle-notch fa-spin"></i>
                                </div>
                                :
                                <>
                                    <div className='row p-3'>

                                        <div className='col-10'>
                                            <h3>Últimas avaliações</h3>
                                        </div>
                                        <div className='col'><div className="dropdown">
                                            <a className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Hoje
  </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Últimos 7 dias</a>
                                                <a className="dropdown-item" href="#">Últimos 30 dias</a>
                                                <a className="dropdown-item" href="#">Últimos 60 dias</a>
                                            </div>
                                        </div></div>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Dados do veículo</th>
                                                <th scope="col">Valor</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {this.state.avaliations.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className='row'>
                                                            <div className='col-3 text-center'>
                                                                <img src={item.image} />
                                                            </div>
                                                            <div className='col'>
                                                                <h4>{item.brand_name} {item.model_name}</h4>
                                                                <h5>{item.version_name}</h5>
                                                                <h5>{item.model_year} - {item.fuel_type}</h5>
                                                                <h5>{item.transmission_type} - {item.mileage} KM</h5>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>
                                                        <div>
                                                            <h5>ANÚNCIO</h5>
                                                            <h4>R$ {item.ad_selling_price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h4>
                                                            <h5>MÍNIMO ACEITO</h5>
                                                            <h4 className='minValue'>R$ {item.ad_selling_price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h4>
                                                        </div>
                                                    </td>
                                                    <td className='text-center pt-4'><span className="badge badge-pill badge-info">Aguardando precificação</span>
                                                        <p className='mt-3'>{this.state.data.toLocaleDateString()} às {this.state.data.toLocaleTimeString()}</p></td>
                                                </tr>
                                            ))}

                                        </tbody>

                                    </table>
                                </>
                            }
                        </div>

                    </div>
                    <div className='text-right p-2 mr-4'>
                        <a href='#'><b>Ver tudo </b><img src='/img/ic-arrow-drop-right.svg' /></a>
                    </div>
                </div>
            </div>

        )

    }

};

export default LatestRatings;


