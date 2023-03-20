import Portal from '../Portal';
import { Overlay } from './styles';

export default function Loader() {
  return (
    <Portal>
      <Overlay>
        <div className="loader" />
      </Overlay>
    </Portal>
  );
}
