import { Composition } from 'remotion';
import { MyComposition } from './Composition';
import './fonts';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="MyComp"
			component={MyComposition}
			durationInFrames={30 * 30}
			fps={30}
			width={720}
			height={1280}
			defaultProps={{
				titleText: 'Welcome to Remotion with Tailwind CSS',
				titleColor: '#000000',
				logoColor: '#00bfff',
			}}
		/>
	);
};
