
/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} input - The input string.
 * @returns {string} The capitalized string.
 */

function capitalizeWords(input) {
    return input.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Filters an array of users to return only active users.
 * @param {Array} users - An array of user objects.
 * @returns {Array} An array containing only active users.
 */
function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}

/**
 * Logs a user action with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The username.
 * @returns {string} The formatted log message.
 */
function logAction(action, username) {
    const timestamp = new Date().toISOString();

    return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = {
    capitalizeWords,
    filterActiveUsers,
    logAction
};
