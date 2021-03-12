import "../../styles/Box.css";

export default function Box(props) {
  return (
    <div className={"box" + (props.classes ? " " + props.classes : null)}>
      {props.children}
    </div>
  );
}
