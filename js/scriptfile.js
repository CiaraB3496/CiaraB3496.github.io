/*JQuery Effects*/
/*Slideshow*/
$(document).ready(function () {
    $('#cycle-slideshow').cycle(
    {
        fx:'fade'

        });
});
/*Calender*/
$(function () {
    $('input[name="calender"]').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        "minYear": 2022,
        "maxYear": 2025,
        "showCustomRangeLabel": false,
        "startDate": "05/03/2022",
        "endDate": "05/09/2022",
        "minDate": "05/13/2022",
        "maxDate": "05/09/2025",
        "opens": "center"
    }, function (start, end, label) {
        console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
});

/*JavaScript functions*/
function formconfirmation() {
    if (confirm("Are you sure you want to Submit?") == true) { alert("Thank you, a member of staff will be in contact with you soon."); }
    else { return true;}
}

var nails_price = new Array();
nails_price["No Nails"] = 0;
nails_price["File and Polish"] = 10;
nails_price["Kids File and Polish"] = 7;
nails_price["Classic Manicure"] = 25;
nails_price["Spa Manicure"] = 30;
nails_price["Spa Manicure with Gel Polish"] = 40;
nails_price["File and Polish(Feet)"] = 15;
nails_price["Classic Pedicure"] = 40;
nails_price["Spa Pedicure"] = 50;
nails_price["Spa Pedicure with Gel Polish"] = 55;

var exten_price = new Array();
exten_price["No Extensions"] = 0;
exten_price["Gel Nails"] = 60;
exten_price["Acrylic Nails"] = 55;
exten_price["Dip Nails"] = 55;
exten_price["Shellac Polish"] = 35;
exten_price["Removal and Clean Up"] = 15;
exten_price["Removal and Polish"] = 20;
exten_price["Nail Repair"] = 5;

var wax_price = new Array();
wax_price["No Wax"] = 0;
wax_price["Brows"] = 10;
wax_price["Lip"] = 6;
wax_price["Chin"] = 6;
wax_price["Under Arms"] = 12;
wax_price["Full Arms"] = 15;
wax_price["Abdomen"] = 9;
wax_price["Half Leg"] = 20;
wax_price["Full Leg"] = 30
wax_price["Bikini Line"] = 15;
wax_price["Californian"] = 25;
wax_price["Brazilian"] = 35;
wax_price["Hollywood"] = 40;

var tint_price = new Array();
tint_price["No Tint"] = 0;
tint_price["Eyelash Tint"] = 13;
tint_price["Brow Tint"] = 10;
tint_price["Brow Wax and Tint"] = 22;
tint_price["Wax, Eyelash and Brow Tint"] = 28;

var style_price = new Array();
style_price["No Style"] = 0;
style_price["Cut(Short)"] = 30;
style_price["Cut(Medium)"] = 35
style_price["Cut(Long)"] = 40;
style_price["Kids Cut"] = 12;
style_price["Blowdry"] = 15;
style_price["Updo"] = 30;

var color_price = new Array();
color_price["No Colour"] = 0;
color_price["Fullhead"] = 60;
color_price["Ombre"] = 65;
color_price["Fullhead Highlights"] = 80;
color_price["Halfhead Highlights"] = 60;
color_price["T-Bar"] = 40;
color_price["Floods"] = 30;
color_price["Bleach Treatment"] = 25;

var time_no = new Array();
time_no["9:00"] = 0;
time_no["9:30"] = 0;
time_no["10:00"] = 0;
time_no["10:30"] = 0;
time_no["11:00"] = 0;
time_no["11:30"] = 0;
time_no["12:00"] = 0;
time_no["12:30"] = 0;
time_no["13:00"] = 0;
time_no["13:30"] = 0;
time_no["14:00"] = 0;
time_no["14:30"] = 0;
time_no["15:00"] = 0;
time_no["15:30"] = 0;
time_no["16:00"] = 0;
time_no["16:30"] = 0;
time_no["17:00"] = 0;

function getnails() {
    const nail1 = document.getElementById("nails").value;
	nail2 = nails_price[nail1];
    const nail = parseInt(nail2);
    return nail;
}

function getnailex() {
    const nailex1 = document.getElementById("nailex").value;
	nailex2 = exten_price[nailex1];
    const nailexs = parseInt(nailex2);
    return nailexs;
}

function getwax() {
    const wax1 = document.getElementById("wax").value;
	wax2 = wax_price[wax1];
    const  waxs= parseInt(wax2);
    return waxs;
}

function gettint() {
    const tint1 = document.getElementById("tint").value;
	tint2 = tint_price[tint1];
    const  tints= parseInt(tint2);
    return tints;
}

function gethairstyle() {
    const hairstyle1 = document.getElementById("hairstyle").value;
	hairstyle2 = style_price[hairstyle1];
    const  hairstyles= parseInt(hairstyle2);
    return hairstyles;
}

function gethaircolor() {
    const haircolor1 = document.getElementById("haircolor").value;
	haircolor2 = color_price[haircolor1];
    const haircolors= parseInt(haircolor2);
    return haircolors;
}

function getestimate(){
  var haircolorprice = gethaircolor();
  var hairstyleprice = gethairstyle();
  var waxprice= getwax();
  var tintprice = gettint();
  var nailexprice = getnailex();
  var nailprice = getnails();
  var estimate = haircolorprice + hairstyleprice + waxprice + tintprice+nailexprice + nailprice;
  return estimate;
}

function showEstimate(){
  const totalestimate = getestimate();
  const showestimate = document.getElementById('estimate');
  showestimate.style.display = 'block';
  showestimate.innerHTML = "Booking Estimate: €" + totalestimate;
}

function bookingconfirm(){
    const toterror = document.getElementById('errormess');
    const totalestimate1= getestimate();
    if(totalestimate1==0){ 
        toterror.style.display = 'block';
        toterror.innerHTML = "You must select at least 1 treatment.";
        event.preventDefault();
        return true;
      } else{
          Submit;
      }
}

function confirmbox(){
    alert("Thank you for Booking! A member of staff will be with you soon to confirm your appointment.");
}