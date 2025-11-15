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
				<label className="text-[1.2rem]" htmlFor="title-todo text-white">

					Title
				</label>
				<input
					id="title-todo" type="text"
					placeholder="add a title"
					className="focus:bg-silver rounded bg-white"
					value={title}
					onChange={(e) =>
						setTitle(e.target.value)}
				/>
				<label className="text-[1.2rem] text-white" htmlFor="text-todo">
					Text</label>
				<input
					id="text-todo" type="text"
					className="focus:bg-silver  bg-white"
					placeholder="add a case"
					value={text}
					onChange={(e) =>
						setText(e.target.value)}
				/>
			</div>
			<button disabled={title == ""} className="mt-7 rounded w-full min-h-[3rem] text-[1.4rem] font-bold italic text-metal disabled:text-white disabled:bg-gradient-to-l disabled:from-transparent disabled:via-white	disabled:to-transparent bg-gradient-to-r from-darkrown via-white  to-darkrown">
				ok
			</button>
		</Form>


	)
}

export default Footer