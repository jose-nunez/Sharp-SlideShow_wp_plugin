import React from 'react';
import ReactDOM from 'react-dom';

import 'appStyles';

const MyComponent = ()=>{
	return (
		<div className="holi">REact is working</div>
	)
};

ReactDOM.render(
	<MyComponent></MyComponent>,
	document.getElementById('app')
);