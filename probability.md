# Probability

##  Probability

A base class for helper functions and constants

## Constructor

####  new Probability\(\) <a id="Probability"></a>

### Methods

####  complement\(sample, events, fraction\) → {number} <a id="complement"></a>

Returns complement probability of a set occuring against the sample space. Formula is: P\(D\) = 1-P\(Dc\)

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sample` |  array |  | The sample space |
| `events` |  array |  | The event set |
| `fraction` |  boolean |  false | If set to true then return an array of numerator and denominator for probability. |

**Throws:**

"only accepts arrays as parameters" 

####  euler\(\) → {number} <a id="euler"></a>

Returns Euler's constant at 26 digits 

####  factorial\(n\) → {number} <a id="factorial"></a>

Returns a calculated factorial number of a given number n!.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `n` |  number | The factorial number. let n = 4; 4! = 1 \* 2 \* 3 \* 4 = 24 |

####  getSetAvg\(arr\) → {number} <a id="getSetAvg"></a>

Returns average of the sample space if the sample space contains only numbers

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `arr` |  array | The array containing the Sample space set |

**Throws:**

* getSetAvg\(\) parameter must be an array
* getSetAvg\(\) parameter must be an array of numbers to use this function

####  intersection\(sample, eventA, eventB, fraction\) → {number} <a id="intersection"></a>

Returns intersection probability of two events occuring against the sample space. Formula is: P\(B\)\*P\(A\|B\)

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sample` |  array |  | The sample space |
| `eventA` |  array |  | The event set |
| `eventB` |  array |  | The event set |
| `fraction` |  boolean |  false | If set to true then return an array of numerator and denominator for probability. |

**Throws:**

"only accepts arrays as parameters" 

####  marginal\(sample, events, fraction\) → {number} <a id="marginal"></a>

Returns probability of one set occuring against the sample space

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sample` |  array |  | The sample space |
| `events` |  array |  | The event set |
| `fraction` |  array |  false | If set to true returns probability as array of numerator and denominator |

####  odds\(chance, isString, winLose\) → {array\|string} <a id="odds"></a>

Returns the odds based on the chance that an event occurs versus that it won't.  
 Formula is p / \(1 - p\).

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `chance` |  number |  | A percentage that an event will occur |
| `isString` |  boolean |  false | If set to true will return a string representation of the odds as a ratio. |
| `winLose` |  string |  | Must be "win" or "lose". If 25% chance of winning then odds are 1:3, if losing, 3:1. |

**Throws:**

odds\(\) chance parameter must be a number 

####  toFraction\(dec\) → {array\|string} <a id="toFraction"></a>

Returns an array or string with numerator and denominator.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `dec` |  number | The Decimal to return a fraction for. |

####  union\(sample, eventA, eventB, fraction\) → {number} <a id="union"></a>

Returns union probability of two events occuring against the sample space. Formula is: P\(A\)+P\(B\)-P\(A⋂B\)

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sample` |  array |  | The sample space |
| `eventA` |  array |  | The event set |
| `eventB` |  array |  | The event set |
| `fraction` |  boolean |  false | If set to true then return an array of numerator and denominator for probability. |

**Throws:**

"only accepts arrays as parameters"

