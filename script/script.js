
//Back of Vegan Babe's Card
const veganGirlBack = document.querySelector("#Vegan_Babe_Back");

const loadData = async () => {
  let resMascara;
  let resFoundation;
  let resBlush;
  let resBronzer;
  let resEyeBrow;
  let resEyeLiner;
  let resEyeShadow;
  let reslipstick;

  const imgErrorMascara = (image) => {
    image.onerror = "";
    image.src = "images/defaultMascara";
    return true;
  }

  const imgErrorFoundation = (image) => {
    image.onerror = "";
    image.src = "images/defaultFoundation";
    return true;
  }

  const imgErrorBlush = (image) => {
    image.onerror = "";
    image.src = "images/defaultBlush"
    return true;
  }

  const imgErrorBronzer = (image) => {
    image.onerror = "";
    image.src = "images/defaultBronzer"
    return true;
  }
  const imgErrorBrow = (image) => {
    image.onerror = "";
    image.src = "images/defaultBrow"
    return true;
  }

  const imgErrorEyeLiner = (image) => {
    image.onerror = "";
    image.src = "images/defaultEyeliner"
    return true;
  }

  const imgErrorEyeShadow = (image) => {
    image.onerror = "";
    image.src = "images/defaultEyeshadow"
    return true;
  }

  const imgErrorlipstick = (image) => {
    image.onerror = "";
    image.src = "images/defaultlipstick"
    return true;
  }



  const getMakeup = async () => {
    resMascara = await axios.get(
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=&product_type=mascara"
    );
    resFoundation = await axios.get(
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=&product_type=foundation"
    );
    resBlush = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
    );
    resBronzer = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer"
    );
    resEyeBrow = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow"
    );
    resEyeLiner = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
    );
    resEyeShadow = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow"
    );
    reslipstick = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"
    );
  };

  await getMakeup();

  const getVeganGirlMakeup = async () => {
    // console.log(respond.data);
    veganGirlBack.innerHTML = " ";
    let elem = document.createElement("section");
    elem.innerHTML = `<div class="veganBabeProducts">
  <a href="${resMascara.data[87].product_link}" onclick="window.open(this.href); return false;"> <img src=${resMascara.data[87].image_link} onerror=${imgErrorMascara(this)}/></a> 
  <a href="${resFoundation.data[5].product_link}" onclick="window.open(this.href); return false;"> <img src=${resFoundation.data[5].image_link} onerror=${imgErrorFoundation(this)}/></a> 
  <a href="${resBlush.data[34].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBlush.data[34].image_link} onerror=${imgErrorBlush(this)}/></a>
  <a href="${resBronzer.data[27].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBronzer.data[27].image_link} onerror=${imgErrorBronzer(this)}/></a>
  <a href="${resEyeBrow.data[0].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeBrow.data[0].image_link} onerror=${imgErrorBrow(this)}/></a>
  <a href="${resEyeLiner.data[136].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeLiner.data[136].image_link} onerror=${imgErrorEyeLiner(this)}/></a>
  <a href="${resEyeShadow.data[8].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeShadow.data[8].image_link} onerror=${imgErrorEyeShadow(this)}/></a>
  <a href="${reslipstick.data[0].product_link}" onclick="window.open(this.href); return false;"> <img src=${reslipstick.data[0].image_link} onerror=${imgErrorlipstick(this)}/></a>
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
    // console.log(respond.data);
    roseAllDayBack.innerHTML = " ";
    let elem = document.createElement("section");
    elem.innerHTML = `<div class="roseAllDayProducts">
    <a href="${resMascara.data[29].product_link}" onclick="window.open(this.href); return false;"> <img src=${resMascara.data[29].image_link} onerror=${imgErrorMascara(this)}/></a> 
    <a href="${resFoundation.data[140].product_link}" onclick="window.open(this.href); return false;"> <img src=${resFoundation.data[140].image_link} onerror=${imgErrorFoundation(this)}/></a> 
    <a href="${resBlush.data[27].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBlush.data[27].image_link} onerror=${imgErrorBlush(this)}/></a>
    <a href="${resBronzer.data[16].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBronzer.data[16].image_link} onerror=${imgErrorBronzer(this)}/></a>
    <a href="${resEyeBrow.data[15].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeBrow.data[15].image_link} onerror=${imgErrorBrow(this)}/></a>
    <a href="${resEyeLiner.data[26].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeLiner.data[26].image_link} onerror=${imgErrorEyeLiner(this)}/></a>
    <a href="${resEyeShadow.data[25].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeShadow.data[25].image_link} onerror=${imgErrorEyeShadow(this)}/></a>
    <a href="${reslipstick.data[66].product_link}" onclick="window.open(this.href); return false;"> <img src=${reslipstick.data[66].image_link} onerror=${imgErrorlipstick(this)}/></a>
  </div>`;
    roseAllDayBack.append(elem);
  };

  getRoseAllDayMakeup();

  //Back of Vegan Babe's Card
  const bossBBack = document.querySelector("#Boss_B_Back");

  const getBossBMakeup = async () => {
    // console.log(respond.data);
    bossBBack.innerHTML = " ";
    let elem = document.createElement("section");
    elem.innerHTML = `<div class="bossBProducts">
    <a href="${resMascara.data[91].product_link}" onclick="window.open(this.href); return false;"> <img src=${resMascara.data[91].image_link} /></a> 
    <a href="${resFoundation.data[54].product_link}" onclick="window.open(this.href); return false;"> <img src=${resFoundation.data[54].image_link} /></a>
    <a href="${resBlush.data[63].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBlush.data[63].image_link}/></a>
    <a href="${resBronzer.data[24].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBronzer.data[24].image_link}/></a>
    <a href="${resEyeBrow.data[21].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeBrow.data[21].image_link} onerror=${imgErrorBrow(this)}/></a>
    <a href="${resEyeLiner.data[65].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeLiner.data[65].image_link}/></a>
    <a href="${resEyeShadow.data[55].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeShadow.data[55].image_link}/></a>
    <a href="${reslipstick.data[2].product_link}" onclick="window.open(this.href); return false;"> <img src=${reslipstick.data[2].image_link}/></a>
  </div>`;
    bossBBack.append(elem);
  };
  getBossBMakeup();


  const glamKittenBack = document.querySelector("#Glam_Kitten_Back");

  const getGlamKittenMakeup = async () => {
    // console.log(respond.data);
    glamKittenBack.innerHTML = " ";
    let elem = document.createElement("section");
    elem.innerHTML = `<div class="glamKittenProducts">
    <a href="${resMascara.data[29].product_link}" onclick="window.open(this.href); return false;"> <img src=${resMascara.data[29].image_link} onerror=${imgErrorMascara(this)}/></a> 
    <a href="${resFoundation.data[140].product_link}" onclick="window.open(this.href); return false;"> <img src=${resFoundation.data[140].image_link} onerror=${imgErrorFoundation(this)}/></a> 
    <a href="${resBlush.data[27].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBlush.data[27].image_link} onerror=${imgErrorBlush(this)}/></a>
    <a href="${resBronzer.data[16].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBronzer.data[16].image_link} onerror=${imgErrorBronzer(this)}/></a>
    <a href="${resEyeBrow.data[15].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeBrow.data[15].image_link} onerror=${imgErrorBrow(this)}/></a>
    <a href="${resEyeLiner.data[26].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeLiner.data[26].image_link} onerror=${imgErrorEyeLiner(this)}/></a>
    <a href="${resEyeShadow.data[25].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeShadow.data[25].image_link} onerror=${imgErrorEyeShadow(this)}/></a>
    <a href="${reslipstick.data[66].product_link}" onclick="window.open(this.href); return false;"> <img src=${reslipstick.data[66].image_link} onerror=${imgErrorlipstick(this)}/></a>
  </div>`;
    glamKittenBack.append(elem);
  };
  getGlamKittenMakeup();

  //Back of Exotic Vibe's Card
  const exoticVibeBack = document.querySelector("#Exotic_Vibe_Back");

  const getExoticVibeMakeup = async () => {
    // console.log(respond.data);
    exoticVibeBack.innerHTML = " ";
    let elem = document.createElement("section");
    elem.innerHTML = `<div class="exoticVibeProducts">
    <a href="${resMascara.data[15].product_link}" onclick="window.open(this.href); return false;"> <img src=${resMascara.data[15].image_link} onerror=${imgErrorMascara(this)}/></a> 
    <a href="${resFoundation.data[100].product_link}" onclick="window.open(this.href); return false;"> <img src=${resFoundation.data[100].image_link} onerror=${imgErrorFoundation(this)}/></a> 
    <a href="${resBlush.data[42].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBlush.data[42].image_link} onerror=${imgErrorBlush(this)}/></a>
    <a href="${resBronzer.data[55].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBronzer.data[55].image_link} onerror=${imgErrorBronzer(this)}/></a>
    <a href="${resEyeBrow.data[43].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeBrow.data[43].image_link} onerror=${imgErrorBrow(this)}/></a>
    <a href="${resEyeLiner.data[43].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeLiner.data[43].image_link} onerror=${imgErrorEyeLiner(this)}/></a>
    <a href="${resEyeShadow.data[1].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeShadow.data[1].image_link} onerror=${imgErrorEyeShadow(this)}/></a>
    <a href="${reslipstick.data[6].product_link}" onclick="window.open(this.href); return false;"> <img src=${reslipstick.data[6].image_link} onerror=${imgErrorlipstick(this)}/></a>
  </div>`;
    exoticVibeBack.append(elem);
  };
  getExoticVibeMakeup();

  //Back of Coachella Babe's Card
  const coachellaBabeBack = document.querySelector("#Coachella_Babe_Back");

  const getCoachellaBabeMakeup = async () => {
    // console.log(respond.data);
    coachellaBabeBack.innerHTML = " ";
    let elem = document.createElement("section");
    elem.innerHTML = `<div class="coachellaBabeProducts">
    <a href="${resMascara.data[29].product_link}" onclick="window.open(this.href); return false;"> <img src=${resMascara.data[29].image_link} onerror=${imgErrorMascara(this)}/></a> 
    <a href="${resFoundation.data[140].product_link}" onclick="window.open(this.href); return false;"> <img src=${resFoundation.data[140].image_link} onerror=${imgErrorFoundation(this)}/></a> 
    <a href="${resBlush.data[27].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBlush.data[27].image_link} onerror=${imgErrorBlush(this)}/></a>
    <a href="${resBronzer.data[16].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBronzer.data[16].image_link} onerror=${imgErrorBronzer(this)}/></a>
    <a href="${resEyeBrow.data[15].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeBrow.data[15].image_link} onerror=${imgErrorBrow(this)}/></a>
    <a href="${resEyeLiner.data[26].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeLiner.data[26].image_link} onerror=${imgErrorEyeLiner(this)}/></a>
    <a href="${resEyeShadow.data[25].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeShadow.data[25].image_link} onerror=${imgErrorEyeShadow(this)}/></a>
    <a href="${reslipstick.data[66].product_link}" onclick="window.open(this.href); return false;"> <img src=${reslipstick.data[66].image_link} onerror=${imgErrorlipstick(this)}/></a>
  </div>`;
    coachellaBabeBack.append(elem);
  };
  getCoachellaBabeMakeup();

  //Back of Take me to carnival's Card
  const takeMeToCarnivalBack = document.querySelector(
    "#Take_Me_To_Carnival_Back"
  );

  const getTakeMeToCarnivalMakeup = async () => {
    // console.log(respond.data);
    takeMeToCarnivalBack.innerHTML = " ";
    let elem = document.createElement("section");
    elem.innerHTML = `<div class="takeMeToCarnivalProducts">
    <a href="${resMascara.data[29].product_link}" onclick="window.open(this.href); return false;"> <img src=${resMascara.data[29].image_link} onerror=${imgErrorMascara(this)}/></a> 
    <a href="${resFoundation.data[140].product_link}" onclick="window.open(this.href); return false;"> <img src=${resFoundation.data[140].image_link} onerror=${imgErrorFoundation(this)}/></a> 
    <a href="${resBlush.data[27].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBlush.data[27].image_link} onerror=${imgErrorBlush(this)}/></a>
    <a href="${resBronzer.data[16].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBronzer.data[16].image_link} onerror=${imgErrorBronzer(this)}/></a>
    <a href="${resEyeBrow.data[15].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeBrow.data[15].image_link} onerror=${imgErrorBrow(this)}/></a>
    <a href="${resEyeLiner.data[26].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeLiner.data[26].image_link} onerror=${imgErrorEyeLiner(this)}/></a>
    <a href="${resEyeShadow.data[25].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeShadow.data[25].image_link} onerror=${imgErrorEyeShadow(this)}/></a>
    <a href="${reslipstick.data[66].product_link}" onclick="window.open(this.href); return false;"> <img src=${reslipstick.data[66].image_link} onerror=${imgErrorlipstick(this)}/></a>
  </div>`;
    takeMeToCarnivalBack.append(elem);
  };
  getTakeMeToCarnivalMakeup();

  //Back of Hollywood Neutral's Card
  const hollywoodNeutralsBack = document.querySelector(
    "#Hollywood_Neutrals_Back"
  );

  const getHollywoodNeutralsMakeup = async () => {
    // console.log(respond.data);
    hollywoodNeutralsBack.innerHTML = " ";
    let elem = document.createElement("section");
    elem.innerHTML = `<div class="hollywoodNeutralsProducts">
    <a href="${resMascara.data[29].product_link}" onclick="window.open(this.href); return false;"> <img src=${resMascara.data[29].image_link} onerror=${imgErrorMascara(this)}/></a> 
    <a href="${resFoundation.data[140].product_link}" onclick="window.open(this.href); return false;"> <img src=${resFoundation.data[140].image_link} onerror=${imgErrorFoundation(this)}/></a> 
    <a href="${resBlush.data[27].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBlush.data[27].image_link} onerror=${imgErrorBlush(this)}/></a>
    <a href="${resBronzer.data[16].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBronzer.data[16].image_link} onerror=${imgErrorBronzer(this)}/></a>
    <a href="${resEyeBrow.data[15].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeBrow.data[15].image_link} onerror=${imgErrorBrow(this)}/></a>
    <a href="${resEyeLiner.data[26].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeLiner.data[26].image_link} onerror=${imgErrorEyeLiner(this)}/></a>
    <a href="${resEyeShadow.data[25].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeShadow.data[25].image_link} onerror=${imgErrorEyeShadow(this)}/></a>
    <a href="${reslipstick.data[66].product_link}" onclick="window.open(this.href); return false;"> <img src=${reslipstick.data[66].image_link} onerror=${imgErrorlipstick(this)}/></a>
  </div>`;
    hollywoodNeutralsBack.append(elem);
  };
  getHollywoodNeutralsMakeup();

  //Back of Sunset Encounter's Card
  const sunsetEncountersBack = document.querySelector(
    "#Sunset_Encounters_Back"
  );

  const getSunsetEncountersMakeup = async () => {
    // console.log(respond.data);
    sunsetEncountersBack.innerHTML = " ";
    let elem = document.createElement("section");
    elem.innerHTML = `<div class="sunsetEncountersProducts">
    <a href="${resMascara.data[29].product_link}" onclick="window.open(this.href); return false;"> <img src=${resMascara.data[29].image_link} onerror=${imgErrorMascara(this)}/></a> 
    <a href="${resFoundation.data[140].product_link}" onclick="window.open(this.href); return false;"> <img src=${resFoundation.data[140].image_link} onerror=${imgErrorFoundation(this)}/></a> 
    <a href="${resBlush.data[27].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBlush.data[27].image_link} onerror=${imgErrorBlush(this)}/></a>
    <a href="${resBronzer.data[16].product_link}" onclick="window.open(this.href); return false;"> <img src=${resBronzer.data[16].image_link} onerror=${imgErrorBronzer(this)}/></a>
    <a href="${resEyeBrow.data[15].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeBrow.data[15].image_link} onerror=${imgErrorBrow(this)}/></a>
    <a href="${resEyeLiner.data[26].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeLiner.data[26].image_link} onerror=${imgErrorEyeLiner(this)}/></a>
    <a href="${resEyeShadow.data[25].product_link}" onclick="window.open(this.href); return false;"> <img src=${resEyeShadow.data[25].image_link} onerror=${imgErrorEyeShadow(this)}/></a>
    <a href="${reslipstick.data[66].product_link}" onclick="window.open(this.href); return false;"> <img src=${reslipstick.data[66].image_link} onerror=${imgErrorlipstick(this)}/></a>
  </div>`;
    sunsetEncountersBack.append(elem);
  };
  getSunsetEncountersMakeup();
};
loadData();