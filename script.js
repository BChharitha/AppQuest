document.addEventListener('DOMContentLoaded', () => {
    const suggestions = [
      "Use public transport twice a week",
      "Switch to LED light bulbs",
      "Reduce meat consumption",
      "Recycle household waste regularly",
      "Plant trees in your backyard"
    ];
  
    const suggestionsList = document.getElementById('suggestions-list');
    
    suggestions.forEach(suggestion => {
      const listItem = document.createElement('li');
      listItem.textContent = suggestion;
      suggestionsList.appendChild(listItem);
    });
  });
  
  function updateTracking() {
    const carbonFootprintElement = document.getElementById('carbon-footprint');
    let newCarbonFootprint = (Math.random() * 4).toFixed(1); // Simulating an update
    carbonFootprintElement.textContent = newCarbonFootprint;
    alert('Carbon footprint updated to ' + newCarbonFootprint + ' tons CO2/year');
  }
  
  function offsetNow() {
    alert('Redirecting to Offset Marketplace...');
  }
  