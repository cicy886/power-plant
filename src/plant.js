// const hydrate = (plant) => {
//   return {
//     ...plant, 
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) +1
//   }
// };

// const sun = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// };

// const changePlantState = (plant, property) => {
//   return {
//     ...plant, 
//     [property]: (plant[property] || 0) + 1
//   }
// };

// const changeState = (state, prop) => {
//   return {
//     ...state, 
//     [prop]: (state[prop] || 0) + 1
//   }
// }

// const changeState = (state, prop, value) => ({
//   ...state,
//   [prop] : (state[prop] || 0) +value
// })


// const feed = changeState ("soil");
// const hydrate = changeState("water");
// const sun = changeState("light");
// feed(5)(plant)

// const blueFood = changeState("soil")(5)
// const greenFood = changeState("soil")(10)
// const yuckyFood = changeState("soil")(-5)
// blueFood(plant)

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop] : (state[prop] || 0) + value
    })
  }
}

const feed = changeState ("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

$(document).ready(function(){
  $('#feed').click(function(){
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil} `);
  });

  $('#show-state').click(function(){
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });
});
