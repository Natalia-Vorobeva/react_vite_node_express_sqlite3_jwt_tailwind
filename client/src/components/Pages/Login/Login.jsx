import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../Form/Form';

const Login = ({ login, msg }) => {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		login({ email, pass })
	}

	return (
		<div className="flex flex-col my-auto mx-auto w-[50%] h-[100%]">
			<h2>Login Page</h2>
			<Form id="login" onSubmit={handleSubmit}>
				<div
					className="pb-4">
					<input
						className="border w-full"
						id="login-email"
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) =>
							setEmail(e.target.value.trim())}
						required
					/>
				</div>
				<div>
					<input
						className="border w-full"
						id="login-password"
						type="text"
						placeholder="Password"
						value={pass}
						onChange={(e) =>
							setPass(e.target.value.trim())}
						required
					/>
				</div>
				<div className="flex gap-8 pt-4 ">
					<button className="cursor-pointer px-6 py-2 border rounded">Login</button>
					<Link className="underline font-medium cursor-pointer hover:text-midgreen hover:font-medium" to="/register">Create</Link>
				</div>
			</Form>
			<p className="text-red-600">{msg}</p>
		</div>
	)
}

export default Login