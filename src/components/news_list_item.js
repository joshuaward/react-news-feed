import React from 'react';

const NewsItem = ({item}) => {
	return(
		<div className="newsList-item">
			<div className="image">
				<a href={item.url} target="_blank" rel="noopener noreferrer">
					{
						item.urlToImage === null ? <img src="https://images.pexels.com/photos/207130/pexels-photo-207130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt={item.publishedAt} /> : <img src={item.urlToImage} alt={item.publishedAt} />
					}
				</a>
			</div>
			<div className="content">
				<a href={item.url} className="title" target="_blank" rel="noopener noreferrer">
					<h3>{item.title}</h3>
				</a>
				<div className="details">
					<span className={item.author === null || item.author === '' ? 'author hide' : 'author'}>
						<i className="fas fa-user"></i>
						{item.author}
					</span>
					<span className={item.source.name === 'Fox News' ? 'source warning' : 'source'} title={item.source.name === 'Fox News' ? 'Not a reliable source' : ''}>
						{item.source.name === 'Fox News' ? <i className="fas fa-exclamation-circle"></i> : <i className="fas fa-bolt"></i>}
						
						{item.source.name}
					</span>
				</div>
				<div className="description">{item.description}</div>
				<a href={item.url} className="button" target="_blank" rel="noopener noreferrer">
					Read More
				</a>
			</div>
		</div>
	)
}

export default NewsItem;