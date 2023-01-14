
// styles
import './App.css';

// react router dom
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import { Suspense } from 'react';

// components
import { Footer } from './components/Footer/Footer';
import { ScrollTop } from './components/ScrollTop';
import { ScrollButton } from './utilities/ScrollButton';
import { Header } from './components/Header/Header';

// pages
import { Archive } from './pages/Archive';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ForAuthors } from './pages/ForAuthors';
import { GeneralTerms } from './pages/GeneralTerms';
import { Policy } from './pages/Policy';
import { NotFound } from './pages/NotFound';
import { EditorialBoardPage } from './pages/EditorialBoardPage';


// i18next, language switching
// eslint-disable-next-line
import i18n from "./i18n";


function App() {


    return (

        <Suspense fallback={null}>
            <div className="App">
                <BrowserRouter>
                    <ScrollButton />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="authors" element={<ForAuthors />} />
                        <Route path="archive" element={<Archive />} />
                        <Route path="terms" element={<GeneralTerms />} />
                        <Route path="policy" element={<Policy />} />
                        <Route path="editorialboard" element={<EditorialBoardPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <ScrollTop />
                    <Footer />
                </BrowserRouter>
            </div>
        </Suspense>
    );
}

export default App;
