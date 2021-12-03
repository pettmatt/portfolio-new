import ReactMarkdown from 'react-markdown'

export default function Me({description}) {
  return (
    <div id="me" className="section">
      <h1>Me</h1>
      {<ReactMarkdown>{description}</ReactMarkdown>}
    </div>
  )
}