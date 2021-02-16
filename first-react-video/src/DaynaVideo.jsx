import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';

export const DaynaVideo = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames, width, height} = useVideoConfig();

  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      This is the current frame {frame}
      The duration is {durationInFrames/fps} seconds long.
    </div>
  )
}