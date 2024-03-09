import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const MyComposition: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const entrance = interpolate(frame, [0, 15], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const entranceSpring = spring({ fps, frame, durationInFrames: 45 });

	return (
		<AbsoluteFill className="bg-[radial-gradient(circle,#075985_10%,#0f172a)] justify-center items-center px-8">
			<h1
				className="text-[16rem] text-white font-black leading-none mt-12
				[text-shadow:0_0_theme(colors.neutral.950),0_2px_2px_theme(colors.neutral.800/30),0_1px_1px_theme(colors.neutral.800/35),0_4px_12px_theme(colors.neutral.800/25)]"
				style={{
					opacity: entrance,
					transform: `translateY(${(entranceSpring - .9) * 12}rem) scale(${entranceSpring * .4 + 1})`,
				}}
			>
				1
			</h1>


			<div
				className="w-[150%] h-full 
					shadow-[0_-20px_-25px_-5px_rgb(0_0_0/0.1),0_-8px_-10px_-6px_rgb(0_0_0/0.1),0_-30px_-60px_-16px_rgb(0_0_0/0.25)]"
				style={{
					background: 'linear-gradient(0deg, #020617 80%, #0f172a 97%, #1e293b)',
					transform: `translateY(${-(entranceSpring - 1) * 100}%) scaleY(${entranceSpring})`,
					willChange: 'transform, border-radius',
					borderRadius: `${entranceSpring * 40}% ${entranceSpring * 40}% 0 0`,
				}}
			>
				{/*  */}
			</div>

			<div className="absolute bottom-0 inset-x-0 bg-sky-950 []">
				<p className="text-white font-medium text-center">
					Give a star at <a href="https://github.com/anhzf/rmdn2024" className="underline text-sky-400">anhzf/rmdn2024</a>
				</p>
			</div>
		</AbsoluteFill>
	);
};
