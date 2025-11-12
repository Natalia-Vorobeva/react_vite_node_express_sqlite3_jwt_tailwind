function Header({ handleLogout }) {

	return (
		<div className="w-full shadow-lg bg-gradient-to-t from-[#5d4e36]  via-white to-[#d5be95] ">
			<button className="transition duration-300 bg-white flex italic w-full flex-row-reverse pr-1  hover:shadow-lg" onClick={handleLogout}>
				Logout
			</button>
			<h1 className="italic text-[#eadac8] font-normal pt-[.5rem] pb-[1.5rem] pl-[2rem] text-[3.5rem] transition duration-600 hover:translate-x-4">ToDoLIst</h1>
		</div>
	)
}

export default Header;