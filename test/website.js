'use strict';

var helpers = require('./helpers'),
    mocks = require('./mocks');

var configPackage = {
    relativePath: '../../config',
    instance: {
        subscription: true
    }
};

var loggerPackage = {
    relativePath: 'winston',
    instance: new mocks.Logger()
};

var testSet = [{
    mockedPackages: [
        configPackage, loggerPackage
        // , {
        //     relativePath: './requeststrategy',
        //     instance: new mocks.RequestStrategy(),
        //     ensureCallMethods: ['mustSessionLessArea']
        // }
    ],
    httpMethod: 'get',
    route: '/'
}];

describe('website routes', function() {
    helpers.testRoutes('../server/routes/website', testSet);
});