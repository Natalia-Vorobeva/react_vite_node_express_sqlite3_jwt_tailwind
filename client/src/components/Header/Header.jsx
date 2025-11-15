function Header({ handleLogout }) {

	return (
		<div className="w-full shadow-lg
		bg-gradient-to-t from-darkbrown  via-white to-silver-100 ">
			<button className="transition duration-300 bg-metal  flex italic w-full flex-row-reverse pr-1 text-white  hover:shadow-lg bg-gradient-to-r from-darkrown via-midgray to-silver-300" onClick={handleLogout}>
				
				Logout
			</button>
			<h1 className="italic text-metal font-bold pt-[.5rem] pb-[1.5rem] pl-[2rem] text-[3.5rem] transition duration-600 hover:translate-x-4">			
				ToDoList					
					</h1>
		</div>
	)
}

export default Header;