import React, { Component } from 'react';


export class SideMenu extends Component {
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

            <div data-testid='menu'
                className={this.state.menu ? 'menu hover' : 'menu'}
                onMouseOver={this.expandMenu}
                onMouseLeave={this.takeMenu}>
                <div className='user '>
                    <div className='img-user'>
                        <img src='/img/user.png'/>
                    </div>
                    <div className='data-user'>
                        <span>Vitor Christoval</span><br/>
                        <a href='#'><img src='/img/icons-menu/ic-power-settings-new.svg'/>SAIR</a>
                    </div>
                </div>
                <div className='menu-list'>
                    <ul>
                        <li className='active'><img src='/img/icons-menu/ic-home-active.svg' />Início</li>
                        <li><img src='/img/icons-menu/ic-person.svg' />Clientes</li>
                        <li><img src='/img/icons-menu/ic-directions-car.svg' />Veículos</li>
                        <li><img src='/img/icons-menu/ic-vector-triangle.svg' />Triangulação</li>
                        <li><img src='/img/icons-menu/ic-account-balance-wallet.svg' />Financeiro</li>
                    </ul>
                </div>

            </div>

        )

    }

};

export default SideMenu;


