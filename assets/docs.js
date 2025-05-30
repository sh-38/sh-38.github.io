const loadJSON = (path, callback) => {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", path, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
};

const addFlag = (country, rowDiv) => {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-xl-2"); // 6 cols
  colDiv.classList.add("col-lg-2"); // 6 cols
  colDiv.classList.add("col-md-3"); // 4 cols
  colDiv.classList.add("col-sm-4"); // 3 cols
  colDiv.classList.add("col-6"); // 2 cols
  colDiv.id = country.code;
  const flagDiv = document.createElement("div");
  flagDiv.classList.add("flag");
  flagDiv.title = country.name;

  // Code
  const codeSpan = document.createElement("span");
  codeSpan.classList.add("flag-code");
  const code = document.createTextNode(country.code);
  codeSpan.appendChild(code);
  // Divider
  const dividerSpan = document.createElement("span");
  const divider = document.createTextNode(" ");
  dividerSpan.appendChild(divider);
  //Country
  const countryDiv = document.createElement("div");
  countryDiv.classList.add("flag-country");
  countryDiv.classList.add("no-wrap");
  const countrySpan = document.createElement("span");
  const countryName = document.createTextNode(country.name);
  countrySpan.appendChild(countryName);
  countryDiv.appendChild(codeSpan);
  countryDiv.appendChild(dividerSpan);
  countryDiv.appendChild(countrySpan);

  const flagImg = document.createElement("img");
  flagImg.classList.add("flag-img");
  flagImg.src = country.flag_4x3;
  flagImg.alt = `Flag of ${country.name}`;

  const flagImgSquare = document.createElement("img");
  flagImgSquare.classList.add("flag-img-square");
  flagImgSquare.classList.add("hide");
  flagImgSquare.src = country.flag_1x1;
  flagImgSquare.alt = `Flag of ${country.name}`;

  const flagRectangle = document.createElement("span");
  flagRectangle.classList.add("fi");
  flagRectangle.classList.add(`fi-${country.code}`);
  const flagSquare = document.createElement("span");
  flagSquare.classList.add("fi");
  flagSquare.classList.add(`fi-${country.code}`);
  flagSquare.classList.add("fis");
  const dividerFlagSpan = document.createElement("span");
  dividerFlagSpan.appendChild(document.createTextNode(" "));

  const flagCSS = document.createElement("div");
  flagCSS.classList.add("flag-css");
  flagCSS.appendChild(flagRectangle);
  flagCSS.appendChild(dividerFlagSpan);
  flagCSS.appendChild(flagSquare);

  colDiv.appendChild(flagDiv);
  flagDiv.appendChild(countryDiv);
  flagDiv.appendChild(flagImg);
  flagDiv.appendChild(flagImgSquare);
  flagDiv.appendChild(flagCSS);
  rowDiv.appendChild(colDiv);
};

const show4x3 = () => {
  const click4x3 = document.getElementById("click-4x3");
  const click1x1 = document.getElementById("click-1x1");
  click1x1.classList.remove("hide");
  click4x3.classList.add("hide");
  const flags = document.getElementsByClassName("flag-img");
  for (flag of flags) {
    flag.classList.remove("hide");
  }
  const flagsSquared = document.getElementsByClassName("flag-img-square");
  for (flag of flagsSquared) {
    flag.classList.add("hide");
  }
};

const show1x1 = () => {
  const click4x3 = document.getElementById("click-4x3");
  const click1x1 = document.getElementById("click-1x1");
  click4x3.classList.remove("hide");
  click1x1.classList.add("hide");
  const flagsSquared = document.getElementsByClassName("flag-img-square");
  for (flag of flagsSquared) {
    flag.classList.remove("hide");
  }
  const flags = document.getElementsByClassName("flag-img");
  for (flag of flags) {
    flag.classList.add("hide");
  }
};

window.onload = function () {
  const isoFlagsRow = document.getElementById("iso-flags");
  const nonIsoFlagsRow = document.getElementById("non-iso-flags");
  const click4x3 = document.getElementById("click-4x3");
  click4x3.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    show4x3();
  });

  const click1x1 = document.getElementById("click-1x1");
  click1x1.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    show1x1();
  });

  loadJSON("source/country.json", (response) => {
    const countries = JSON.parse(response);
    for (country of countries) {
      if (country.iso) {
        addFlag(country, isoFlagsRow);
      } else {
        addFlag(country, nonIsoFlagsRow);
      }
    }
  });
};
