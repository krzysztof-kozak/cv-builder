import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a text on screen', () => {
	render(<App />);

	const text = 'Start here';
	const element = screen.getByTestId('app-test');

	expect(element).toHaveTextContent(text);
});
