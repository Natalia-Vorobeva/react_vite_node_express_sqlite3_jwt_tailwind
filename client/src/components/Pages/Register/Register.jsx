import { useState } from "react";
import { Link } from 'react-router-dom';
import Form from "../../Form/Form";

function Register({ register, msgReg }) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const [error, setError] = useState(null)

	const isValidEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email)
	}
	const valid = isValidEmail(email)

	const handleSubmit = (e) => {
		e.preventDefault()
		setError(null)
		if (isValidEmail(email)) {
			register({ name: name.trim(), email, pass })
			setError('')
		} else {
			setError('Email is invalid')
		}
	}	
	
	return (
		<div className="flex flex-col my-auto mx-auto w-[50%] h-[100%]">
			<h2>Register Page</h2>
			<Form id="register" onSubmit={handleSubmit}>
				<div
					className="pb-4">
					<input
						className="border w-full"
						id="register-user"
						type="text"
						placeholder="User"
						value={name}
						onChange={(e) =>
							setName(e.target.value)}
					/>
				</div>
				<div
					className="pb-4">
					<input
						className="border w-full"
						id="register-email"
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) =>
							setEmail(e.target.value.trim())}
					/>
				</div>
				<div>
					<input
						className="border w-full"
						id="register-password"
						type="text"
						placeholder="Password"
						value={pass}
						onChange={(e) =>
							setPass(e.target.value.trim())}
					/>
				</div>
				<div className="flex gap-8 pt-4 ">
					<button
						disabled={name == "" || pass.length < 4 || !valid}
						className="cursor-pointer px-6  py-2 rounded border disabled:text-gray-400 disabled:bg-[#e5e7eb] transition-bg duration-300 disabled:cursor-not-allowed">
						Register
					</button>
					<Link className="underline font-medium cursor-pointer hover:text-blue-500 hover:font-medium" to="/Login">Login</Link>
				</div>
			</Form>
			<p className="text-red-600">{msgReg}</p>
			<p className="text-red-600">{error}</p>
		</div>
	)
}

export default Register