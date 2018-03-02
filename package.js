Package.describe({
	name: 'djk:ismobile',
	version: '0.4.1',
	// Brief, one-line summary of the package.
	summary: 'Load isMobile.min.js into your Meteor project.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/djkmiles/meteor-ismobile.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.on_use(function(api) {
	api.addFiles('isMobile.min.js', ['client']);
});
