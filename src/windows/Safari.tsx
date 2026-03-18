import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls />
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;
