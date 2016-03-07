## Modules

<dl>
<dt><a href="#module_charReplace">charReplace</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#charReplace">charReplace</a></dt>
<dd></dd>
</dl>

<a name="module_charReplace"></a>
## charReplace
<a name="charReplace"></a>
## charReplace
**Kind**: global class  

* [charReplace](#charReplace)
    * [new charReplace()](#new_charReplace_new)
    * [.replaceOne(source, charToFind, charToReplaceBy)](#charReplace+replaceOne) ⇒ <code>String</code>
    * [.replaceAll(source, charToFind:, charToReplaceBy:)](#charReplace+replaceAll) ⇒ <code>string</code>
    * [.replaceByCounter(source, charToFind:, charToReplaceBy:, numberOfOccurrences)](#charReplace+replaceByCounter) ⇒ <code>string</code>

<a name="new_charReplace_new"></a>
### new charReplace()
charReplace module

<a name="charReplace+replaceOne"></a>
### charReplace.replaceOne(source, charToFind, charToReplaceBy) ⇒ <code>String</code>
Replace one occurrence of charToFind with charToReplaceBy in source

**Kind**: instance method of <code>[charReplace](#charReplace)</code>  
**Returns**: <code>String</code> - source after character been replaced  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the string we want to manipulate |
| charToFind | <code>String</code> | the one character that will be searched in source |
| charToReplaceBy | <code>String</code> | the character that will replace charToFind |

**Example**  
```js
// returns test;testcharReplace.replaceOne('test%test','%',';')
```
<a name="charReplace+replaceAll"></a>
### charReplace.replaceAll(source, charToFind:, charToReplaceBy:) ⇒ <code>string</code>
Replace ALL occurrence of charToFind with charToReplaceBy in source

**Kind**: instance method of <code>[charReplace](#charReplace)</code>  
**Returns**: <code>string</code> - source after character been replaced  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the string we want to manipulate |
| charToFind: | <code>string</code> | the one character that will be searched in source |
| charToReplaceBy: | <code>string</code> | the character that will replace charToFind |

**Example**  
```js
// returns ;test;test;charReplace.replaceAll('%test%test%','%',';')
```
<a name="charReplace+replaceByCounter"></a>
### charReplace.replaceByCounter(source, charToFind:, charToReplaceBy:, numberOfOccurrences) ⇒ <code>string</code>
Replace number of occurrence of charToFind with charToReplaceBy in source based on numberOfOccurrences

**Kind**: instance method of <code>[charReplace](#charReplace)</code>  
**Returns**: <code>string</code> - source after character been replaced  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the string we want to manipulate |
| charToFind: | <code>string</code> | the one character that will be searched in source |
| charToReplaceBy: | <code>string</code> | the character that will replace charToFind |
| numberOfOccurrences | <code>number</code> | the number of occurrences you want to replace |

**Example**  
```js
// returns ;test;test%charReplace.replaceByCounter('%test%test%','%',';',2)
```
