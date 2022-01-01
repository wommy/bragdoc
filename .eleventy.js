module.exports = function(c) {
	c.addWatchTarget('./src/style/')
	c.addFilter('displayDate', require('./src/filters/displayDate.js'))

	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'components',
		}
	}
}
