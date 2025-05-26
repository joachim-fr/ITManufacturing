$('#submitButton').on('click', function(event) {
    event.preventDefault();

    // Masquer la phase 1 et afficher la phase 2
    $("#phase1").hide();
    $("#phase2").show();

    // Remplir les informations dans la section de résumé
    $('#nom').text($('#fname').val());
    $('#prenom').text($('#lname').val());
    $('#mail').text($('#email').val());
    $('#tel').text($('#phone').val());
    $('#ville').text($('#city').val());
    $('#cp').text($('#zip').val());
    $('#pays').text($('#country').val());
    $('#device').text($('#device').val());

    // Remonter en haut de la page
    window.scrollTo(0, 0);
});

// Gestionnaire d'événement pour le bouton "Download My Request"
$("#resumbutton").on('click', function(event) {
    event.preventDefault();

    // Afficher la section PDF temporairement
    $(".pdf").show();

    // Générer le PDF
    var element = document.getElementById('pdf');
    html2pdf().from(element).set({
        margin: 1,
        filename: 'request_quote.pdf',
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    }).save().then(function() {
        // Masquer la section PDF après la génération
        $(".pdf").hide();
    });
});

// Masquer la phase 2 et la section PDF au chargement de la page
$("#phase2").hide();
$(".pdf").hide();