# predictive-text-js
Predictive text class written in JS


# Live Example 
[open on vercel](https://predictive-text-js.vercel.app/)


# basic usage 

```javascript 

var predictive = new PredictiveText();
predictive.onReady.then(() => {
    console.log(predictive.getWords("2222294")); //["abacate"]
    console.log(predictive.getWords("262")); // ["ana", "ama", "amá", "anã", "boa", "coa", "coá"]
    console.log(predictive.getWords("2222283")); // ["abacate"]
});
```


# TODO
1. Dicionary Selector
2. ADD other dictionaries
