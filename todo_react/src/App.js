import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import SectionFooter from './components/SectionFooter';

function App() {
  return (
    <section className="todoapp">
      <Header/>
      <Content/>
      <SectionFooter/>
    </section>  
  );
}

export default App;
