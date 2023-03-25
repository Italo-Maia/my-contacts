import Portal from '../Portal';
import { Overlay } from './styles';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <Portal>
      <Overlay>
        <div className="loader" />
      </Overlay>
    </Portal>
  );
}
