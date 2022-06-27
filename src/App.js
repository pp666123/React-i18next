import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="App">
        {t('hello')}
      </div>
      <div>
        <button onClick={() => changeLanguage("zh")}>中文</button>
        <button onClick={() => changeLanguage("en")}>English</button>
      </div>
    </>

  );
}

export default App;
