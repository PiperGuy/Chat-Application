import { ChatCard } from './ChatCard';
const { useChatContext } = require('@/context/chat.context');

export const ChatPane = () => {
	const { selectedChat } = useChatContext();

	return (
		<div className='chatpane'>
			{selectedChat.messageList.length === 0 ? (
				<>
					<div className='no-msg-found'>Send a message to start chatting</div>
				</>
			) : (
				<div className='msg-container'>
					{selectedChat.messageList.map((messageData, i) => {
						return <ChatCard key={`${messageData.messageId}-${i}`} messageData={messageData} />;
					})}
				</div>
			)}
		</div>
	);
};
