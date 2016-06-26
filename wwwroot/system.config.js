/*
* This config is only used during development and build phase only
* It will not be available on production
*
*/

(function (global) {
	// wildcard paths
	var paths = {
		"*": "dist/*",
		"n:*": "node_modules/*"
	};

	// map tells the System loader where to look for things
	var map = {
		"app": "app",
		"test": "test",
		"rxjs": "n:rxjs",
		"@angular": "n:@angular",
		"@ngrx": "n:@ngrx",
		"ngrx-store-logger": "n:ngrx-store-logger",
		"angular2-in-memory-web-api": "n:angular2-in-memory-web-api",
		"ssv-core": "n:ssv-core",
		"ssv-ng2-core": "n:ssv-ng2-core",
		"lodash": "n:lodash"
	};

	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		"app": {
			defaultExtension: "js"
		},
		"test": {
			defaultExtension: "js"
		},
		"rxjs": {
			defaultExtension: "js"
		},
		"ngrx-store-logger": {
			main: "dist/index.js",
			defaultExtension: "js"
		},
		"angular2-in-memory-web-api": {
			defaultExtension: "js"
		},
		"ssv-core": {
			main: "dist/amd/index.js",
			defaultExtension: "js"
		},
		"ssv-ng2-core": {
			main: "dist/amd/index.js",
			defaultExtension: "js"
		}
	};

	var packageNames = [
		"@angular/common",
		"@angular/compiler",
		"@angular/core",
		"@angular/http",
		"@angular/platform-browser",
		"@angular/platform-browser-dynamic",
		"@angular/router",
		"@angular/router-deprecated",
		"@angular/testing",
		"@ngrx/core",
		"@ngrx/store",
		"@ngrx/effects",
		"lodash"
	];

	// add package entries for angular packages in the form "@angular/common": { main: "index.js", defaultExtension: "js" }
	packageNames.forEach(function (pkgName) {
		packages[pkgName] = { main: "index.js", defaultExtension: "js" };
	});

	var config = {
		map: map,
		packages: packages,
		paths: paths
	};

	// filterSystemConfig - index.html"s chance to modify config before we register it.
	if (global.filterSystemConfig) { global.filterSystemConfig(config); }

	System.config(config);

})(this);
