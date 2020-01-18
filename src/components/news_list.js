import React from 'react';

// components
import NewsItem from './news_list_item';

const NewsList = ({news, setPage, page}) => {
	const theNews = news.map((item,i) => (
		<NewsItem key={i} item={item} />
	))
	
	return(
		<div className="newsList">
			{theNews}
			<div className="pageButtons">
				<button onClick={() => setPage(page - 1)}>Prev</button>
				{news.length === 20 && <button onClick={() => setPage(page + 1)}>Next</button>}
			</div>
		</div>
	)
}

export default NewsList;