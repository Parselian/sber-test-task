import React, {useState} from "react"
import TimelineProps, {stepProps} from "@/components/Timeline/Timeline.props"
import classes from "@/components/Timeline/Timeline.module.css"
import cn from "classnames"
import Select from "@/components/Select/Select"
import Range from "@/components/Range/Range"

const Timeline = ({type, position = 'up', steps}: TimelineProps): JSX.Element => {
    const [labelsPos, setLabelsPos] = useState(position),
        [timelineType, setTimelineType] = useState(type),
        [stepsAmount, setStepsAmount] = useState(steps.length)

    const timelineClasses = cn(classes.timeline, [
        {[classes['dot_up']]: timelineType === 'dot' && labelsPos === 'up'},
        {[classes['dot_down']]: timelineType === 'dot' && labelsPos === 'down'},
        {[classes['line_up']]: timelineType === 'line' && labelsPos === 'up'},
        {[classes['line_down']]: timelineType === 'line' && labelsPos === 'down'},
    ])

    const updLabelsPosition = (val: string | number) => {
        if (val === 'up' || val === 'down') setLabelsPos(val)
    }
    const updTimelineType = (val: string | number) => {
        if (val === 'dot' || val === 'line') setTimelineType(val)
    }
    const updStepsAmount = (val: number) => setStepsAmount(val)

    const renderStep = (step: stepProps, i:number) => {
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
                <Select selectId="timeline-type" options={['dot', 'line']} label="Choose timeline type:"
                        current={type} onUpd={(val) => updTimelineType(val)}/>

                <Select selectId="label-position" options={['up','down']} label="Choose label position:"
                        current={position} onUpd={(val) => updLabelsPosition(val)}/>

                <Range rangeId="steps-amount" label="Select steps amount:" max={steps.length} current={steps.length}
                       onUpd={(val) => updStepsAmount(val)}/>
            </div>
        </>
    )
}

export default Timeline