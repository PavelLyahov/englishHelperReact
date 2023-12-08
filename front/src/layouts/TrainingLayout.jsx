import { Outlet } from 'react-router-dom';
import TrainingMenu from '../components/training/TrainingMenu';

const TrainingLayout = () => {
	return (
		<>
			<TrainingMenu />
			<Outlet />
		</>
	);
};

export default TrainingLayout;
