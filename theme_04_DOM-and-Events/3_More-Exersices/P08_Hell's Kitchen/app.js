function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputTextarea = document.querySelector("#inputs textarea");
   const paragraphBestRestaurant = document.querySelector("#bestRestaurant p");
   const paragraphWorkers = document.querySelector("#workers p");

   let restaurants = {};

   function onClick() {
      let input = Array.from(JSON.parse(inputTextarea.value));
      for (const line of input) {
         let tokens = line.split(" - ");
         let restaurant = tokens[0];
         let workers = tokens[1]
            .split(", ")
            .map((text) => text.split(" "))
            .reduce((data, [worker, salary]) => {
               data[worker] = Number(salary);
               return data;
            }, {});

         if (!restaurants.hasOwnProperty(restaurant)) {
            restaurants[restaurant] = {
               name: restaurant,
               workers,
               bestSalary() {
                  return Math.max(...Object.values(workers));
               },

               averageSalary() {
                  let salaries = Object.values(workers);
                  let sum = salaries.reduce((a, b) => a + b, 0);
                  return sum / salaries.length || 0;
               }
            }

         } else {
            let currentWorkers = restaurants[restaurant].workers;
            for (const worker in workers) {
               currentWorkers[worker] = workers[worker];
            }
         }

      }

      let restaurantsArr = Object.values(restaurants);

      bestRestaurantObj = restaurantsArr.reduce((best, current) => {
         if (!best || current.averageSalary() > best.averageSalary()) {
            return current;
         }
         return best;
      }, undefined);

      paragraphBestRestaurant.textContent = `Name: ${bestRestaurantObj.name} Average Salary: ${bestRestaurantObj.averageSalary().toFixed(2)} Best Salary: ${bestRestaurantObj.bestSalary().toFixed(2)}`;

      console.log (bestRestaurantObj.workers);
      let workersArr = Object.entries(bestRestaurantObj.workers);
      let workersArrSorted = workersArr.sort((([_workerA, salaryA], [_workerB, salaryB]) => {
         return salaryB - salaryA;
      }));

      paragraphWorkers.textContent = workersArrSorted
         .map(([worker, salary]) => `Name: ${worker} With Salary: ${salary}`)
         .join(" ");

   }
}