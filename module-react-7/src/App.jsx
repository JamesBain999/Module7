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

function App() {
  return (
    <>
      <div className="frame">
        <SynchronizedInputFields />        
        {/* <TodoList /> */}
        {/* <SimpleForm /> */}
        {/* <TimerControlledCounter /> */}
        {/* <StatefulCounter /> */}
        {/* <VideoPlayer /> */}
        {/* <RefCounter /> */}
        {/* <BitcoinRates /> */}
        {/* <ActivityFinder /> */}
        {/* <Clock /> */}
        {/* <ClockDisplay /> */}
      </div>
    </>
  );
}

export default App;
