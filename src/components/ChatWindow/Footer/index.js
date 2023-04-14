import { useState } from 'react';
export const Footer = ({ onReply }) => {
	const [text, setText] = useState('');

	return (
		<div className='footer'>
			<input
				className='footer-textbox'
				type='text'
				value={text}
				placeholder='Start typing to Search'
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={() => onReply(text || 'hello')} className='send-button'>
				Send
			</button>
		</div>
	);
};
