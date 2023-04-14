import { useChatContext } from '@/context/chat.context';

export const Header = ({ setSearchQuery, searchQuery }) => {
	const { selectedChat } = useChatContext();
	return (
		<div className='chatwindow-header'>
			<div className='card-image-container'>
				<img className='card-image' src={selectedChat?.imageURL} />
			</div>
			<div className='chatwindow-title'>{selectedChat?.title}</div>
		</div>
	);
};
