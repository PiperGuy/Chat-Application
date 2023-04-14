import { Header } from './Header';
import { ChatPane } from './ChatPane';
import { Footer } from './Footer';
import { useChatContext } from '@/context/chat.context';

export const ChatWindow = () => {
	const { onReply } = useChatContext();
	return (
		<div className='chatwindow-container'>
			<Header />
			<ChatPane />
			<Footer onReply={onReply} />
		</div>
	);
};
