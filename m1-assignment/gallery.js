var photos = [];
var fileNames = [];
var imageList = [];
var captionText = [
  'Data center',
  'IT Security Audits',
  'Data Back-up And recovery',
  'Managed Wi-fi',
  'VOIP Services',
  'Network Design',
  'IT Support',
  'E-commerce',
  'VPN',
  'Data/Email Migration',
  'Computer Protection',
  ' Patch Management',
];
var image;
var openList = "<li id='photo'>";
var closeList = "</li>";
var openCaptionTag = "<h3 class='caption'>";
var closeCaptionTag = "</h3>";
var openDescTag1 = "<p class='description' onClick = 'displayBox(";
var openDescTag2 = ")'>"
var closeDescTag = "</p>";
var descText = [
  'Build,Architect,Migrate,Manage and support.',
  'Insufficient and unintended Information.',
  'Regulatory landscape, Back up, Recovery.',
  'Manage wi fi services, AP, Mesh Networks.',
  'Communication Via Internet , New Setup, Installation.',
  'Monitor, Testing, troubleshooting.',
  'The best services available to help your business run smoothly. ',
  'Manages your E-commerce platform.',
  'Work while sitting at home using VPN.',
  'Helps you to migrate your data securely.',
  ' Virus & Malware Removal. ',
  'Re-Image/update your Computer.',
];
var description;
var openCaptionTag = "<h3 class='caption'>";
var closeCaptionTag = '</h3>';

var headingTag = captionText;
var infoTag = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus a tempora, modi, iste id eligendi ex praesentium odit dolor quae reprehenderit molestiae, assumenda voluptatum earum sapiente at impedit illo neque.',
];
var clickClose = ' Click This to close';
for (var i = 0; i < 12; i++) {
  fileNames.push('Image' + (i + 1));
  photos.push("<a href='#/' class='lightbox-toggle'>"+ "<img id='photo' src ='Gallery/" + fileNames[i] + ".jpg'" + "alt =" + 'alt' + fileNames[i] + ">"  + "</a>" );
  image =
    openList +
    photos[i] +
    openDescTag1 + i +
    openDescTag2 +
    descText[i] +
    closeDescTag +
    openCaptionTag +
    captionText[i] +
    closeCaptionTag +
    closeList;
  imageList.push(image);
}
document.getElementById('gallery').innerHTML = imageList;
/*var photos = [];
                var fileNames = [];
                var imageList = [];
                var captionText= ["Data center", "IT Security Audits", "Data Back-up And recovery", "Managed Wi-fi", "VOIP Services", "Network Design", "IT Support", "E-commerce", "VPN", "Data/Email Migration", "Computer Protection", " Patch Management"];
                var image;
                var openList = "<li id='photo'>";
                var closeList = "</li>";
                var openCaptionTag = "<h3 class='caption'>";
                var closeCaptionTag = "</h3>";
                var openDescTag ="<p>";
                var closeDescTag ="</p>";
                var descText = ["Build,Architect,Migrate,Manage and support.", "Insufficient and unintended Information.", "Regulatory landscape, Back up, Recovery.", "Manage wi fi services, AP, Mesh Networks.", "Communication Via Internet , New Setup, Installation.","Monitor, Testing, troubleshooting.", "The best services available to help your business run smoothly. ", "Manages your E-commerce platform.", "Work while sitting at home using VPN.", "Helps you to migrate your data securely.", " Virus & Malware Removal. ", "Re-Image/update your Computer."];
                for (var i=0; i<12; i++) {
                    fileNames.push("Image"+(i+1));
                    photos.push("<img src ='Gallery/"+fileNames[i]+".jpg'>");
                    image = openList + photos[i] + openCaptionTag + captionText[i] + closeCaptionTag + openDescTag + descText[i] + closeDescTag + closeList;
                    imageList.push(image);
                }
document.getElementById("gallery").innerHTML = imageList;*/

function displayBox(num) {
  document.getElementById("infoBox").style.visibility = "visible";
  document.getElementById("titleOfBox").innerHTML = captionText[num];
  document.getElementById("info").innerHTML = infoTag[num];
  document.getElementById("closeLink").innerHTML = clickClose;
  
}
document.getElementById("closeLink").addEventListener("click", closeBox);
function closeBox() {
  document.getElementById("infoBox").style.visibility = "hidden";

}

$(document).ready(function () {
  $('.lightbox-toggle img').click(function () {
    $('.backdrop')
      .animate({ opacity: '.50' }, 300, 'linear')
      .css('display', 'block');
    $('.box').fadeIn();

    //Check if lightbox has an image
    if ($('.box').contents('img')) {
      $('.box').contents().remove('img'); //If true, clear image
    }

    //Get text content in attribute
    var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

    if ($altvalue == "altImage1") {
      var img = $('#photo:first-child img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element
    }
    else if ($altvalue == "altImage2") {
      var img = $('#photo:nth-child(2) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    }
    else if ($altvalue == "altImage3") {
      var img = $('#photo:nth-child(3) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    } else if ($altvalue == "altImage4") {
      var img = $('#photo:nth-child(4) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    } else if ($altvalue == "altImage5") {
      var img = $('#photo:nth-child(5) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    } else if ($altvalue == "altImage6") {
      var img = $('#photo:nth-child(6) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    } else if ($altvalue == "altImage7") {
      var img = $('#photo:nth-child(7) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    } else if ($altvalue == "altImage8") {
      var img = $('#photo:nth-child(8) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    } else if ($altvalue == "altImage9") {
      var img = $('#photo:nth-child(9) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    } else if ($altvalue == "altImage10") {
      var img = $('#photo:nth-child(10) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    } else if ($altvalue == "altImage11") {
      var img = $('#photo:nth-child(11) img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element

    } else if ($altvalue == "altImage12") {
      var img = $('#photo:last-child img').clone(); //Duplicate DOM element
      $('.box').append(img); //Insert duplicated element in another element
      
    } else ($altvalue == "")
  });

  /* Click to close lightbox */
  $('.close, .backdrop').click(function () {
    $('.backdrop').animate({ opacity: '0' }, 300, 'linear', function () {
      $('.backdrop').css('display', 'none');
    });
    $('.box').fadeOut();
  });
});