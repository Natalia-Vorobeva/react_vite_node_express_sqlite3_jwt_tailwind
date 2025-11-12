import { useState } from "react";
import Form from "../Form/Form";

function Footer({ getTodo, handleScroll }) {

	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		getTodo({ title, text })
		setTitle('')
		setText('')
		handleScroll()
	}

	return (
		<Form id="todos" onSubmit={handleSubmit}>
			<div className="flex flex-col">
				<label className="text-[1.2rem]" htmlFor="title-todo">
					<span className="w-0 h-0 border-[5px] border-solid border-transparent border-t-[#e3e5e5]
					">
					</span>
					<span className="w-0 h-0 border-[3px] border-solid border-transparent border-t-[#c2c3c3]					
				animate-pulse border-t-[#a1aaaa]
				">
					</span>
					<span className="w-0 h-0 border-[4px] border-solid border-transparent border-t-[#c2c3c3]
					animate-pulse border-t-[#a1aaaa]"
					>
					</span>
					<span className="w-0 h-0 border-[6px] border-solid border-transparent border-t-[#c2c3c3] 
				animate-pulse border-t-[#a1aaaa]
				">
					</span>
					Title
				</label>
				<input
					id="title-todo" type="text"
					placeholder="add a title"
					className="focus:bg-[#f8fbfb] rounded"
					value={title}
					onChange={(e) =>
						setTitle(e.target.value)}
				/>
				<label className="text-[1.2rem] pl-[36px]" htmlFor="text-todo">
					Text</label>
				<input
					id="text-todo" type="text"
					className="focus:bg-[#f8fbfb]"
					placeholder="add a case"
					value={text}
					onChange={(e) =>
						setText(e.target.value)}
				/>
			</div>
			<button className="transition duration-600 rounded w-full text-[1.2rem] min-h-[3rem] text-white mt-[1.5rem] disabled:text-gray-700 disabled:text-white disabled:text-[1.2rem] disabled:font-bold 
			disabled:bg-gradient-to-l disabled:from-[#e8d7bc] disabled:via-from-[#684307] disabled:via-[#d9bd90] disabled:to-[#5d4e36]
			bg-gradient-to-r from-[#e8d7bc] via-[#d9bd90] to-[#5d4e36]" 				disabled={title == ""}>ok</button>

		</Form>
	)
}

export default Footer