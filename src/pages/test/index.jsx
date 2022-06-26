import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../styles/home.css';

const TestPage = () => {
  return (
    <div className="App">
      <header className="App-header space-y-3">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Congrats! You have visited <strong>test/index.jsx</strong>
        </p>
        <Link className="bg-cyan-100 text-black py-1 px-4 rounded-lg" to="/">
          Go Home
        </Link>
      </header>
    </div>
  );
};

export default TestPage;
