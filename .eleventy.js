module.exports = function(c) {
	c.addWatchTarget('./src/style/')
	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'components',
		}
	}
}
