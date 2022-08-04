import React from "react";
import { Link, withRouter } from "react-router-dom";

const Chat = ({ data, history }) => {
  // console.log(data.link);

  return (
    <Link to={data.link}>
      <div
        className={`${data.active ? "active" : ""} chat`}
        // onClick={() => history.push(`${data.link}`)}
      >
        <div
          className="user-image"
          style={{ backgroundImage: `url(${data.userImageURL})` }}
        >
          {data.active ? <div className="dot" /> : null}
        </div>
        <div className="details">
          <div>
            <div className="name">
              {data.fName} {data.lName}
            </div>
            <div className="last-message">
              {data.message.map((message) => (
                <span key={message.id}>{message.textMessage}</span>
              ))}
            </div>
          </div>

          <div className="time">{data.time}</div>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(Chat);
