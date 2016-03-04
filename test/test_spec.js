import {expect} from 'chai';

describe('numbers', () => {
	describe('a number', () => {
		function increment(currentState) {
			return currentState + 1;
		}

		it('will increment', () => {
			let state = 42;
			let nextState = increment(state);

			expect(nextState).to.equal(43);
		});
	});
});