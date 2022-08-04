import React from "react";
import { MessageIcon } from "./icons.component";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notifications-list">
        <div className="item">
          <div className="icon">
            <MessageIcon />
          </div>
          <div className="details">
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              cupiditate libero voluptates modi sequi, inventore maxime
              temporibus blanditiis aut repellat vero nostrum consequatur,
              magnam, sed tempora! Ut id odit non!
            </p>
            <h6 className="date">Dec 9, 9:00 PM</h6>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <MessageIcon />
          </div>
          <div className="details">
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              cupiditate libero voluptates modi sequi, inventore maxime
              temporibus blanditiis aut repellat vero nostrum consequatur,
              magnam, sed tempora! Ut id odit non!
            </p>
            <h6 className="date">Dec 9, 9:00 PM</h6>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <MessageIcon />
          </div>
          <div className="details">
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              cupiditate libero voluptates modi sequi, inventore maxime
              temporibus blanditiis aut repellat vero nostrum consequatur,
              magnam, sed tempora! Ut id odit non!
            </p>
            <h6 className="date">Dec 9, 9:00 PM</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
