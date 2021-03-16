// AhoCorasick implmentation, testing out on swagger yaml file
const yaml = require('js-yaml');
const fs   = require('fs');

const doc = yaml.load(fs.readFileSync('../data/swagger.yaml', 'utf8'));
const string_obj = JSON.stringify(doc)

var AhoCorasick = require('ahocorasick');
var ac = new AhoCorasick(['storage', 'uuid']);
var start = new Date().getTime();
var results = ac.search(string_obj);
var end = new Date().getTime();
var time = end - start;

console.log(results)
console.log("Took " + time/1000 + "seconds.")





