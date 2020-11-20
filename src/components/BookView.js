import React from "react";
import "./BookView.css";

function book(props) {
  const item = props.location.state.item;
  console.log(item);

  return (
    <>
      <div className="card cont">
        <img
          className="card-img-top"
          src={`${item.volumeInfo.imageLinks.thumbnail}`}
          alt="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F763472381004263425%2FjbSDtXv0.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fapp_scoop&tbnid=ySfScSPCw0v63M&vet=12ahUKEwiCnq6f75DtAhUUI7cAHVYQAJkQMygBegQIARA6..i&docid=yUpd2nUcPPPcfM&w=2048&h=2048&q=appscoop&ved=2ahUKEwiCnq6f75DtAhUUI7cAHVYQAJkQMygBegQIARA6"
        />
        <div className="card-body">
          <h5 className="card-title">{item.volumeInfo.title}</h5>
          <p className="card-text">
          {item.volumeInfo.subtitle}
          </p>
        </div>
      </div>
    </>
  );
}

export default book;
