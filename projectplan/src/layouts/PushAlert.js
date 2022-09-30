import React from "react";
import { DateType, formatDateTime } from "../utilities/formatDateTime";

function PushAlert(props) {
  const { data } = props;
  //console.log(PushAlert.name, data);
 

  
  if (Array.isArray(data) && data.length != 0) {
    const alert = data.map((item, index) => (
      <div
        key={index}
        className={`toast fade show bg-${item.type}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-autohide="true"
        data-bs-delay="2000"
      >
        <div className="toast-header">
          <strong className="me-auto">{item.title}</strong>
          <small className="text-muted">
            {formatDateTime(item.time, DateType.PushAlert)}
          </small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{item.body}</div>
      </div>
    ));

    return (
      <div>
        <div
          className="toast-container top-50 end-0 translate-middle-y"
          style={{ zIndex: "50" }}
        >
          {alert}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default PushAlert;
