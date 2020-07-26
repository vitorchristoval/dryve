import React, { Component } from 'react';
import DataPreview from './DataPreview';
import LatestRatings from './LatestRatings';
import PurchaseIntentions from './PurchaseIntentions';
import Prices from './Prices'
export class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container-fluid  mt-4'>
                <DataPreview />
                <div className='row mt-4'>
                    <LatestRatings />
                    <div className='col-4'>
                        <PurchaseIntentions />
                        <Prices/>
                    </div>
                </div>
            </div>
        )

    }

};

export default Index;


