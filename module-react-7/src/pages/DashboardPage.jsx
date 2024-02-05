import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Button, Typography, Select, MenuItem } from "@mui/material";
import { useChangeMood } from "../ChangeMoodContext";
import useBitcoinRates from "../useBitcoinRates";
import { useUserContext } from "../UserContext";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="DashboardPage componentBox">
      <Typography variant="h1">Dashboard</Typography>
      <Outlet />
      <Button onClick={() => navigate("/dash/tasks")}>Show Tasks</Button>
      <Button onClick={() => navigate("/dash/messages")}>Show Messages</Button>
      <Button onClick={() => navigate("/dash/bitcoin")}>
        Show Bitcoin Rates
      </Button>
      <Button onClick={() => navigate("/dash/emoji")}>
        Show Emoji Changer
      </Button>
      <Button onClick={() => navigate("/dash/PLR")}>Post List Reducer</Button>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
}

export function DashboardMessages(props) {
  const { currentUser } = useUserContext();

  return (
    <div className="DashboardMessages">
      <Typography variant="body1">
        Welcome to your dashboard, {currentUser.email}
      </Typography>
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
  const { currentMood } = useChangeMood();

  const [currency, setCurrency] = React.useState(currencies[0]);
  const price = useBitcoinRates(currency);

  const options = currencies.map((curr) => (
    <MenuItem value={curr} key={curr}>
      {curr}
    </MenuItem>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <Typography variant="h3">Bitcoin Exchange Rate</Typography>
      <div>
        <strong>Current Mood: </strong>
        {currentMood}
      </div>
      <label>
        Choose currency:
        <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </Select>
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
      <Typography variant="body1">Current Mood: {currentMood}</Typography>
      <Button onClick={() => changeMood("😂")}>Laughing Emoji</Button>
      <Button onClick={() => changeMood("😘")}>Kissing Emoji</Button>
      <Button onClick={() => changeMood("😎")}>Sunglasses Emoji</Button>
      <Button onClick={() => changeMood("😢")}>Sad Emoji</Button>
    </div>
  );
}
