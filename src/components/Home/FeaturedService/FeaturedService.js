import React from 'react';
import featuredImg from '../../../images/featuredservice.png';


const FeaturedService = () => {
    return (
        <section className='container featured-service pb-0 pb-md-5 my-5'>
            <div className='container mb-5'>
                <div className='row mb-5'>
                    <div className='col-md-5 md-4 m-md-0'>
                        <img className ='img-fluid' src={featuredImg} alt ='' />
                    </div>

                    <div className='col-md-7 align-self-center'>
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio voluptatibus expedita quae repellat aliquam minus, alias nostrum nisi esse accusamus officiis suscipit odio nesciunt aliquid, ex facere. Eum, aliquam consectetur adipisicing elit. Consectetur optio voluptatibus expedita quae repellat aliquam minus, alias nostrum nisi esse accusamus.</p>

                        <button className='btn btn-primary'>Learn More</button>
                    </div>

                </div>

            </div>
            
        </section>
    );
};

export default FeaturedService;