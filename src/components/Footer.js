import React, { Component } from 'react';
export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (

            <div className='footer mt-5'>

                <span className='mt-3'>2020 © Dryve Tecnologia Ltda.</span>
                <div className='float-right icons-right'>
                    Versão 1.0.1
                    </div>
            </div>

        )

    }

};

export default Footer;


