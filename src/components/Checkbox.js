import React from 'react'

export default function Checkbox({ check, handelCheckBox }) {
    return (
    <>
        <div className="form-check">
        <input
            className="form-check-input"
            type="checkbox"
            id={`check${check.id}`}
            checked={check.state}
            onChange={(e) => {
                handelCheckBox(check.id);
            }}
        />
        <label className="form-check-label" htmlFor={`check${check.id}`}>
            {check.title}
        </label>
        </div>
    </>
    );
}
