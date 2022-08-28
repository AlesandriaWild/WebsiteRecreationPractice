window.addEventListener("load", function() {
  const firstH1 = document.querySelector("h1");
  firstH1.remove();
  const newH1 = document.createElement("h1");
  newH1.append("Webpage Recreation Practice");
  const bod = document.querySelector("body");
  bod.append(newH1);
  const firstP = document.createElement("p");
  firstP.append("The HTML of this webpage was created with JavaScript.")
  bod.append(firstP);
  const firstImg = document.createElement("img");
  firstImg.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  firstImg.style.width = "50%"
  document.body.appendChild(firstImg);
  const secondH1 = document.createElement("h1");
  secondH1.append("Facts about the Multicolored Tanager:");
  bod.append(secondH1);
  const div = document.createElement("div");
  bod.append(div);
  const ul = document.createElement("ul");
  ul.setAttribute("id", "tanagerInfo");
  document.querySelector("div").append(ul);
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  liOne.append("It is endemic to the mountains of Colombia.");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  this.document.getElementById("tanagerInfo").append(liOne, liTwo);
  const firstH2 = document.createElement("h2");
  firstH2.append("Source");
  bod.append(firstH2);
  const anchor = document.createElement("a");
  const textNode = document.createTextNode("Wikipedia");
  anchor.appendChild(textNode);
  anchor.href= "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  document.body.appendChild(anchor);
  bod.append(anchor);
});

