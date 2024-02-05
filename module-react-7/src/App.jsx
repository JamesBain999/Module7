import "./App.css";
import { Clock, ClockDisplay } from "./Clock";
import ActivityFinder from "./ActivityFinder";
import BitcoinRates from "./BitcoinRates";
import RefCounter from "./RefCounter";
import VideoPlayer from "./VideoPlayer";
import StatefulCounter from "./Ex.1_Stateful_Counter";
import TimerControlledCounter from "./Ex.2_Timer-Controlled_Counter";
import SimpleForm from "./Ex.3_Form_With_Refs";
import TodoList from "./Ex.4_Dynamic_List";
import SynchronizedInputFields from "./Ex.5_Synchronised_Inputs";
import PostListReducer from "./PostListReducer";
import DynamicStyleComponent from "./SynchronizingWithEffects";
import DynamicStyleComponentV2 from "./SynchronizingWithoutEffects";
import LoginForm from "./LoginForm";
import { UserProvider } from "./UserContext";
import AppRoutes from "./AppRoutes";
import NavBar from "./NavBar";
import { ChangeMoodProvider } from "./ChangeMoodContext";
import EmojiChanger from "./Emoji";
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from "./Theme";
import { greenTheme } from "./Theme2";


function App() {
  return (
    <>
      <div className="frame">
        <ThemeProvider theme={greenTheme}>
          <UserProvider>
            <NavBar />
            <ChangeMoodProvider>
              <AppRoutes />
              {/* <EmojiChanger />
            <BitcoinRates /> */}
              {/* <LoginForm /> */}
              {/* <DynamicStyleComponent /> */}
              {/* <DynamicStyleComponentV2 /> */}
              {/* <PostListReducer /> */}
              {/* <SynchronizedInputFields />         */}
              {/* <TodoList /> */}
              {/* <SimpleForm /> */}
              {/* <TimerControlledCounter /> */}
              {/* <StatefulCounter /> */}
              {/* <VideoPlayer /> */}
              {/* <RefCounter /> */}
              {/* <ActivityFinder /> */}
              {/* <Clock /> */}
              {/* <ClockDisplay /> */}
            </ChangeMoodProvider>
          </UserProvider>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
