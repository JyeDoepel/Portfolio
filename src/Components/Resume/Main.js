import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

function ResumeMain() {
  return (
    <div>
      <div className="Resume-title">
        <ul>
          <li>Resume</li>
        </ul>
      </div>
      <Experience />
      <Education />
      <Skills />

      <div className="bottom"></div>
    </div>
  )
}

export default ResumeMain
