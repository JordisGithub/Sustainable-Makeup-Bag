// const select = document.querySelector("#Vegan_Babe");
// const select = document.querySelector("#Rose_All_Day");
// const select = document.querySelector("#Boss_B");
// const select = document.querySelector("#Blue_Dreams");
// const select = document.querySelector("#Aqua_Vida");
// const select = document.querySelector("#Hollywood_Glam");
// const select = document.querySelector("#Glam_Kitten");
// const select = document.querySelector("#Coachella_Babe");
// const select = document.querySelector("#Take_Me_To_Carnival");
// const select = document.querySelector("#Hollywood_Neutrals");
// const select = document.querySelector("#Sunset_Encounters");

//Parameters for each look
// mascara,
// foundation,
// blush,
// bronzer,
// eyebrow,
// eyeliner,
// eyeshadow,
// lipstick,
// lipliner

// const veganBabe = {
//   lookDescription: "Vegan Babe",
//   mascara:
//     "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=&product_type=mascara",
//   foundation: "http://makeup-api.herokuapp.com/api/v1/products/1043",
//   blush: "http://makeup-api.herokuapp.com/api/v1/products/469",
//   bronzer: "http://makeup-api.herokuapp.com/api/v1/products/507",
//   eyebrow: "http://makeup-api.herokuapp.com/api/v1/products/1019",
//   eyeliner: "http://makeup-api.herokuapp.com/api/v1/products/180",
//   eyeshadow: "http://makeup-api.herokuapp.com/api/v1/products/1014",
//   lipstick: "http://makeup-api.herokuapp.com/api/v1/products/1047",
//   lipliner: null
// };

// button.addEventListener("click", async () => {
//   const resp = await axios.get(
//     `https://api.thecatapi.com/v1/images/search?category_ids=${select.value}`,
//     api_key
//   );

//Back of Vegan Babe's Card
const veganGirlBack = document.querySelector("#Vegan_Babe_Back");

const getVeganGirlMakeup = async () => {
  let resMascara = await axios.get(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=&product_type=mascara"
  );
  let resFoundation = await axios.get(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=&product_type=foundation"
  );
  let resBlush = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
  );
  let resBronzer = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer"
  );
  let resEyeBrow = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow"
  );
  let resEyeLiner = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
  );
  let resEyeShadow = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow"
  );
  let reslipstick = await axios.get(
    "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"
  );
  // console.log(respond.data);
  veganGirlBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="veganBabeProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a> 
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  veganGirlBack.append(elem);

  //print to console to find the index numbers of the products chosen
  console.log(resMascara.data);
  console.log(resFoundation.data);
  console.log(resBlush.data);
  console.log(resBronzer.data);
  console.log(resEyeBrow.data);
  console.log(resEyeLiner.data);
  console.log(resEyeShadow.data);
  console.log(reslipstick.data);
};

getVeganGirlMakeup();
