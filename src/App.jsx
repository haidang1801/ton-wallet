import './App.css'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import Header from './components/Header';
function App() {


  return (
    <TonConnectUIProvider
    manifestUrl='http://127.0.0.1:8000/tonconnect-manifest.json'
    uiPreferences={{ theme: THEME.LIGHT }}>
      <div className="app">
        <Header/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
