var assert = require('assert');
var graphql_1 = require("graphql");
var values_1 = require("graphql/type/definition");

var st = graphql_1.GraphQLScalarType;
var st2 = values_1.GraphQLScalarType;

assert(st === st2);
