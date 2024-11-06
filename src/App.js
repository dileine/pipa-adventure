import { GameProvider } from "./contexts/game";
import Router from "../src/routes/Router";

function App() {
  return (
    <GameProvider>
      <Router />
    </GameProvider>
  );
}

export default App;
