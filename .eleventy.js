module.exports = function(c) {
	c.addWatchTarget('./src/style/')
	c.addFilter('displayDate', require('./src/filters/displayDate.js'))

		// human readable date
	c.addFilter("readableDate", dateObj => require('luxon')
		.DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy")
	)

		// To Support .yaml Extension in _data
	c.addDataExtension("yml", contents => require('js-yaml').safeLoad(contents) )

		// Copy Static Files to /_Site
	c.addPassthroughCopy({ "./src/admin/config.yml": "./admin/config.yml" })

	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'components',
		}
	}
}
