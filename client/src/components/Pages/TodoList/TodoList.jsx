import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { rainPoop, poopetti } from 'poopetti'
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import Card from '../../Card/Card.jsx';

function TodoList({ logout, data, getTodo, todos, deleteItem, updateItem, hidden }) {

	const navigate = useNavigate()
	const ref = useRef(null)

	const handleLogout = () => {
		logout()
		navigate('/login')
	}
	
	const handleDelete = (e, item) => {
		e.preventDefault()
		deleteItem(item)		
	}
	
	const handleCompleted = (e, item) => {
		e.preventDefault()
		updateItem({ ...item, completed: 1 })
			rainPoop({
			emoji: ['๋࣭ ⭑', '𓇼', '✮', '๋࣭ ⭑', '⋆⭒˚｡⋆', '๋࣭ ⭑', '༄', '✮', '✮⋆˙', '𓇼'],
			duration: 4500,
			density: 2500,
		})
	}
	const handleScroll = () => ref.current.scrollIntoView({ top: 0, behavior: 'smooth' })
	
	return (
		<div className="min-h-full max-h-full flex flex-col">
			<Header data={data} handleLogout={handleLogout} />
			<div className="overflow-auto  grow-[1] min-h-[100%]">
				<ol ref={ref} className="flex flex-col h-screen-60">
					{
						todos?.map((item, index) => {
							return <Card key={`${item}+${index}/todo`} item={item} index={index} hidden={hidden} handleDelete={handleDelete} handleCompleted={handleCompleted} />
						})
					}
				</ol>
			</div>
			<div className="px-1  h-60 w-full  border-t-2">
				<Footer getTodo={getTodo} handleScroll={handleScroll} />
			</div>
		</div>
	)
}

export default TodoList