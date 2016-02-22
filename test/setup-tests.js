'use strict';

require('babel-register');
require('babel-polyfill');
require('react-native-mock/mock');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');

chai.expect;
chai.use(chaiAsPromised);

global.expect = chai.expect;
