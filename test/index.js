'use strict';
const charReplace = require('./../lib/char-replace.js');
const assert = require('assert');

describe('charReplace tests', () => {
    it('should replace one character when it is in the middle', (done) => {
        let source = 'test%test';
        let actual = charReplace.replaceOne(source,'%',';');
        assert.equal(actual,'test;test');
        done();
    });

    it('should replace one character when it is at the beginning', (done) => {
        let source = '%testtest';
        let actual = charReplace.replaceOne(source,'%',';');
        assert.equal(actual,';testtest');
        done();
    });

    it('should replace one character when it is at the end', (done) => {
        let source = 'testtest%';
        let actual = charReplace.replaceOne(source,'%',';');
        assert.equal(actual,'testtest;');
        done();
    });

    it('should not replace the character when it does not exist', (done) => {
        let source = 'testtest';
        let actual = charReplace.replaceOne(source,'%',';');
        assert.equal(actual,'testtest');
        done();
    });

    it('should replace all occurrences', (done) => {
        let source = '%test%test%';
        let actual = charReplace.replaceAll(source,'%',';');
        assert.equal(actual,';test;test;');
        done();
    });

    it('should replace occurrences by custom count', (done) => {
        let source = '%test%test%';
        let actual = charReplace.replaceByCounter(source,'%',';',2);
        assert.equal(actual,';test;test%');
        done();
    });
});
