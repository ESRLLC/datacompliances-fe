import React from 'react';
import { DOCUMENT_URL_UPDATE } from '../../../../../../../prj_pcsc/client_app/app/containers/App/constants';


const CreateProductView = (props) => {
    const {viewdata}  = props ;
    return(
        <div> 
            <h3>Title : {viewdata.title}</h3>
            <h3>Description : {viewdata.description}</h3>
            <h3>Price : {viewdata.price}</h3>
            <h3>Country : {viewdata.country}</h3>
            
        </div>
    )
}

export default CreateProductView;
