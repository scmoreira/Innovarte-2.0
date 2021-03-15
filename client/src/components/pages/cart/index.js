import React from 'react';
import { Link } from 'react-router-dom';

import Checkout from './Checkout';
import ItemCard from './ItemCard';

import EuroOutlinedIcon from '@material-ui/icons/EuroOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';

const Cart = items => {
    return (
        <div>
           <main id='cart'>
                <section className='container-fluid'>
                    <h1><SentimentVerySatisfiedOutlinedIcon /> Welcome</h1>
                    {/* {this.state.cartItemsInfo.length === 0 && <h3>Tu cesta está vacía! <Link to='/artworks'> Comprar</Link></h3>} */}
                </section>

                <section className='row cart-body'> 
                    <div className='col-md-6'>
                        <Checkout />
                    </div>
                    <div className='col-md-6 items'>
                        <ul >
                            {/* {items.map(item => 
                                <ItemCard key={item._id} item={{...item}} handleDelete={this.handleDelete} />
                            )} */}
                            <div className='payconfirm container-fluid'>
                                    <div className='row'>
                                        <div className='col-9 col-lg-8'>
                                            <h5>Total:  <EuroOutlinedIcon /></h5>
                                        </div>
                                        <div className='col-3 col-lg-4'>
                                            <button className='btn btn-dark'>Confirm</button>
                                        </div>
                                    </div>
                            </div>
                        </ul>
                    </div>
                 </section>
             </main>
        </div>
    );
}

export default Cart;
