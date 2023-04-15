import "./Template.css";

function Template(props) {
  return (
    <div>
      <div className={props.temp}>
        <img src={props.template} alt="Img" />
      </div>
      <div className="temp-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.anchor}>
          {props.btn}
        </a>
      </div>
    </div>
  );
}
export default Template;
