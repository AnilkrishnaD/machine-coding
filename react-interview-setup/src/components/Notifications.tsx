import React from "react";

import { useSelector, useDispatch } from "redux";

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications);

  const dispatch = useDispatch();

  const hideNotification = () => {
    dispatch.hideNotifiction(true);
  };

  // returns jsx
  return (
    <div>
      <div>
        Read Noficatiosn
        <button onClick={hideNotification}>Close notification</button>
      </div>
    </div>
  );
};

export default Notifications;
