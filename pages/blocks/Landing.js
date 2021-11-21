export default function Landing({header, subHeader}) {
  return (
    <div id="landing">
      <h1>{ header }</h1>
      <h3>{ subHeader }</h3>

      <div className="decoration-text">Welcome</div>
    </div>
  )
}