const EmailPrev = ({ subject, sender, date, body }) => {
  return (
    <div>
      <h1>{subject}</h1>
      <p>{sender}</p>
      <p>{date}</p>
      <p>{body}</p>
    </div>
  );
};

export default EmailPrev;
