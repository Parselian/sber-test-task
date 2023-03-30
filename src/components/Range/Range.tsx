import React from "react"
import classes from "./Range.module.css"
import RangeProps from "@/components/Range/Range.props";

const Range = ({min = 1, onUpd, ...props}: RangeProps): JSX.Element => {
    return (
        <div className={classes.range}>
            {props.label && <label htmlFor={props.rangeId}>{props.label}</label>}
            <input id={props.rangeId} type="range" min={min} max={props.max} defaultValue={props.current}
                   onChange={(e) => onUpd(+e.target.value)}/>
        </div>
    )
}

export default Range