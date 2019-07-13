const minimumSwaps = (arr) => {

   let counter = 0;

   for (let i = arr.length; i > 0; i--) {
      let minval = Math.min(...arr); console.log("before", arr);
      let minIndex = arr.indexOf(minval);
      if (minval != arr[0]) {
         let temp = arr[0];
         arr[0] = arr[minIndex];
         arr[minIndex] = temp; console.log("after", arr);
         arr.splice(0, 1);
         counter++;
      }
      else {
         arr.splice(0, 1); console.log("in else case")
      }

   } return counter;
}
