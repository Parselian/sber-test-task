import React from "react"
import classes from "./Select.module.css"
import SelectProps from "@/components/Select/Select.props"

const Select = ({options, label, selectId, onUpd, current}: SelectProps): JSX.Element => {
    return (
        <div className={classes.select}>
            {label && <label htmlFor={selectId}>{label}</label>}

            <select id={selectId} onChange={(e) => onUpd(e.target.value)} defaultValue={current}>
                {
                    options.map(option => (<option value={option} key={option}>{option.toUpperCase()}</option>))
                }
            </select>
        </div>
    )
}

export default Select