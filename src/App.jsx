import './App.css'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import Header from './components/Header';
function App() {


  return (
    <TonConnectUIProvider
    manifestUrl='https://haidang1801.github.io/ton-wallet/tonconnect-manifest.json'
    uiPreferences={{ theme: THEME.LIGHT }}>
      <div className="app">
        <Header/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
