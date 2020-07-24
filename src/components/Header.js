import React, { Component } from 'react';


export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    componentWillMount() {

    }

    render() {
        return (

            <div className='header'>
                
                    <img src='/img/logo.svg' />
                    <span className='mt-3'>Backoffice</span>
                    <div className='float-right icons-right'>
                        <img src='/img/icons-header/ic-search.svg' />
                        <img src='/img/icons-header/ic-notifications.svg' />
                    </div>
               


            </div>

        )

    }

};

export default Header;


