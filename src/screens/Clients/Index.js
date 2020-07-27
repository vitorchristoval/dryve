import React, { Component } from 'react';
import List from '../../components/List'

export class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                            <span className="badge badge-lead stadium">Lead</span>

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
                    name: 'Juliana Martins Silva',
                    status: 'client',
                    telefone: '(16) 99819-3112',
                    email: 'jumartins.silva@hotmail.com',
                    id: '2'
                },
                {
                    name: 'Luís Rocha',
                    status: 'client',
                    telefone: '(16) 99776-9290',
                    email: 'luisrocha@yahoo.com.br',
                    id: '3'
                },
                {
                    name: 'Adilson Vieira Antunes',
                    status: 'lead',
                    telefone: '(16) 99664-0187',
                    email: 'a.vieira@uol.com.br',
                    id: '4'
                },
                {
                    name: 'Felipe Alves',
                    status: 'lead',
                    telefone: '(16) 99660-7765',
                    email: 'felipe_alves@hotmail.com',
                    id: '5'
                },
                {
                    name: 'Roberta Vianna',
                    status: 'client',
                    telefone: '(16) 99765-2233',
                    email: 'robertavianna@gmail.com',
                    id: '6'
                },
                {
                    name: 'Silvia Pereira',
                    status: 'client',
                    telefone: '(16) 99642-8721',
                    email: 'silvia.pereira@outlook.com',
                    id: '7'
                },
                {
                    name: 'Eduardo Oliveira',
                    status: 'client',
                    telefone: '(16) 99872-3254',
                    email: 'eduoliveira@hotmail.com',
                    id: '8'
                },
                {
                    name: 'Maria Antônia Silva Santos',
                    status: 'client',
                    telefone: '(16) 99443-9986',
                    email: 'maria.ss@uol.com.br',
                    id: '9'
                }
                ,
                {
                    name: 'Rodrigo Ribeiro Costa',
                    status: 'client',
                    telefone: '(16) 99876-0012',
                    email: 'rrc@gmail.com',
                    id: '10'
                }
                ,
                {
                    name: 'Vitor Christoval',
                    status: 'client',
                    telefone: '(41) 99151-1224',
                    email: 'vitor.christovalgmail.com',
                    id: '11'
                }
            ]
        }
    }


    render() {
        return (

            <div className='container-fluid mt-4'>
                <div className='row'>
                    <div className='col-10'>

                        <div className="form-group row ml-1">
                            <button className='btn btn-terciary mr-3'><span className="material-icons">
                                filter_list
</span>Filtrar</button>
                            <input type="text" className="form-control col-5" placeholder="Buscar por nome..." />
                            <span className="material-icons input-icon-right">
search
</span>
                        </div>
                    </div>
                    <div className='col ml-3'>
                        <button className='btn btn-secondary' onClick={() => window.location.href = '/clients/new'}>
                            <span className="material-icons">add</span>Adicionar
                        </button>
                    </div>
                </div>
                <div className="card mt-3">
                    <List data={this.state.data} colums={this.state.columsList} />
                </div>
            </div>

        )

    }

};

export default Index;


