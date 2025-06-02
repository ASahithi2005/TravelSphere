const places = [
    // Historical
    { 
        name: "Victoria Memorial", 
        category: "historical", 
        image: "files/victoriamemorial.jpg", 
        state: "West Bengal", 
        description: "A majestic marble building dedicated to Queen Victoria, reflecting British colonial architecture." 
    },
    { 
        name: "Howrah Bridge", 
        category: "historical", 
        image: "files/howrahbridge.jpg", 
        state: "West Bengal", 
        description: "An iconic symbol of Kolkata, Howrah Bridge is a cantilevered bridge over the Hooghly River." 
    },
    { 
        name: "Kalighat Temple", 
        category: "historical", 
        image: "files/kalighattemple.jpg", 
        state: "West Bengal", 
        description: "An ancient temple dedicated to Goddess Kali, located in the heart of Kolkata, known for its religious significance." 
    },
    { 
        name: "Murshidabad", 
        category: "historical", 
        image: "files/murshidabad.jpg", 
        state: "West Bengal", 
        description: "Once the seat of Nawab rulers, Murshidabad is home to palaces, mosques, and historical buildings." 
    },

    // Nature
    { 
        name: "Sundarbans National Park", 
        category: "nature", 
        image: "files/sundarbans.jpg", 
        state: "West Bengal", 
        description: "A UNESCO World Heritage Site, the Sundarbans are known for their mangrove forests and Bengal tigers." 
    },
    { 
        name: "Darjeeling", 
        category: "nature", 
        image: "files/darjeeling.jpg", 
        state: "West Bengal", 
        description: "Famous for its tea gardens, Darjeeling offers panoramic views of the Kanchenjunga mountain range." 
    },
    { 
        name: "Buxa Tiger Reserve", 
        category: "nature", 
        image: "files/buxatigerreserve.jpg", 
        state: "West Bengal", 
        description: "A protected area known for its diverse wildlife, including tigers, elephants, and leopards." 
    },
    { 
        name: "Dooars", 
        category: "nature", 
        image: "files/dooars.jpg", 
        state: "West Bengal", 
        description: "A scenic region near the Bhutanese border, Dooars is known for its lush forests and tea estates." 
    },

    // Adventure
    { 
        name: "Trekking in Sandakphu", 
        category: "adventure", 
        image: "files/sandakphu.jpg", 
        state: "West Bengal", 
        description: "Sandakphu is the highest peak in West Bengal, offering challenging treks with stunning views of the Himalayas." 
    },
    { 
        name: "White Water Rafting in Teesta River", 
        category: "adventure", 
        image: "files/teestarafting.jpg", 
        state: "West Bengal", 
        description: "Teesta River offers exhilarating white water rafting through the gorges of the Eastern Himalayas." 
    },
    { 
        name: "Rock Climbing in Darjeeling", 
        category: "adventure", 
        image: "files/darjeelingrockclimbing.jpg", 
        state: "West Bengal", 
        description: "Darjeeling offers rock climbing opportunities with its varied terrain and picturesque surroundings." 
    },
    { 
        name: "Paragliding in Kalimpong", 
        category: "adventure", 
        image: "files/kalimpongparagliding.jpg", 
        state: "West Bengal", 
        description: "Kalimpong offers an exciting paragliding experience with spectacular views of the Himalayas and tea gardens." 
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