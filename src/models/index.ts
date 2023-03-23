export interface Podcast {
	id: string;
	title: string;
	url: string;
	thumbnailUri: string;
}

export interface Article {
	id: string;
	description: string;
	thumbnailUri: string;
	publishedAt: string;
	source: string;
	title: string;
	url: string;
}

export type SpotlightArticle = Pick<Article, 'id' | 'url' | 'title' | 'description' | 'thumbnailUri'>;
