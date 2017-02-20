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
					<option>Apple</option>
					<option>Banana</option>
					<option>Orange</option>
				</select>
			</div>
		);
	}

}


export default LineSelection;