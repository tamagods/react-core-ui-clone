import React, { Fragment } from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

function Colors() {

    const breadCrumbItems = () => {
        return [{ name: 'Colors' }]
    };

    return (
        <Fragment>
            <Breadcrumb items={breadCrumbItems} />
            <div className="container-fluid"></div>
        </Fragment>
    )
}

export default Colors;
