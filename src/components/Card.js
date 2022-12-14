import { useState } from "react"

const Modal = ({show, setShow, data}) => {
    console.log(show)
      return (
  
<div className={`modal ${show ? "fade show" : ""}`} style={{display: show ? "block" : "none"}} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{data.title}</h5>
        <button type="button" onClick={()=>setShow(false)} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      {data.des}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>setShow(false)}>Close</button>
       
      </div>
    </div>
  </div>
</div>
      )
}

export const Card = ({title, des}) => {
     const [show, setShow] = useState(false);
     const clickHandler = () => {
        console.log("clicked")
        setShow(true);
     }
     return (
        <>
        <div className="card">
        <img className="card-img-top" src="https://preyash2047.github.io/assets/img/no-preview-available.png?h=824917b166935ea4772542bec6e8f636" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{des}</p>
          <button onClick={clickHandler}  className="btn btn-primary">View</button>
        </div>
      </div>
      <Modal show={show} setShow={setShow} data={{title, des}}/>
      </>
     )
}