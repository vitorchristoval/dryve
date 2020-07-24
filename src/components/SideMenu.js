import React, { Component } from 'react';


export class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            menuItems: [
                {
                    label: 'Início',
                    img: '/img/icons-menu/ic-home.svg',
                    imgActive: '/img/icons-menu/ic-home-active.svg',
                    link:'/',
                    active: window.location.pathname == '/' ? true : false
                },
                {
                    label: 'Clientes',
                    img: '/img/icons-menu/ic-person.svg',
                    imgActive: '/img/icons-menu/ic-person-active.svg',
                    link:'/clients',
                    active: window.location.pathname == '/clients' ? true : false
                },
                {
                    label: 'Veículos',
                    img: '/img/icons-menu/ic-directions-car.svg',
                    imgActive: '/img/icons-menu/ic-directions-car-active.svg',
                    link:'/vehicles',
                    active: window.location.pathname == '/vehicles' ? true : false
                },
                {
                    label: 'Triangulação',
                    img: '/img/icons-menu/ic-vector-triangle.svg',
                    imgActive: '/img/icons-menu/ic-vector-triangle-active.svg',
                    link:'/triangulation',
                    active: window.location.pathname == '/triangulation' ? true : false
                },
                {
                    label: 'Financeiro',
                    img: '/img/icons-menu/ic-account-balance-wallet.svg',
                    imgActive: '/img/icons-menu/ic-account-balance-wallet.svg',
                    active: window.location.pathname == '/financial' ? true : false,
                    disabled: true
                },

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

            <div data-testid='menu'
                className={this.state.menu ? 'menu hover' : 'menu'}
                onMouseOver={this.expandMenu}
                onMouseLeave={this.takeMenu}>
                <div className='user '>
                    <div className='img-user'>
                        <img src='/img/user.png' />
                    </div>
                    <div className='data-user'>
                        <span>Vitor Christoval</span><br />
                        <a href='#'><img src='/img/icons-menu/ic-power-settings-new.svg' />SAIR</a>
                    </div>
                </div>
                <div className='menu-list'>
                    <ul>
                        {this.state.menuItems.map((item, index) => (
                            <li className={item.active ? 'active' : item.disabled ? 'disabled' : ''} onClick={() => !item.disabled ? window.location.href = item.link : null}><img src={item.active ? item.imgActive : item.img } />{item.label}</li>
                        ))}

                        {/* <li><img src='/img/icons-menu/ic-person.svg' />Clientes</li>
                        <li><img src='/img/icons-menu/ic-directions-car.svg' />Veículos</li>
                        <li><img src='/img/icons-menu/ic-vector-triangle.svg' />Triangulação</li>
                        <li><img src='/img/icons-menu/ic-account-balance-wallet.svg' />Financeiro</li> */}
                    </ul>
                </div>

            </div>

        )

    }

};

export default SideMenu;


