import logo from './logo.svg';
import './App.css';
import VelocityGraph from './components/velocity-graph';
import FileExplorer from './components/file-explorer';
import QuizApp from './components/quiz-app';
import OTPLogin from './components/otp-login';
import CountDownTimer from './components/countdown-timer';
import TicTacToe from './components/tic-tac-toe';
import ProgressBar from './components/progress-bar';

function App() {
  return (
    <div className="App">
      {/* <VelocityGraph /> */}
      {/* <FileExplorer /> */}
      <QuizApp />
      {/* <OTPLogin /> */}
      {/* <CountDownTimer /> */}
      {/* <TicTacToe grids={9} /> */}
      {/* <ProgressBar /> */}
    </div>
  );
}

export default App;
