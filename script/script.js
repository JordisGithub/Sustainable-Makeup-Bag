const button = document.querySelector("#testButton");

const activity = () => {
  axios
    .get("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then(response => {
      console.log(response);
    });
};

button.addEventListener("click", activity);
