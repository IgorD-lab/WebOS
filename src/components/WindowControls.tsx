import useWindowStore from '#store/window';

type WindowId =
  | 'terminal'
  | 'finder'
  | 'contact'
  | 'resume'
  | 'safari'
  | 'photos'
  | 'txtfile'
  | 'imgfile';

interface WindowControlsProps {
  target: WindowId;
}

const WindowControls = ({ target }: WindowControlsProps) => {
  const { closeWindow } = useWindowStore();
  console.log('Controls target:', target);
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls;
