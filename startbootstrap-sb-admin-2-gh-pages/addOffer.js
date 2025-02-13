/*// addOffer.js Partie 1 
function validerFormulaire() {
    let title = document.getElementById("T1").value;
    let description = document.getElementById("T2").value;
    let departureDate = document.getElementById("T3").value;
    let returnDate = document.getElementById("T4").value;
    let price = document.getElementById("T5").value;

    if (title.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
        return false;
    }

    if (!/^[A-Za-z ]{3,}$/.test(description)) {
        alert("La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.");
        return false;
    }

    if (new Date(departureDate) >= new Date(returnDate)) {
        alert("La date de retour doit être ultérieure à la date de départ.");
        return false;
    }

    if (isNaN(price) || parseFloat(price) <= 0) {
        alert("Le prix doit être un nombre positif.");
        return false;
    }

    return true;
}

// addOffer.js

document.getElementById('travel-offer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Appel de la fonction de validation
    if (validerFormulaire()) {
        // Si le formulaire est valide, afficher le message de succès
        document.getElementById('success-message').textContent = 'Offre ajoutée avec succès !';
        document.getElementById('success-message').style.color = 'green';
    }
});

function validerFormulaire() {
    let title = document.getElementById("T1").value;
    let description = document.getElementById("T2").value;
    let departureDate = document.getElementById("T3").value;
    let returnDate = document.getElementById("T4").value;
    let price = document.getElementById("T5").value;

    // Réinitialisation des messages d'erreur
    document.querySelectorAll('.error-message').forEach(e => e.textContent = '');
    document.getElementById('success-message').textContent = '';

    let valid = true;

    // Validation du titre
    if (title.length < 3) {
        document.getElementById('title-error').textContent = "Le titre doit contenir au moins 3 caractères.";
        valid = false;
    }

    // Validation de la destination
    if (!/^[A-Za-z ]{3,}$/.test(description)) {
        document.getElementById('destination-error').textContent = "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.";
        valid = false;
    }

    // Validation des dates
    if (new Date(departureDate) >= new Date(returnDate)) {
        document.getElementById('return-date-error').textContent = "La date de retour doit être ultérieure à la date de départ.";
        valid = false;
    }

    // Validation du prix
    if (isNaN(price) || parseFloat(price) <= 0) {
        document.getElementById('price-error').textContent = "Le prix doit être un nombre positif.";
        valid = false;
    }

    return valid; // Retourne vrai si le formulaire est valide
}
    */
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments
    const titleInput = document.getElementById('T1');
    const destinationInput = document.getElementById('T2');
    const titleError = document.getElementById('title-error');
    const destinationError = document.getElementById('destination-error');

    // Fonction pour vérifier le champ Title
    function validateTitle() {
        const titleValue = titleInput.value;
        if (titleValue.length < 3) {
            titleError.textContent = "Le titre doit contenir au moins 3 caractères.";
            titleError.style.color = "red";
        } else {
            titleError.textContent = "Correct";
            titleError.style.color = "green";
        }
    }

    // Fonction pour vérifier le champ Destination
    function validateDestination() {
        const destinationValue = destinationInput.value;
        const regex = /^[A-Za-z\s]{3,}$/; // Vérifie les lettres et les espaces

        if (!regex.test(destinationValue)) {
            destinationError.textContent = "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.";
            destinationError.style.color = "red";
        } else {
            destinationError.textContent = "Correct";
            destinationError.style.color = "green";
        }
    }

    // Événements keyup
    titleInput.addEventListener('keyup', validateTitle);
    destinationInput.addEventListener('keyup', validateDestination);
});