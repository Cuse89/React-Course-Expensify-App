import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should add up multiple expenses correctly', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});

test('should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
})

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0)
})