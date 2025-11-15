function Card({ item, handleDelete, handleCompleted, hidden }) {

	return (
		<li
			className={`transform w-full 	flex gap-2 justify-between shadow-lg rounded visible opacity-1  transition-opacity duration-200 linear ${hidden}`}>
			<div className="flex flex-col gap-6 pl-[1rem] text-end min-w-[8rem]">
				<span onClick={(e) => handleCompleted(e, item)} className={`italic  border-b-2 ${item.completed === 1 ? "text-midgreen w-[100%] font-bold pointer-events-none" : "text-orange font-bold cursor-pointer"}`}>
					{item.completed === 1 ? "completed" : "execute"}
				</span>
				<span onClick={(e) => handleDelete(e, item)} className="italic cursor-pointer text-[1rem] font-bold">
					delete
				</span>
			</div>
			<div className="w-[100%] p-2">

				<span className="w-0 h-0 border-[6px] border-solid border-transparent border-t-silver-200	"/>
				<span className="w-0 h-0 border-[3px] border-solid border-transparent border-t-silver-300	animate-pulse border-t-silver-400"/>	
				<span className="w-0 h-0 border-[4px] border-solid border-transparent border-t-white animate-pulse"					></span>	
				<span className="w-0 h-0 border-[6px] border-solid border-transparent border-t-white	animate-pulse"/>


				<h3 className="font-medium text-midnight text-[1.6rem] pl-[1rem] leading-tight">
					{item.title}
				</h3>
				<p className="font-thin leading-tight text-midnight text-[1.3rem] text-justify">
					{item.text}
				</p>
			</div>
		</li>
	)
}

export default Card