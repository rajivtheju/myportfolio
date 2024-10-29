
import React from 'react'

const Achivements = () => {
  return (
    <div >
      <div className="vr vr-blurry" ></div>
      <section class="text-center" >
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
            {/* <i className="fas fa-cubes fa-3x text-primary mb-4"></i> */}
            <h5 className=" fw-bold mb-3"  style={{color:'orange'}}>10+</h5>
            <h6 className="fw-normal mb-0">Website</h6>
            <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
            {/* <i className="fas fa-layer-group fa-3x text-primary mb-4"></i> */}
            <h5 className="fw-bold mb-3"  style={{color:'orange'}}>2</h5>
            <h6 className="fw-normal mb-0">RealTime projects</h6>
            <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
            {/* <i className="fas fa-image fa-3x text-primary mb-4"></i> */}
            <h5 className=" fw-bold mb-3"  style={{color:'orange'}}>5</h5>
            <h6 className="fw-normal mb-0">Internship</h6>
            <div className="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
            {/* <i className="fas fa-plug fa-3x text-primary mb-4"></i> */}
            <h5 className=" fw-bold mb-3" style={{color:'orange'}}>20</h5>
            <h6 className="fw-normal mb-0">Blogs</h6>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Achivements
