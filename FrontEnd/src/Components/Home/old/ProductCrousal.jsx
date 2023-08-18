import React from 'react'
import '../../css/ProductCrousal.css'

import DisplayCrousalWeb from './DisplayCrousalWeb'
import DisplayCrousalMobile from './DisplayCrousalMobile'
const ProductCrousal = (props) => {

    return (
        <div class="container-fluid">
            <div class="row">
                <div className="col col-md-10 sm-6 xs-6">
                    <h2  className="  px-3 w-100 text-center" >{props.title}</h2>
                </div>

                <div id="carouselExample" class="carousel slide d-none d-sm-none d-md-block mt-3" data-ride="carousel">
                    <div class="carousel-inner">
                     <DisplayCrousalWeb Idealfor={props.Idealfor}/>
                    </div>
                </div>
                <div id="carouselExampleMobile" class="carousel slide d-md-none d-lg-none d-xl-none mt-3" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                     <DisplayCrousalMobile Idealfor={props.Idealfor}/>
                            
                        </div>
                       

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductCrousal
