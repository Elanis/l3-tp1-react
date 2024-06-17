import { render, screen
			} from '@testing-library/react';
import { describe, expect, it 
											} from 'vitest';
import {
  MemoryRouter
} from 'react-router-dom';

import View from './view';

describe('Header', () => {
	it(`It renders with 0`, () => {
		render(
			<MemoryRouter>
				<View count={0} />
			</MemoryRouter>
		);
		expect(
			screen.getAllByText(
				new RegExp('Counter: 0', 'i')
			)[0]
		).toBeInTheDocument();
	});
});