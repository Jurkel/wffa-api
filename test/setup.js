require('dotenv').config();
const { expect } = require('chai');
const supertest = require('supertest');
const { PROD_LINK } = require('../src/config');

global.expect = expect;
global.supertest = supertest;
global.PROD_LINK = PROD_LINK;