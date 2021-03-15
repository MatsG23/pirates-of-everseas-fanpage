import { WikiBox } from "../components/all";
import Template from "./Template";
import "../../styles/Wiki.css";

export function Wiki() {
  return (
    <Template>
      <div className="container-fluid overflow-auto">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 gy-4">
            <WikiBox title="General">
              <p>Some text...</p>
            </WikiBox>
          </div>
          <div className="col-12 col-sm-6 col-md-4 gy-4">
            <WikiBox title="The island">
              <p>Some text...</p>
            </WikiBox>
          </div>
          <div className="col-12 col-sm-6 col-md-4 gy-4">
            <WikiBox title="Attacking">
              <p>Some text...</p>
            </WikiBox>
          </div>
          <div className="col-12 col-sm-6 col-md-4 gy-4">
            <WikiBox title="General">
              <p>Defending</p>
            </WikiBox>
          </div>
          <div className="col-12 col-sm-6 col-md-4 gy-4">
            <WikiBox title="Events">
              <p>Some text...</p>
            </WikiBox>
          </div>
          <div className="col-12 col-sm-6 col-md-4 gy-4">
            <WikiBox title="Other">
              <p>Some text...</p>
            </WikiBox>
          </div>
          <div className="col-12 col-sm-6 col-md-4 gy-4">
            <WikiBox title="(Advanced) helper tools">
              <p>Some text...</p>
            </WikiBox>
          </div>
        </div>
      </div>
    </Template>
  );
}
