import styles from './App.module.scss';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;