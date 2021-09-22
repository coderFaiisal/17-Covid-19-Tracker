// top banner data show
const getData = () => {
  const url = "https://api.covid19api.com/summary";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const worldData = data.Global;
      const { NewDeaths, NewConfirmed, TotalConfirmed, TotalDeaths } =
        worldData;

      const newCases = document.getElementById("new-cases");
      newCases.innerText = NewConfirmed;

      const newDeaths = document.getElementById("new-deaths");
      newDeaths.innerText = NewDeaths;

      const totalCases = document.getElementById("total-cases");
      totalCases.innerText = TotalConfirmed;

      const totalDeaths = document.getElementById("total-deaths");
      totalDeaths.innerText = TotalDeaths;
    });
};
getData();

// search by county name and show data
const getCountryInfo = () => {
  loadSpinner(true);
  const countryName = document.getElementById("search-name").value;
  const url = ` https://api.covid19api.com/live/country/${countryName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { Country, Active, Confirmed, Deaths, Recovered } = data[0];
      document.getElementById("country-name").innerText = Country;
      document.getElementById("active-number").innerText = Active;
      document.getElementById("total-number").innerText = Confirmed;
      document.getElementById("death-number").innerText = Deaths;
      document.getElementById("recovered-number").innerText = Recovered;
      loadSpinner(false);
    });
};

// Keyboard Enter key implementation

const input = document.getElementById("search-name");
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("search-button").click();
  }
});

// load spinner
const loadSpinner = (show) => {
  if (show == true) {
    const spinner = document.getElementById("spinner-container");
    spinner.style.display = "block";
  } else if (show == false) {
    const spinner = document.getElementById("spinner-container");
    spinner.style.display = "none";
  }
};
