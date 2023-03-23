export { renderTestComponent } from './test';

/**
 * Accepts a JS date object and returns a string in the format of "dd mmm yyyy"
 * @param date
 * @returns string
 */
export const prettyDate = (date: Date) => {
	return date.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
};
