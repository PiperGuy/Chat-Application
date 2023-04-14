import { Sidebar } from './Sidebar';
import { ChatWindow } from './ChatWindow';
import { useChatContext } from '@/context/chat.context';
export const Layout = ({ children }) => {
	const { selectedChat } = useChatContext();
	return (
		<div className='layout'>
			<Sidebar />
			{selectedChat && <ChatWindow />}
		</div>
	);
};
