import Portal from '../Portal';
import Button from '../stylizedComponents/Button';
import { Overlay, Container, Footer } from './styles';

export default function Modal(props) {
  const {
    title, text, actionTitle, danger,
  } = props;

  return (
    <Portal>
      <Overlay>
        <Container danger={danger}>
          <h1>{title}</h1>
          <p>{text}</p>

          <Footer>
            <button className="cancel-button" type="button">Cancelar</button>
            <Button danger={danger}>
              {actionTitle}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </Portal>
  );
}
