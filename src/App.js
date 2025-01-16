import './App.css';
import {TonConnectUIProvider} from "@tonconnect/ui-react";

function App() {
  return (
      <TonConnectUIProvider manifestUrl = "https://tgwallet-realis-test.vercel.app/tonconnect-manifest.json">
        <div className="App">
          <header className="App-header">
          </header>
            <p>qwe</p>
        </div>
      </TonConnectUIProvider>
  );
}

export default App;
