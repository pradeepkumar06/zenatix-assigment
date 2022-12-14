export const Modal = ({show, setShow, data}) => {
    
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
