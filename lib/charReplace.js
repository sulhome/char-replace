'use strict';

/**
 * charReplace module
 * @module charReplace
 * @class charReplace
 */
class charReplace {
    /**
     * Replace one occurrence of charToFind with charToReplaceBy in source
     * @param {String} source the string we want to manipulate
     * @param {String} charToFind the one character that will be searched in source
     * @param {String} charToReplaceBy the character that will replace charToFind
     * @example
     * // returns test;test
     * charReplace.replaceOne('test%test','%',';')
     * @returns {String} source after character been replaced
     */
    replaceOne (source, charToFind, charToReplaceBy) {
        let index = source.indexOf(charToFind);
        if (index == -1) {
            return source;
        }
        let subString = source.substring(0, index);
        let otherHalf = source.substring(subString.length + 1);

        return subString + charToReplaceBy + otherHalf;
    }

    /**
     * Replace ALL occurrence of charToFind with charToReplaceBy in source
     * @param {String} source the string we want to manipulate
     * @param {string} charToFind: the one character that will be searched in source
     * @param {string} charToReplaceBy: the character that will replace charToFind
     * @example
     * // returns ;test;test;
     * charReplace.replaceAll('%test%test%','%',';')
     * @returns {string} source after character been replaced
     */
    replaceAll (source, charToFind, charToReplaceBy) {
        while(source.indexOf(charToFind) != -1){
            source = this.replaceOne(source,charToFind,charToReplaceBy);
        }
        return source;
    }

    /**
     * Replace number of occurrence of charToFind with charToReplaceBy in source based on numberOfOccurrences
     * @param {String} source the string we want to manipulate
     * @param {string} charToFind: the one character that will be searched in source
     * @param {string} charToReplaceBy: the character that will replace charToFind
     * @param {number} numberOfOccurrences the number of occurrences you want to replace
     * @example
     * // returns ;test;test%
     * charReplace.replaceByCounter('%test%test%','%',';',2)
     * @returns {string} source after character been replaced
     */
    replaceByCounter (source, charToFind, charToReplaceBy, numberOfOccurrences) {
        for(let i=0; i<numberOfOccurrences; i++){
            source = this.replaceOne(source,charToFind,charToReplaceBy);
        }
        return source;
    }
}

/** @exports charReplace */
module.exports = new charReplace();