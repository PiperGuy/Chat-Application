import { getAllChats } from '@/services/chat.service';
import { arrayToObjectMapper } from '@/utils/helper';
import { createContext, useContext, useEffect, useState } from 'react';

const ChatContext = createContext({
	chats: {},
	sendOptionResponse: () => {},
	selectedChat: {},
	handleChatSelection: () => {}
});

const ChatProvider = ({ children }) => {
	const [chats, setChats] = useState({});
	const [selectedChat, setSelectedChat] = useState();
	useEffect(() => {
		serviceCall();
	}, []);

	const serviceCall = async () => {
		const res = await getAllChats();
		if (res && Array.isArray(res)) setChats(arrayToObjectMapper(res));
	};

	const sendOptionResponse = (id, text = 'I want to recive a callback from flipkart') => {};

	const handleChatSelection = (id) => {
		if (id) {
			setSelectedChat(chats[id]);
		}
	};

	const onReply = (msg) => {
		const newMessageList = selectedChat.messageList;
		const newState = {
			message: msg,
			messageId: `msg${Math.random()}`,
			timestamp: new Date().toUTCString(),
			messageType: 'text',
			sender: 'USER'
		};

		newMessageList.push(newState);
		setSelectedChat((prev) => ({
			...prev,
			messageList: newMessageList
		}));
		setChats((prev) => ({
			...prev,
			[selectedChat.id]: {
				...prev[selectedChat.id],
				messageList: newMessageList
			}
		}));
	};

	const onOptionClick = () => {
		onReply('I want to receive a call from flipkart');
	};

	const value = { chats, sendOptionResponse, selectedChat, handleChatSelection, onReply, onOptionClick };

	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

const useChatContext = () => {
	const context = useContext(ChatContext);

	if (!context) {
		throw new Error('Can be accessed only within the provider');
	}
	return context;
};

export default ChatProvider;
export { useChatContext };
