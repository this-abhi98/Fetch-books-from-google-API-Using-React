import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";

function Book(props) {

  console.log(props.item);

  return (
    <>
        <div className="container " >
          <div className="row">
            <div className="col-12 mt-3">
              <div className="card contain">
                <div className="card-horizontal">
                  <div className="img-square-wrapper">
                    <img  src={`${props.item.volumeInfo.imageLinks.smallThumbnail}`} alt="" />
                  </div>
                  <Link to={{ pathname: `/Book/${props.item.id}`, state: { item:props.item } }}>
                  <div className="card-body">
                    <h4 className="card-title">{props.item.volumeInfo.title}</h4>
                    <p className="card-text">

                    {props.item.volumeInfo.subtitle}
                      
                    </p>
                  </div>
                  </Link>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Author: {props.item.volumeInfo.authors[0]}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Book;
