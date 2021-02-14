import React from 'react';

const ArtworkDetails = () => {
    return (
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12 col-lg-6'>
                        <img />
                    </div>
                    <div className='col-md-12 col-lg-6'>
                        <div>
                            <h5>Title</h5>
                            <p>de <span>Artist</span></p>
                            <p>Description</p>
                            <p><small className='text-muted'>Materials: |
                            Size: </small></p>
                            <p>Price: </p>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <button className='btn btn-dark'>Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArtworkDetails;
