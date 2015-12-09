//Slack Lightbox Coding Challenge
//Jessica Zimmerman
//API KEY: AIzaSyDlMR1wosy0jhLmQxcpUtJLBcWSn-AgMYY

var index;

//Sets index to image clicked on, sets lightBoxImg to the image clicked on,
//sets the title of the image, and displays the lightBox
function startLightBox(event) {
  index = parseInt(event.target.id);
  document.getElementById("lightBoxImg").style.backgroundImage = 'url(' + images[index] + ')';
  document.getElementById("lightBoxTitle").innerHTML = titles[index];

  var lbBg = document.getElementById("lightBoxBg");
  var lb = document.getElementById("lightBox");

  lbBg.style.display = "block";
  lb.style.display = "block";
}

//When the user clicks on lightBoxBg, the lightBox is 'dismissed' (display = none)
function dismiss() {
  var lbBg = document.getElementById("lightBoxBg");
  var lb = document.getElementById("lightBox");

  lbBg.style.display = "none";
  lb.style.display = "none";
}

//decreases index to display the next image in the gallery
function goToPrev() {
  console.log("first index: ", index);
  if (index == 0) {
    index = images.length-1;
  } else {
    index--;
  }
  console.log("prev index: ", index);
  document.getElementById("lightBoxImg").style.backgroundImage = 'url(' + images[index] + ')';
  document.getElementById("lightBoxTitle").innerHTML = titles[index];
}

//increases index to display the next image in the gallery
function goToNext() {
  if (index == images.length-1) {
    index = 0;
  } else {
    index++;
  }
  document.getElementById("lightBoxImg").style.backgroundImage = 'url(' + images[index] + ')';
  document.getElementById("lightBoxTitle").innerHTML = titles[index];
}

// holds the titles of all the images
var titles = [];
// holds the URLs of all the images
var images = [];

//Parses / stores data from the API call in titles and images, 
//creates the div that holds the image in the gallery and inserts it
//into "content" div in HTML
function hndlr(response) {
  console.log("response", response);
  for (var i = 0; i < response.items.length; i++) {
    images[i] = response.items[i].link;
    titles[i] = response.items[i].title;
  
    var imageDiv = "<div class='galleryImg' onclick='startLightBox(event)' id=" + i + "></div>";

    document.getElementById("content").innerHTML += imageDiv;
    document.getElementById(i).style.backgroundImage = 'url(' + response.items[i].link + ')';
  }
}

// USED IF API REACHES MAX QUERIES (100)

// var titles = ["Ocean 1", "Ocean 2", "Ocean 3", "Ocean 4", "Ocean 5", "Ocean 6", "Ocean 7", "Ocean 8", "Ocean 9", "Ocean 10"];
// var images = ["http://news.nationalgeographic.com/content/dam/news/photos/000/783/78393.ngsversion.1422283303146.jpg",
// "http://dreamatico.com/data_images/ocean/ocean-2.jpg", "http://awesomeocean.com/wp-content/uploads/2014/10/life_under_the_ocean-wide.jpg", "http://news.nationalgeographic.com/content/dam/news/photos/000/786/78625.ngsversion.1422285259310.jpg", "http://img0.mxstatic.com/wallpapers/0f458fce470938f1695a8f9865485f17_large.jpeg", "http://blairoracle.com/wp-content/uploads/2015/11/ocean-stock.jpg", "http://www.boem.gov/uploadedImages/BOEM/Environmental_Stewardship/NOP/CliffBEACH.jpg?n=1249", "http://ocean.nationalgeographic.com/u/TvyamNb-BivtNwpvn7Sct0VFDulyAfA9wBcU0gVHVnqC5ghshvdl0ag4wJ5t_LQ8mtgYjJvO0QGGCCKW4Lk/", "http://www.psych2go.net/wp-content/uploads/2014/10/ocean.jpg", "http://myteachermissoh.weebly.com/uploads/4/5/3/7/45371531/4792504_orig.jpg"];

// for (var i=0; i < images.length; i++) {
//   var imageDiv = "<div class='galleryImg' onclick='startLightBox(event)' id=" + i + "></div>";

//   document.getElementById("content").innerHTML += imageDiv;
//   document.getElementById(i).style.backgroundImage = 'url(' + images[i] + ')';
// }

