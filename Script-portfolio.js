function showDestinations() {
    document.getElementById('destinations').classList.toggle('hidden');
}

function showDestinationDetails(destination) {
    const titleElement = document.getElementById('destination-title');
    const imageElement = document.getElementById('destination-image');
    const descriptionElement = document.getElementById('destination-description');

    if (destination === 'Paris') {
        titleElement.textContent = 'Paris';
        imageElement.src = 'https://github.com/mahk3727/JavaScript-Projects/blob/main/paris.jpg';
        descriptionElement.textContent = 'Experience the romance and charm of the City of Light.';
    } else if (destination === 'Tokyo') {
        titleElement.textContent = 'Tokyo';
        imageElement.src = 'https://github.com/mahk3727/JavaScript-Projects/blob/main/tokyo.jpg';
        descriptionElement.textContent = 'Discover the unique blend of tradition and modernity in Tokyo.';
    }

    document.getElementById('destination-details').classList.remove('hidden');
}
