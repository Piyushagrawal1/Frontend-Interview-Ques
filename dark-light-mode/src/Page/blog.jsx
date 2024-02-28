import { useTheme } from "../theme-context"

const Blog = () => {
    const {Theme} = useTheme()
    return (
        <div className={`page ${Theme}`}>
            <div>Blog Page</div>
            <div>Welcome to blog page</div>
        </div>
    )
}

export default Blog