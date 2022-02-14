import "./App.css";
import { useState, useEffect } from "react";
import Email from "./components/Email";
import EmailPrev from "./components/EmailPrev";

function App() {
  const [emails, setEmails] = useState([]);
  const [preview, setPreview] = useState({});
  const getEmails = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/Jsarihan/d5f8cd2d159d676fbfb2fab94750635e/raw/b54cc1bd819b157a93bde00fe059825002f1f602/email.json"
    );
    const jsonEmail = await response.json();
    setEmails(jsonEmail);
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <div className="App">
      <div>
        {emails.map((email) => (
          <Email
            key={email.id}
            subject={email.subject}
            from={email.address}
            date={email.time}
            sender={email.from}
            func={setPreview}
            body={email.body}
          />
        ))}
      </div>
      {preview && (
        <EmailPrev
          subject={preview.subject}
          sender={preview.from}
          date={preview.time}
          body={preview.message}
        />
      )}
    </div>
  );
}

export default App;
