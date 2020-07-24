import React, { Component } from 'react';
import List from '../../components/List'

export class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            columsList: [
                {
                    name: 'Nome',
                    selector: 'name',
                    sortable: false,
                    grow: 3
                },

                {
                    sortable: false,
                    name: 'Status',
                    selector: 'status',
                    cell: row =>
                        row.status == 'client' ? <span className="badge badge-primary stadium text-center">Cliente</span> :
                            <span className="badge badge-secondary stadium">Lead</span>

                },
                {
                    sortable: false,
                    name: 'Telefone',
                    selector: 'telefone',
                    grow: 2

                },
                {
                    sortable: false,
                    name: 'E-MAIL',
                    selector: 'email',
                    grow: 2
                },
                {
                    name: '',
                    sortable: false,
                    selector: 'id',
                    cell: row => <img src='/img/ic-more-vert.svg' />

                },
            ],
            data: [
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'client',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '1'
                },
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'lead',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '2'
                },
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'lead',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '3'
                },
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'client',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '4'
                },
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'client',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '5'
                },
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'client',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '6'
                },
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'client',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '7'
                },
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'client',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '8'
                },
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'client',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '9'
                }
                ,
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'client',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '10'
                }
                ,
                {
                    name: 'Paulo Henrique Mattos',
                    status: 'client',
                    telefone: '(16) 99653-8899',
                    email: 'ph.mattos@gmail.com',
                    id: '11'
                }
            ]
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

            <div className='container-fluid mt-4'>
                <div className='row'>
                    <div className='col-10'>

                        <div class="form-group row ml-1">
                            <button className='btn btn-terciary mr-3'><img src='/img/ic-filter-list.png' />Filtrar</button>
                            <input type="text" class="form-control col-5" placeholder="Buscar por nome..." />
                        </div>
                    </div>
                    <div className='col ml-3'>
                        <button className='btn btn-secondary'><span class="material-icons">
add
</span>Adicionar</button>
                    </div>
                </div>
                <div class="card mt-3">
                    <List data={this.state.data} colums={this.state.columsList} />
                </div>
            </div>

        )

    }

};

export default Index;


