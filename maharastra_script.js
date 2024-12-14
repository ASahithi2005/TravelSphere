const places = [
    // Historical
    { 
        name: "Gateway of India", 
        category: "historical", 
        image: "files/gatewayofindia1.jpg", 
        state: "Maharashtra", 
        description: "A symbol of India's history and heritage, the Gateway of India stands tall overlooking the Arabian Sea, with intricate architecture." 
    },
    { 
        name: "Ajanta Caves", 
        category: "historical", 
        image: "files/ajantacaves1.jpg", 
        state: "Maharashtra", 
        description: "The ancient Ajanta Caves are famous for their exquisite Buddhist rock-cut architecture and stunning frescoes." 
    },
    { 
        name: "Ellora Caves", 
        category: "historical", 
        image: "files/elloracaves1.jpg", 
        state: "Maharashtra", 
        description: "Ellora Caves are a complex of rock-cut temples and monasteries, showcasing intricate carvings from Hindu, Buddhist, and Jain traditions." 
    },
    { 
        name: "Shaniwar Wada", 
        category: "historical", 
        image: "files/shaniwarwada1.jpg", 
        state: "Maharashtra", 
        description: "Shaniwar Wada is a historical fortification in Pune, famous for its architecture and intriguing stories from the Peshwa dynasty." 
    },

    // Nature
    { 
        name: "Sanjay Gandhi National Park", 
        category: "nature", 
        image: "files/sanjaygandhinationalpark1.jpg", 
        state: "Maharashtra", 
        description: "A green oasis amidst the urban sprawl of Mumbai, the park offers nature walks, wildlife sightings, and a serene lake." 
    },
    { 
        name: "Koyna Wildlife Sanctuary", 
        category: "nature", 
        image: "files/konyasanctuary1.jpg", 
        state: "Maharashtra", 
        description: "Koyna Wildlife Sanctuary is a lush, green reserve offering an ideal setting for bird watching and wildlife exploration." 
    },
    { 
        name: "Bhandardara", 
        category: "nature", 
        image: "files/bhandrardara1.jpg", 
        state: "Maharashtra", 
        description: "A peaceful getaway in the Western Ghats, Bhandardara is known for its waterfalls, lakes, and breathtaking mountain views." 
    },
    { 
        name: "Matheran", 
        category: "nature", 
        image: "files/matheran1.jpg", 
        state: "Maharashtra", 
        description: "Matheran is a scenic hill station known for its colonial architecture, panoramic views, and eco-friendly atmosphere." 
    },

    // Adventure
    { 
        name: "Trekking at Harishchandragad", 
        category: "adventure", 
        image: "files/harishchandragad1.jpg", 
        state: "Maharashtra", 
        description: "Harishchandragad is a rugged fort with challenging treks, offering mesmerizing views and a rich history." 
    },
    { 
        name: "Rafting in Kundalika River", 
        category: "adventure", 
        image: "files/kundalikarafting1.jpg", 
        state: "Maharashtra", 
        description: "The Kundalika River offers a thrilling rafting experience with exciting rapids and beautiful surroundings." 
    },
    { 
        name: "Parasailing in Alibaug", 
        category: "adventure", 
        image: "files/parasailingalibaug1.jpg", 
        state: "Maharashtra", 
        description: "Enjoy the thrill of parasailing at Alibaug, with its beautiful beaches and stunning coastal views." 
    },
    { 
        name: "Camping at Pawna Lake", 
        category: "adventure", 
        image: "files/pawnalake1.jpg", 
        state: "Maharashtra", 
        description: "Pawna Lake is a popular camping destination, offering a peaceful lakeside experience with numerous adventure activities." 
    }
];

// Function to display places based on category
function filterPlaces(category) {
    const container = document.getElementById("places-container");
    container.innerHTML = ""; // Clear previous places
    const filteredPlaces = places.filter(place => place.category === category);

    if (filteredPlaces.length === 0) {
        container.innerHTML = `<p>No places found for this category.</p>`;
    } else {
        filteredPlaces.forEach(place => {
            const placeCard = `
                <div class="place">
                    <img src="${place.image}" alt="${place.name}">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                </div>
            `;
            container.innerHTML += placeCard;
        });
    }
}

// Default category display
filterPlaces("historical");