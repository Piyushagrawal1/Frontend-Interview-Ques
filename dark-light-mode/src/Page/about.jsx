import { useTheme } from "../theme-context"

const About = () => {
    const {Theme} = useTheme()
  return (
    <div className={`page ${Theme}`}>
        <div>About</div>
        <div>Welcome to about page</div>
    </div>
  )
}

export default About