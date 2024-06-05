import Link from 'next/link'

const Header = () => {
	return(
		<header>
			<span className="">Многопроильный Медицинский центр "Хэлс Мед"</span>
			<nav className="topnav">
				<Link href="/">Главная</Link>
				<Link href="/about">О клинике</Link>
				<Link href="/price">Стоимость услуг</Link>
				<Link href="/doctors">Доктора</Link>
				<Link href="/contacts">Контакты</Link>
			</nav>
		</header>
		)
}

export default Header