import "../../styles/ShipBackgroundWithFilter.css";

export function ShipBackgroundWithFilter(props) {
  return (
    <div className="ship-bg vh-100">
      <div className="vh-100 flex-center flex-column link-light bg-filter-grey">
        {props.children}
      </div>
    </div>
  );
}
