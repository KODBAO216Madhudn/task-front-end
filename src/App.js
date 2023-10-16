import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import { Provider } from 'react-redux';
import { store } from './app/store';
import SignUpPage from './components/loginPage/SignUpPage';
import Collections from './components/Collections';
import '../src/assets/css/index.css';
// ------------------------------------------------------------------------------
function App() {
  return (
    
    <Provider store={store}>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/signup' element={<SignUpPage />}/>
          <Route path='/task/*' element={<Collections />} />
          {/* <Route exact path='/task/landing-page' element={<LandingPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
