import React, {Component} from 'react';
import './LineSelection.css';

class LineSelection extends Component {
	constructor(props)
	{
		super(props);
		
	}
	render()
	{
		return(
			<div className="LineSelection">
				<select id="soflow">
					<option>Berkshire</option>
					<option>Oakridge</option>
					<option>Duration</option>
				</select>
			</div>
		);
	}

}


export default LineSelection;