import React from 'react';
 

const Home=()=>{
  return(
     <>

    <div className="row">
        <div className="col-sm-1"> </div>
        <div className="col-sm-10">
        <div className="card"> 
        <div className="card-body">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img width={"80%"} height={400} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img  width={"80%"} height={400} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img width={"80%"} height={400} src="https://image.shutterstock.com/image-illustration/beautiful-aurora-universe-milky-way-260nw-1787056478.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
        </div> 
        </div>
        <div className="col-sm-1"></div>

       
    </div>



        
   
   
     </>

  )
}

export default Home;