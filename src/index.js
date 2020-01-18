import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
// import JSON from './db.json';

// components 
import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';

const App = () => {
	const [ news, setNews ] = useState([]);
	const [ filtered, setFiltered ] = useState([]);
	const [ page, setPage ] = useState(1);

	useEffect(() => {
		fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&apiKey=${process.env.REACT_APP_APIKEY}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data.articles)
				setNews(data.articles)
			})
	}, [page])

	const getKeywords = (e) => {
		let keywords = e.target.value;
		let filtered = news.filter((item) => {
			return item.title.toLowerCase().indexOf(keywords) > -1;
		})
		setFiltered(filtered);
	}

	return(
		<React.Fragment>
			<Header keywords={getKeywords} />
			<NewsList news={filtered.length === 0 ? news : filtered} setPage={setPage} page={page}>
				<br/>
				<h1>News List</h1>
			</NewsList>
			<Footer />
		</React.Fragment>
	)
}

export default App;

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);