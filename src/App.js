import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FrontPage from './components/FrontPage';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading("False");
    }, 2000);
  }, [])




  return (
    <>
      {loading === true ? <Loading /> :
        <div id='valentizer' className={`valentizer`}>
          <FrontPage />
        </div>}
    </>
  );
}
export default App;
