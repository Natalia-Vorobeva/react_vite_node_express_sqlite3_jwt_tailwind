function Card({ item, handleDelete, handleCompleted }) {

	return (
		<li
			className="transform w-full 	flex gap-2 justify-between shadow-lg  pt-2 rounded hover:fade-in">
			<div className="flex flex-col gap-6 pl-[1rem] pt-[1rem]  border-1 border-gray-800 text-end min-w-[8rem]">
				<span onClick={(e) => handleCompleted(e, item)} className={`italic ${item.completed === 1 ? "text-green-500 w-[100%] font-bold pointer-events-none" : "text-orange-700 font-bold cursor-pointer"}`}>
					{item.completed === 1 ? "completed" : "execute"}
				</span>
				<span onClick={(e) => handleDelete(e, item)} className="italic cursor-pointer text-[1rem] font-bold">
					delete
				</span>
			</div>
			<div className="w-[100%] p-2">
				<span className="w-0 h-0 border-[6px] border-solid border-transparent border-t-white">
				</span>
				<span className="w-0 h-0 border-[3px] border-solid border-transparent border-t-white">
				</span>
				<span className="w-0 h-0 border-[4px] border-solid border-transparent border-t-[#c2c3c3]">
				</span>
				<span className="w-0 h-0 border-[6px] border-solid border-transparent border-t-[#c2c3c3]">
				</span>
				<h3 className="font-light text-[#c6c4c4] text-[1.6rem] pl-[1rem] leading-tight ">
					{item.title}
				</h3>
				<p className="font-thin leading-tight text-[1.5rem] text-justify">
					{item.text}
				</p>
			</div>
		</li>
	)
}

export default Card