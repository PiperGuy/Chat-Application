import axios from 'axios';

export const getAllChats = async () => {
	const { data } = await axios.get('https://my-json-server.typicode.com/codebuds-fk/chat/chats');
	return data;
};
