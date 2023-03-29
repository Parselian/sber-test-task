import React, {useState} from "react"
import TimelineProps from "@/components/Timeline/Timeline.props";
import classes from "@/components/Timeline/Timeline.module.css"
import cn from "classnames"

const Timeline = ({type, position = 'up', steps, ...props}: TimelineProps): JSX.Element => {
    const [labelsPos, setLabelsPos] = useState(position),
        [timelineType, setTimelineType] = useState(type),
        [stepsAmount, setStepsAmount] = useState(steps.length)

    const timelineClasses = cn(classes.timeline, [
        {[classes['dot_up']]: timelineType === 'dot' && labelsPos === 'up'},
        {[classes['dot_down']]: timelineType === 'dot' && labelsPos === 'down'},
        {[classes['line_up']]: timelineType === 'line' && labelsPos === 'up'},
        {[classes['line_down']]: timelineType === 'line' && labelsPos === 'down'},
    ])

    const updLabelsPosition = (val) => setLabelsPos(val)
    const updTimelineType = (val) => setTimelineType(val)
    const updStepsAmount = (val) => setStepsAmount(val)

    const renderStep = (step, i) => {
        const stepClasses = cn(classes.step, [
            {[classes['step_completed']]: step.status === 'completed'},
            {[classes['step_pending']]: step.status === 'pending'},
            {[classes['step_inactive']]: step.status === 'inactive'}
        ])

        switch (timelineType) {
            case "dot":
                return (
                    <span className={stepClasses} key={step.label}>
                        <span className={classes.dot} data-label={step.label}></span>
                        {stepsAmount - 1 !== i && <span className={classes.line}></span>}
                    </span>
                )
            case "line":
                return (
                    <span className={stepClasses} key={step.label}>
                        <span className={classes.dot}></span>
                        <span className={classes.line} data-label={step.label}></span>
                        {stepsAmount - 1 == i && <span className={classes.dot}></span>}
                    </span>
                )
            default:
                return <></>
        }
    }

    return (
        <>
            <div className={timelineClasses}>
                {
                    steps.map((step, stepIndex) => (
                        stepIndex < stepsAmount && renderStep(step, stepIndex)
                    ))
                }
            </div>

            <div className={classes.controls}>
                <div className={classes.select}>
                    <label htmlFor="timeline-type">Choose timeline type: </label>
                    <select id="timeline-type" onChange={(e) => updTimelineType(e.target.value)}>
                        <option value="dot">DOT</option>
                        <option value="line">LINE</option>
                    </select>
                </div>
                <div className={classes.select}>
                    <label htmlFor="label-position">Choose label position: </label>
                    <select id="label-position" onChange={(e) => updLabelsPosition(e.target.value)}>
                        <option disabled>choose position</option>
                        <option value="up">UP</option>
                        <option value="down">DOWN</option>
                    </select>
                </div>
                <div className={classes.range}>
                    <label htmlFor="steps-amount">Select steps amount: </label>
                    <input id="steps-amount" type="range" min={1} max={steps.length} onChange={(e) => updStepsAmount(e.target.value)}/>
                </div>
            </div>
        </>
    )
}

export default Timeline