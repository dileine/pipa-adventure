import { GameProvider } from "./contexts/GameContext";
import Router from "../src/routes/Router";

function App() {
  return (
    <GameProvider>
      <Router />
    </GameProvider>
  );
}

export default App;
