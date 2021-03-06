$(document).ready(function() {
    $('select').material_select();
  });

  $(".button-collapse").sideNav();
  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');


var subtotal = 0;
var tax = 0;
var total = 0;
var max = 3;
$('.addToOder').click(function(a){
    var valueN = $(this).parent().parent().children('.card-content').children('.name').text();
    var valueP = $(this).parent().parent().children('.card-content').children('.price').text();
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
    valuePrice = Number(valuePrice);

    subtotal = Number(subtotal);
    subtotal = subtotal + valuePrice;
    subtotal = subtotal.toFixed(2);
    subtotal = Number(subtotal);
    $( "#subtotal" ).html('$' + subtotal);

    tax = (subtotal * 0.1);
    tax = tax.toFixed(2);
    $( "#tax" ).html('$' + tax);

    subtotal = Number(subtotal);
    tax = Number(tax);
    total = (subtotal + tax);
    total = total.toFixed(2);
    $( "#total" ).html('$' + total);

});

$('tbody').on('click', 'b[type="button"]', function(d){
  var receiptP = $(this).parent().parent().children('.receiptPrice').text();
  receiptP = receiptP.replace('$', '');
  receiptP = Number(receiptP);

  subtotal = subtotal - receiptP;
  subtotal = subtotal.toFixed(2);
  subtotal = Number(subtotal);
  subtotal = subtotal.toFixed(2);
  $( "#subtotal" ).html('$' + subtotal);

  tax = (subtotal * 0.1);
  tax = tax.toFixed(2);

  $( "#tax" ).html('$' + tax);
  subtotal = Number(subtotal);
  tax = Number(tax);

  total = (subtotal + tax);
  total = Number(total);
  total = total.toFixed(2);
  $( "#total" ).html('$' + total);
  $(this).closest('tr').remove();

});

$('#submitBtn').click (function() {
  if ($('#recieptTBody tr').length == 0) {
    Materialize.toast('your Order cannot be Empty!', 4000);
  } else if (icon_name.value.length == 0) {
    Materialize.toast('the Name field cannot be blank!', 4000);
  } else if (icon_telephone.value.length == 0) {
    Materialize.toast('the Telephone field cannot be blank!', 4000);
  } else if (icon_address.value.length == 0) {
    Materialize.toast('the Address field cannot be blank!', 4000);
  } else (Materialize.toast('your Order has been Submitted!', 4000));
});
