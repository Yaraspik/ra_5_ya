import './App.css';

import dataHeader from './data/dataHeader';
import dataBody from './data/dataBody';
import dataFooter from './data/dataFooter';

import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header dataHeader={dataHeader} />
      <Body dataBody={dataBody} />
      <Footer dataFooter={dataFooter} />
    </div>
  );
}

export default App;