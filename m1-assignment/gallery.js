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
  photos.push("<img src ='Gallery/" + fileNames[i] + ".jpg'>");
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