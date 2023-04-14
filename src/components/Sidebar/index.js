import { Header } from './Header';
import { ChatCard } from './ChatCard';
import { useChatContext } from '@/context/chat.context';
import { useState } from 'react';
export const Sidebar = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const { chats, handleChatSelection, selectedChat } = useChatContext();

	return (
		<div className='sidebar-container'>
			<Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
			{chats &&
				Object.values(chats) &&
				Object.values(chats)
					.filter((chat) => {
						if (!searchQuery || searchQuery === '') {
							return true;
						}
						if (chat.title.includes(searchQuery) || chat.orderId.includes(searchQuery)) {
							return true;
						}
						return false;
					})
					.map((chat) => {
						return (
							<ChatCard
								key={chat.id}
								selected={selectedChat?.id === chat.id}
								onClickHandler={() => handleChatSelection(chat.id)}
								{...chat}
							/>
						);
					})}
		</div>
	);
};
