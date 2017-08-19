$(document).ready(function() {
    $('select').material_select();
  });

  $(".button-collapse").sideNav();
  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');


var subtotal = 0;
var tax = 0;
var total = 0;
var max = 3
$('a').click(function(a){
    var valueN = $(this).parent().parent().children('.card-content').children('.name').text();
    var valueP = $(this).parent().parent().children('.card-content').children('.price').text();
    // console.log(valueN, ' ',valueP);
    var $table = $("#recieptTBody");
    var tr = $table.find(">tbody>tr:last");
    if (!tr.length || tr.find(">td").length >= max) {
      tr = $("<tr>");
      $table.append(tr);
    }
    tr.append('<td class="col s7">' + valueN + "</td>");
    tr.append('<td class="textAlignRt col s4 receiptPrice">' + valueP + "</td>");
    tr.append('<td class="col s1"><b type="button"><i class="tiny material-icons prefix red-text">delete_forever</i></b></td>');

    var valuePrice = valueP.replace('$', '');
    // console.log(valuePrice);
    // console.log(typeof valuePrice)

    valuePrice = Number(valuePrice);
    // console.log(valuePrice);

    subtotal = Number(subtotal);
    // console.log(subtotal);
    subtotal = subtotal + valuePrice;
    // console.log(subtotal);

    subtotal = subtotal.toFixed(2);
    // console.log(subtotal);
    subtotal = Number(subtotal);
    // console.log(subtotal);
    $( "#subtotal" ).html('$' + subtotal);

    tax = (subtotal * .1);
    tax = tax.toFixed(2);
    // console.log(tax);
    $( "#tax" ).html('$' + tax);

    subtotal = Number(subtotal);
    tax = Number(tax);
    // console.log('**', subtotal);
    // console.log('**', tax);
    total = (subtotal + tax);
    total = total.toFixed(2);
    // console.log(total);
    $( "#total" ).html('$' + total);

})

$('tbody').on('click', 'b[type="button"]', function(d){
  var receiptP = $(this).parent().parent().children('.receiptPrice').text();
  // console.log(receiptP);

  receiptP = receiptP.replace('$', '');
  // console.log(receiptP);

  receiptP = Number(receiptP);
  // console.log(receiptP);

  subtotal = subtotal - receiptP;
  // console.log(subtotal);

  subtotal = subtotal.toFixed(2);
  // console.log(subtotal);
  subtotal = Number(subtotal);
  // console.log(subtotal);

  subtotal = subtotal.toFixed(2);
  $( "#subtotal" ).html('$' + subtotal);
  // console.log(subtotal);

  tax = (subtotal * .1);
  tax = tax.toFixed(2);
  $( "#tax" ).html('$' + tax);
    // console.log(tax);

  subtotal = Number(subtotal);
  // console.log('**', subtotal);
  tax = Number(tax);
  // console.log('**', tax);
  total = (subtotal + tax);
  // console.log(total);

  total = Number(total);
  // console.log(total);
  total = total.toFixed(2);
  $( "#total" ).html('$' + total);
  // console.log(total);

  $(this).closest('tr').remove()

})

// create place order button with basic validation
