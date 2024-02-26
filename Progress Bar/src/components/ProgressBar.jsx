import { useEffect, useState } from "react"

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {

    const [percent, setPercent] = useState(value)

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)))
        if(value >= 100) {
            onComplete()
        }
    }, [value])

    return (
        <div className="progress">
            <span
                style={{ color: percent > 49 ? 'white' : 'black' }}
            >{percent.toFixed()}%</span>
            <div style={{ width: `${percent}%` }}
                role="progressbar"
                aria-valuenow={percent.toFixed()}
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    )
}

export default ProgressBar