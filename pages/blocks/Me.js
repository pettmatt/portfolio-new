export default function Me({description}) {
  return (
    <div id="me" className="section">
      <h1>Me</h1>
      <div className="decoration-text"><h3>Introduction</h3></div>
      <p>
        {description}
      </p>
    </div>
  )
}