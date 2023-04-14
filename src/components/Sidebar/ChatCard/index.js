export const ChatCard = ({
	imageURL,
	id,
	orderId,
	title,
	latestMessageTimestamp,
	messageList,
	onClickHandler,
	selected
}) => {
	const latestMessageText =
		messageList && Array.isArray(messageList) && messageList.length > 0
			? messageList[messageList.length - 1].message
			: null;

	const formatedDate = new Date(latestMessageTimestamp);

	return (
		<div className={`${selected ? 'chatcard active' : 'chatcard'}`} onClick={onClickHandler}>
			<div className='chatcard-pre-container'>
				<div className='card-image-container'>
					<img className='card-image' src={imageURL} />
				</div>
				<div>
					<div className='chatcard-title'>{title}</div>
					<div className='chatcard-title'>{orderId}</div>
					{latestMessageText && <div className='message-preview'>{latestMessageText}</div>}
				</div>
			</div>

			<div>
				<span className='timestamp'>{`${formatedDate.getDay()}/${formatedDate.getMonth()}/${formatedDate.getFullYear()}`}</span>
			</div>
		</div>
	);
};
