import { Outlet } from 'react-router-dom';
import NavTabs from './components/navigation';
import Footer from './components/footer';
import Header from './components/header';
import './App.css';


function App() {
  return (
    <>
    <Header />
    <div>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
    </div>   
    <Footer />
    </>
  )
}

export default App
