import classNames from "classnames";
import styles from "./Modal.module.css";
import Accordion from "../interface/Accordion";

const Modal = ({ modal, setModal }) => {
  console.log(modal);
  return (
    <aside
      style={{ left: `${!modal && "-25rem"}` }}
      className={classNames(styles.modalContainer, modal && styles.modalOpen)}
    >
      <button onClick={() => setModal(!modal)}>cerrar</button>
      <h1>asdasdasdasdas</h1>
      <p>lorem ipsun asdasdasd asdasdasd asdasdasd asdasdA </p>
      <Accordion summary={"titulo 1"} subtitle={"hola"}>
        lorem ipsun asdasd asdasd asdasd asdasd asdasd asdasd asdas dasda123
      </Accordion>
      <Accordion summary={"titulo 2"} subtitle={"hola2"}>
        lorem ipsun asdasd asdasd asdasd asdasd asdasd asdasd asdas dasda123456
      </Accordion>
      <Accordion summary={"titulo 3"} subtitle={"hola2"}>
        lorem ipsun asdasd asdasd asdasd asdasd asdasd asdasd asdas dasda123456
        asdasdasdas
      </Accordion>
    </aside>
  );
};

export default Modal;
