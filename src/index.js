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
	const [ country, setCountry ] = useState('us');

	useEffect(() => {
		fetch(`https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&apiKey=${process.env.REACT_APP_APIKEY}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(`https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&apiKey=${process.env.REACT_APP_APIKEY}`)
				setNews(data.articles)
			})
	}, [page, country])

	const getKeywords = (e) => {
		let keywords = e.target.value;
		let filtered = news.filter((item) => {
			return item.title.toLowerCase().indexOf(keywords) > -1;
		})
		setFiltered(filtered);
	}

	const buttons = [
		{country: 'au', name: 'Australia'},
		{country: 'nz', name: 'New Zealand'},
		{country: 'us', name: 'United States'},
		{country: 'ca', name: 'Canada'},
		{country: 'fr', name: 'France'},
		{country: 'gb', name: 'Great Britain'},
	]

	return(
		<React.Fragment>
			<Header keywords={getKeywords} />
			<div className="selectCountry">
				{buttons.map((button, i) => {
					return <button className={country === button.country ? 'active' : null} onClick={() => setCountry(button.country)} key={i} value={button.country}>{button.name}</button>
				})}
			</div>
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