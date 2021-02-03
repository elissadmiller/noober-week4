async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.log("my database:")
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  let rides = json
  let numberOfRides = rides.length
  //console.log(rides)

  //1. Loop through all of the available rides contained within the json variable provided. 
  for(let i = 0; i < numberOfRides; i++) {
    let ride = rides[i]
    console.log(ride) 

    if (ride.length > 1) {
      levelOfService = 'Noober Pool'
    } else if (ride[0].purpleRequested) {
      levelOfService = 'Noober Purple'
    } else if (ride[0].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
    } else {
      levelOfService = 'Noober X'
    }

    let element = document.querySelector('.rides')
element.insertAdjacentHTML('beforeend', `
<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
       <i class="fas fa-car-side"></i>
       <span>${levelOfService}</span>
     </h1>`)


console.log(levelOfService)
    //2. Each element of the Array is another Array containing the "legs" of the ride. As in the last homework, any ride with more than one leg is considered a "Noober Pool". Traverse this data – you will need more than one loop (3 points) – 
    let numberOfLegs = ride.length
  //  console.log(numberOfLegs)


for(let j = 0; j < numberOfLegs; j++) {
 let leg = ride[j]
//console.log(legs)


let element = document.querySelector('.rides')
element.insertAdjacentHTML('beforeend', `
     <div class="border-4 border-grey-500 p-4 my-4 text-left">
       <div class="flex">
         <div class="w-1/2">
           <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
           <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
         </div>
         <div class="w-1/2 text-right">
           <span class="rounded-xl bg-purple-600 text-white p-2">
           ${leg.numberOfPassengers} passengers
           </span>
         </div>
       </div>
       <div class="mt-4 flex">
         <div class="w-1/2">
           <div class="text-sm font-bold text-gray-600">PICKUP</div>
           <p>${leg.pickupLocation.address}</p>
           <p>${leg.pickupLocation.city}',' ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
         </div>
         <div class="w-1/2">
           <div class="text-sm font-bold text-gray-600">DROPOFF</div>
           <p>${leg.dropoffLocation.address}</p>
           <p>${leg.dropoffLocation.city}',' ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
         </div>
       </div>
     </div>`)

 }

  numberOfPassengers = rides.numberOfPassengers
  console.log(numberOfPassengers)

  
 }
   }

  



window.addEventListener('DOMContentLoaded', pageLoaded)

//

//3. print the level of service and information on the ride as illustrated by the design mockup (3 points). Remember that we're simply working with strings that contain HTML. Each ride has a number of legs; need to decide based on how many legs are in the ride what kind of noober service needs to be provided. Look at HTML and select the html elements that I need to replace. 
//4. For each iteration of the loop, you will need to construct two strings that will be inserted into the HTML element with the class name rides – one for the level of service and another for the 1-or-more legs of the ride.
//5.  Empty the rides div element; you should be left with only an empty div element in your HTML, but a page full of data.
//beforeend
//element.insertAdjacent HTML('beferend', renderProduct(proudct))
//let element = document.querySelector('.proucts')

//look at the data and read it. Write notes about what's in each ride. Ride level of service is something that I need to infer witha  conditional. Render the data I have in the data set. See how much data I can render to the page. 

//conditional is what I did last week.