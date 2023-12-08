import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import Word from './components/Words';
import MainLayout from './layouts/MainLayout';
import PhrasesSection from './components/phrases/PhrasesSection';

import TrainingLayout from './layouts/TrainingLayout';
import Description from './components/training/Description';
import WordTraining from './components/training/WordTraining';
import PhraseTraining from './components/training/PhraseTraining';
import DailyTraining from './components/training/DailyTraining';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='words' element={<Word />} />
						<Route path='phrases' element={<PhrasesSection />} />
						<Route path='training' element={<TrainingLayout />}>
							<Route index element={<Description />} />
							<Route path='wordTraining' element={<WordTraining />} />
							<Route path='phraseTraining' element={<PhraseTraining />} />
							<Route path='dailyTraining' element={<DailyTraining />} />
						</Route>
						<Route path='contacts' element={<Contacts />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
