/* eslint-disable react/prop-types */
export default function Row(props) {
    return (
        <div className="row">
        <span className="num">{props.num}</span>
        <div className="autocomplete">
            <input type="text" name="field" className="course" />
        </div>
        <select name="field_grade" className="grade">
            <option value="none" />
            <option value={4}>A+</option>
            <option value="3.8">A</option>
            <option value="3.6">A-</option>
            <option value="3.4">B+</option>
            <option value="3.2">B</option>
            <option value={3.0}>B-</option>
            <option value="2.8">C+</option>
            <option value="2.6">C</option>
            <option value="2.4">C-</option>
            <option value="2.2">D+</option>
            <option value={2.0}>D</option>
            <option value={0}>F</option>
        </select>
        <div className="formatAndPercentageSign">
            <input type="number" min={0} max={4} name="field" className="format"/>
            <span className="percentageSign">%</span>
        </div>
        <input type="number" defaultValue={3} name="field_credit" className="credits"/>
        <div className="remove-icon-course" title="Remove this row">
            <svg version="1.1" className="x_remove" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 95.939 95.939" xmlSpace="preserve">
            <g>
                <path d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
                    c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
                    c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
                    c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
                    c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97
                    z" />
            </g>
            </svg>
        </div>
        </div>
    )
}