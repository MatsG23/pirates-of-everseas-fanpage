import { useTranslation } from "react-i18next";

export function ModalOpener(props) {
  const { t } = useTranslation();

  return (
    <>
      {props.noButton ? null : (
        <button
          type="button"
          className={"btn " + (props.btnStyles ? props.btnStyles : "")}
          data-bs-toggle="modal"
          data-bs-target={`#${props.id}`}
        >
          {props.btnTitle}
        </button>
      )}

      <div
        className="modal fade"
        id={props.id}
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div
          className={
            "modal-dialog " + (props.fullScreen ? "modal-fullscreen" : "")
          }
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="modalLabel">
                {props.modalTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body" style={{ textAlign: "left" }}>
              {props.children}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {t("modal_close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
