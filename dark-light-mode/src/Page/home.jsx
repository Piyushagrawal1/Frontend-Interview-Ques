import { useTheme } from "../theme-context"

const Home = () => {
    const {Theme} = useTheme()
  return (
    <div className={`page ${Theme}`}>
        <div>Home</div>
        <p>Welcome to Home Page</p>
    </div>
  )
}

export default Home