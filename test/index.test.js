const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
    test('capitalizes the first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('returns an empty string when given an empty string', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles strings with special characters', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
    });

    test('handles single-word strings', () => {
        expect(capitalizeWords('javascript')).toBe('Javascript');
    });
});

describe('filterActiveUsers', () => {
    test('returns only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Charlie', isActive: true }
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Charlie', isActive: true }
        ]);
    });

    test('returns an empty array when all users are inactive', () => {
        const users = [
            { name: 'Bob', isActive: false },
            { name: 'John', isActive: false }
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('returns an empty array when given an empty array', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe('logAction', () => {
    test('generates the correct log string', () => {
        const result = logAction('login', 'Alice');

        expect(result).toMatch(
            /^User Alice performed login at .+$/
        );
    });

    test('handles missing action or username', () => {
        const result = logAction('', '');

        expect(result).toMatch(/^User  performed  at .+$/);
    });

    test('includes the action and username in the log', () => {
        const result = logAction('logout', 'Bob');

        expect(result).toContain('User Bob performed logout at');
    });
});