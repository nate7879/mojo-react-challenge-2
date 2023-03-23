import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { data } from '../../mock';
import { prettyDate, renderTestComponent } from '../../utils';
import { Article } from './Article';

describe('<Article />', () => {
	const article = data.articles[0];

	const renderComponent = () => renderTestComponent(<Article article={article} />);

	it('should render the article published date', () => {
		renderComponent();

		const expectedDateString = prettyDate(new Date(article.publishedAt));

		expect(screen.getByText(expectedDateString)).toBeInTheDocument();
	});

	it('should render the article text', () => {
		renderComponent();

		expect(screen.getByRole('heading')).toHaveTextContent(article.title);
		expect(screen.getByText(article.description)).toBeInTheDocument();
		expect(screen.getByText(`By ${article.source}`)).toBeInTheDocument();
	});

	it('should render the article thumbnail', () => {
		renderComponent();

		expect(screen.getByRole('img')).toHaveAttribute('src', article.thumbnailUri);
	});

	it('should render the article link', () => {
		renderComponent();

		expect(screen.getByRole('link')).toHaveAttribute('href', article.url);
	});
});
