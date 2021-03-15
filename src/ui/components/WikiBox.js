import { useState, useEffect } from "react";
import { ModalOpener } from "./ModalOpener";
import "../../styles/WikiBox.css";

export function WikiBox(props) {
  const [id, setId] = useState();

  const createId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  useEffect(() => setId(createId()), []);

  return (
    <>
      <ModalOpener
        id={`modal_${id}`}
        noButton
        fullScreen
        modalTitle={props.title}
      >
        {props.children}
      </ModalOpener>

      <button
        className="wikiModalButton"
        data-bs-toggle="modal"
        data-bs-target={`#modal_${id}`}
      >
        <div className="box">
          <h1>{props.title}</h1>
        </div>
      </button>
    </>
  );
}
