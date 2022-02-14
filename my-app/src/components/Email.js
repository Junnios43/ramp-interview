import { useState } from "react";
import "./Email.css";

const Email = ({ subject, sender, date, from, func, body }) => {
  const [read, setRead] = useState(false);
  const handler = () => {
    setRead(true);
    func({});
  };
  return (
    <div className={` ${read ? "EmailRead" : "EmailUnread"}`} onClick={handler}>
      <h1>{subject}</h1>
      <p>{sender}</p>
      <p>{from}</p>
      <p>{date}</p>
    </div>
  );
};

export default Email;
