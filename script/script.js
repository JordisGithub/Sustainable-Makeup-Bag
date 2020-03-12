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

//Back of Rose_All_Day's Card
const roseAllDayBack = document.querySelector("#Rose_All_Day_Back");

const getRoseAllDayMakeup = async () => {
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
  roseAllDayBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="roseAllDayProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a> 
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  roseAllDayBack.append(elem);
};

getRoseAllDayMakeup();

//Back of Vegan Babe's Card
const bossBBack = document.querySelector("#Boss_B_Back");

const getBossBMakeup = async () => {
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
  bossBBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="bossBProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a> 
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  bossBBack.append(elem);
};
getBossBMakeup();

//Back of Blue Dreams' Card
const blueDreamsBack = document.querySelector("#Blue_Dreams_Back");

const getBlueDreamsMakeup = async () => {
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
  blueDreamsBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="blueDreamsProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a> 
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  blueDreamsBack.append(elem);
};
getBlueDreamsMakeup();

//Back of Aqua Vida's Card
const aquaVidaBack = document.querySelector("#Aqua_Vida_Back");

const getAquaVidaMakeup = async () => {
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
  aquaVidaBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="aquaVidaProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a> 
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  aquaVidaBack.append(elem);
};
getAquaVidaMakeup();

//Back of Hollywood Glam's Card
const hollywoodGlamBack = document.querySelector("#Hollywood_Glam_Back");

const getHollywoodGlamMakeup = async () => {
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
  hollywoodGlamBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="hollywoodGlamProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a> 
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  hollywoodGlamBack.append(elem);
};
getHollywoodGlamMakeup();

//Back of Glam Kitten's Card
const glamKittenBack = document.querySelector("#Glam_Kitten_Back");

const getGlamKittenMakeup = async () => {
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
  glamKittenBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="glamKittenProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a> 
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  glamKittenBack.append(elem);
};
getGlamKittenMakeup();

//Back of Exotic Vibe's Card
const exoticVibeBack = document.querySelector("#Exotic_Vibe_Back");

const getExoticVibeMakeup = async () => {
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
  exoticVibeBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="exoticVibeProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a>
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  exoticVibeBack.append(elem);
};
getExoticVibeMakeup();

//Back of Coachella Babe's Card
const coachellaBabeBack = document.querySelector("#Coachella_Babe_Back");

const getCoachellaBabeMakeup = async () => {
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
  coachellaBabeBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="coachellaBabeProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a>
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  coachellaBabeBack.append(elem);
};
getCoachellaBabeMakeup();

//Back of Take me to carnival's Card
const takeMeToCarnivalBack = document.querySelector(
  "#Take_Me_To_Carnival_Back"
);

const getTakeMeToCarnivalMakeup = async () => {
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
  takeMeToCarnivalBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="takeMeToCarnivalProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a>
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  takeMeToCarnivalBack.append(elem);
};
getTakeMeToCarnivalMakeup();

//Back of Hollywood Neutral's Card
const hollywoodNeutralsBack = document.querySelector(
  "#Hollywood_Neutrals_Back"
);

const getHollywoodNeutralsMakeup = async () => {
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
  hollywoodNeutralsBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="hollywoodNeutralsProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a>
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  hollywoodNeutralsBack.append(elem);
};
getHollywoodNeutralsMakeup();

//Back of Sunset Encounter's Card
const sunsetEncountersBack = document.querySelector("#Sunset_Encounters_Back");

const getSunsetEncountersMakeup = async () => {
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
  sunsetEncountersBack.innerHTML = " ";
  let elem = document.createElement("section");
  elem.innerHTML = `<div class="sunsetEncountersProducts">
  <a href="${resMascara.data}"> ${resMascara.data[87].name}</a>
  <a href="${resFoundation.data}"> ${resFoundation.data[1].name}</a>
  <a href="${resBlush.data}"> ${resBlush.data[34].name}</a>
  <a href="${resBronzer.data}"> ${resBronzer.data[27].name}</a>
  <a href="${resEyeBrow.data}"> ${resEyeBrow.data[0].name}</a>
  <a href="${resEyeLiner.data}"> ${resEyeLiner.data[136].name}</a>
  <a href="${resEyeShadow.data}"> ${resEyeShadow.data[8].name}</a>
  <a href="${reslipstick.data}"> ${reslipstick.data[0].name}</a>
  </div>`;
  sunsetEncountersBack.append(elem);
};
getSunsetEncountersMakeup();
