import React from 'react';
import { Button } from 'semantic-ui-react';
import { DOCUMENT_URL_UPDATE } from '../../../../../../../prj_pcsc/client_app/app/containers/App/constants';


const CreateProductView = (props) => {
    const {viewdata, buyProduct}  = props ;
    return(
        <div className="two-col-grid mb-5"> 
             <div className="left">
                {viewdata.image_name &&
                  <div className="product-image">
                  <img src={`${DOCUMENT_URL_UPDATE}${viewdata.image_name.document_name}`} alt="product image here"
                   />
                </div>}
              </div>
          <div className="right product-detail">
              <p className="product-name"><span>Title :</span> {viewdata.title}</p>
              
              <p className="product-industry"><span>Industry :</span> {viewdata.industry}</p>
              <p className="product-price"><span>Price : </span>{viewdata.price}</p>
              <p className="product-country"><span>Country :</span> {viewdata.country}</p>
              <p className="product-desc"> <span>Description :</span>{viewdata.description}</p>
              <Button className="button buy-btn" onClick={buyProduct}>Buy this Product</Button>
          </div>
          </div>
    )
}

export default CreateProductView;
