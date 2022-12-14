import { useState } from "react"
import { Modal } from "./Modal";
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