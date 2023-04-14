import { useChatContext } from '@/context/chat.context';

export const ChatCard = ({ messageData }) => {
	const { onOptionClick } = useChatContext();
	const timestamp = new Date(messageData.timestamp);
	return messageData.sender === 'BOT' ? (
		<div className='msgcard-row'>
			<div className='msgcard'>
				<div className='msg-title'>{messageData.message}</div>
				<div className='message-date timestamp'>{`${timestamp.getHours()}: ${timestamp.getMinutes()}`}</div>
				{messageData.messageType === 'optionedMessage' && (
					<div className='optionsContainer'>
						{messageData.options.map((option, idx) => (
							<div className='option' key={idx} onClick={() => onOptionClick()}>
								<div className='option-title'>{option.optionText}</div>
								<div className='option-title-sub'>{option.optionSubText}</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	) : (
		<div className='msgcard-row-inverse'>
			<div className='msgcard'>
				<div className='msg-title'>{messageData.message}</div>
				<div className='message-date timestamp'>{`${timestamp.getHours()}: ${timestamp.getMinutes()}`}</div>
			</div>
		</div>
	);
};
