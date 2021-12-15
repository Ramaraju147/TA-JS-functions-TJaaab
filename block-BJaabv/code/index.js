// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

const calculateDogAge = ( age = 0, conversionRate = 0 ) => {
  return age * conversionRate;
}

calculateDogAge( 4, 7 );


/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch( age = 0, moviesPerWeek = 0 ) {
  const maxAge = 85;
  let totalNumberOfMovies = ( maxAge - age ) * 52 * moviesPerWeek;
  return totalNumberOfMovies;
}

calculateMoviesToWatch( 25, 2 );



/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit( temperature = 0 ) {
  return `${( temperature * ( 9 / 5 ) ) + 32}°F is ${temperature}°C`
}

celsiusToFahrenheit( 32 );



/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

const fahrenheitToCelsius = ( temperature = 0 ) => {
  return `${temperature}°F is ${( ( temperature - 32 ) * ( 5 / 9 ) )}°C`
}

fahrenheitToCelsius( 73 );



/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

const pow = ( n, x ) => {
  if ( n < 0 ) {
    return "The number below 1 is not allowed";
  } else {
    return x ** n;
  }
}



// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

const sumOrProductOfN = ( num = 0, operation = "sum" ) => {
  let total = operation == "sum" ? 0 : 1;
  if ( operation == "sum" || operation == "product" ) {

    for ( let i = 1; i <= num; i++ ) {
      if ( operation == "sum" ) {
        total += i;
      } else if ( operation == "product" ) {
        total *= i;
      } 
    }
  }
  else {
    alert( `Not a valid Input` )
  }
  return total;
}



sumOrProductOfN(4, "sum"); // 10
sumOrProductOfN(4, "product"); // 24
sumOrProductOfN(4, "hello"); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

const sumOfN = ( num = 0 ) => {
  let total = 0;
  for ( let i = 1; i <= num; i++ ) {
    total += i
  }
  return total;
}

sumOfN( 10 );



/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

const sumOfMultiples = ( num = 0 ) => {
  let total = 0;
  for ( let i = 1; i <= num; i++ ) {
    if ( i % 5 == 0 || i % 7 == 0 ) {
      total += i
    }
  }
  return total;
}

sumOfMultiples( 20 );



/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/


const min = ( num1 = 0, num2 = 0 ) => num1 < num2 ? num1 : num2


min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

const type = ( val ) => typeof ( val );

type( "str" )

