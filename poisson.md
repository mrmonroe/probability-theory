# Poisson

##  Poisson

The Famous Poisson Distribution!  
 Expresses the probability of a given number of events occurring in a fixed interval of time.

## Constructor

####  new Poisson\(\) <a id="Poisson"></a>

### Methods

####  fisher\(\) → {number} <a id="fisher"></a>

Returns the Fisher Information for the current Poisson Distribution 

####  getEvAvg\(\) → {number} <a id="getEvAvg"></a>

Gets the average event for the instance 

####  kurtosis\(\) → {number} <a id="kurtosis"></a>

Returns the kurtosis of the distribution 

####  mean\(\) → {number} <a id="mean"></a>

Returns Returns the mean of the distribution 

####  pmf\(ev, prec\) → {array} <a id="pmf"></a>

Poisson Distribution Probability Mass Function

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `ev` |  array |  | The set of events for the distribution |
| `prec` |  number |  3 | The precision for returning the probability calculations |

####  setEvAvg\(ev\) <a id="setEvAvg"></a>

Sets the average event for the instance

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `ev` |  number | The average number of times an event occurs in a given time |

####  skewness\(\) → {number} <a id="skewness"></a>

Returns the skewness of the distribution 

####  variance\(\) → {number} <a id="variance"></a>

Returns the variance of the distribution

