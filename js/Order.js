$('.abouton').on('click', function(event) {
    event.preventDefault();
    $("#phase1").hide();
    $("#phase2").show();
    $('#nom').text($('#fname').val());
    $('#prenom').text($('#lname').val());
    $('#mail').text($('#email').val());
    $('#tel').text($('#phone').val());
    $('#etab').text($('#school').val());
    $('#ville').text($('#city').val());
    $('#cp').text($('#zip').val());
    $('#pays').text($('#country').val());
    window.scrollTo(0, 0);
});

$("#resumbutton").on('click', function(event) {
    event.preventDefault();
    $(".pdf").show();
    var element = document.getElementById('pdf');
    html2pdf().from(element).set({
        margin: 1,
        filename: 'demande_devis.pdf',
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    }).save().then(function() {
        $(".pdf").hide();
    });
});

$("#phase2").hide();
$(".pdf").hide();