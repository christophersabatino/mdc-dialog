import React from "react";
import ReactDOM from "react-dom";
import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";
import { MDCDialog } from "@material/dialog";

class App extends React.Component {
  componentDidMount() {
    if (this.dialog) {
      this.dialog = new MDCDialog(this.dialog);
      this.dialog.listen("MDCDialog:accept", this.onAccept);
      this.dialog.listen("MDCDialog:cancel", this.onCancel);
      this.dialog.show();
    }
  }

  onAccept = () => {
    console.log("onAccept");
  };

  onCancel = () => {
    console.log("onCancel");
  };

  render() {
    return (
      <aside
        className="mdc-dialog"
        role="alertdialog"
        ref={dialog => {
          this.dialog = dialog;
        }}
      >
        <div className="mdc-dialog__surface">
          <header className="mdc-dialog__header">
            <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
              Use Google's location service?
            </h2>
          </header>
          <section id="my-mdc-dialog-description" className="mdc-dialog__body">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </section>
          <footer className="mdc-dialog__footer">
            <button
              type="button"
              className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel"
            >
              Decline
            </button>
            <button
              type="button"
              className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept"
            >
              <span>Click bug</span>
            </button>
          </footer>
        </div>
        <div className="mdc-dialog__backdrop" />
      </aside>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
