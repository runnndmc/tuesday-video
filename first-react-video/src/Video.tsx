import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {DaynaVideo} from './DaynaVideo.jsx';
export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="DaynaVideo"
				component={DaynaVideo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'This is Daynas Video',
					titleColor: 'purple',
				}}
			/>
		</>
	);
};
