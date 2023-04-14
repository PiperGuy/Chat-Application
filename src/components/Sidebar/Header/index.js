export const Header = ({ setSearchQuery, searchQuery }) => {
	return (
		<div className='sidebar-header'>
			<div className='sidebar-title'>Filter by Title/ Order ID</div>
			<div>
				<input
					className='sidebar-search'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					type='text'
					placeholder='Start typing to Search'
				/>
			</div>
		</div>
	);
};
