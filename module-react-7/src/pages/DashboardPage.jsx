import { useNavigate, Outlet } from "react-router-dom";
import React from "react";
import { useChangeMood } from "../ChangeMoodContext";
import useBitcoinRates from "../useBitcoinRates";


export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();
  return (
    <div className="DashboardPage componentBox">
      <h1>Dashboard</h1>
      <Outlet /> {/* see next slide */}
      {/* Will render either <DashboardMessages> when the URL is
 "/dash/messages", <DashboardTasks> at "/dash/tasks",
 or null if it is "/dash" */}
      <button onClick={() => navigate("/dash/tasks")}>Show Tasks</button>
      <button onClick={() => navigate("/dash/messages")}>Show Messages</button>
      <button onClick={() => navigate("/dash/bitcoin")}>Show Bitcoin Rates</button>
      <button onClick={() => navigate("/dash/emoji")}>Show Emoji Changer</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export function DashboardMessages(props) {
  const { currentUser } = useUserContext();
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard, {currentUser.email}</p>
    </div>
  );
}

export function DashboardTasks(props) {
  const tasks = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Decide on capstone project" },
    { id: 3, name: "Learn databases" },
  ];
  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export function BitcoinRates(props) {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
  const { currentMood } = useChangeMood(); // Retrieve the currentMood from the context

  const [currency, setCurrency] = React.useState(currencies[0]);
  const price = useBitcoinRates(currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <div>
        <strong>Current Mood: </strong>
        {currentMood}
      </div>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <strong>Exchange Rate: </strong>
        {price}
      </div>
    </div>
  );
}


export function EmojiChanger(props) {
  const { currentMood, changeMood } = useChangeMood();

  return (
    <div className="MoodChanger">
      Current Mood: {currentMood}
      <button onClick={() => changeMood("😂")}>Laughing Emoji</button>
      <button onClick={() => changeMood("😘")}>Kissing Emoji</button>
      <button onClick={() => changeMood("😎")}>Sunglasses Emoji</button>
      <button onClick={() => changeMood("😢")}>Sad Emoji</button>
    </div>
  );
}
