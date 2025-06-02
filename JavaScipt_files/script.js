// Sample data for places with detailed information
const places = [
    // Telangana
    { 
        name: "Charminar", 
        category: "historical", 
        image: "files/charminar.png", 
        state: "Telangana", 
        description: "Built in 1591, Charminar is a globally recognized symbol of Hyderabad with four grand arches and rich history." 
    },
    { 
        name: "Golconda Fort", 
        category: "historical", 
        image: "files/golconda.png", 
        state: "Telangana", 
        description: "A former capital of medieval Golconda Sultanate, the fort is known for its unique acoustic design and grandeur." 
    },
    { 
        name: "Ramoji Film City", 
        category: "city", 
        image: "files/ramoji.png", 
        state: "Telangana", 
        description: "One of the world’s largest integrated film cities, it features film sets, amusement parks, and themed attractions." 
    },
    { 
        name: "Hussain Sagar Lake", 
        category: "nature", 
        image: "hussainsagar.jpg", 
        state: "Telangana", 
        description: "A beautiful artificial lake built in 1562 with a massive Buddha statue in the center, a popular spot for boating." 
    },
    { 
        name: "Ananthagiri Hills", 
        category: "adventure", 
        image: "ananthagiri.jpg", 
        state: "Telangana", 
        description: "A tranquil hill station perfect for trekking, with lush forests and stunning views of the Deccan Plateau." 
    },

    // Kerala
    { 
        name: "Munnar", 
        category: "nature", 
        image: "munnar.jpg", 
        state: "Kerala", 
        description: "Famous for its sprawling tea plantations, Munnar is a serene hill station with misty mountains and valleys." 
    },
    { 
        name: "Fort Kochi", 
        category: "historical", 
        image: "fortkochi.jpg", 
        state: "Kerala", 
        description: "A historic seaside town with a blend of Dutch, Portuguese, and British colonial architecture." 
    },
    { 
        name: "Alleppey", 
        category: "city", 
        image: "alleppey.jpg", 
        state: "Kerala", 
        description: "Known as the Venice of the East, Alleppey is famous for its houseboats and scenic backwaters." 
    },
    { 
        name: "Wayanad", 
        category: "adventure", 
        image: "wayanad.jpg", 
        state: "Kerala", 
        description: "A haven for nature lovers, Wayanad offers trekking trails, waterfalls, and wildlife sanctuaries." 
    },

    // Rajasthan
    { 
        name: "Amber Fort", 
        category: "historical", 
        image: "amberfort.jpg", 
        state: "Rajasthan", 
        description: "A majestic fort overlooking Maota Lake, known for its intricate architecture and light show." 
    },
    { 
        name: "Thar Desert", 
        category: "adventure", 
        image: "thardesert.jpg", 
        state: "Rajasthan", 
        description: "Explore the golden sand dunes of the Thar Desert with camel safaris and cultural performances." 
    },
    { 
        name: "Udaipur", 
        category: "city", 
        image: "udaipur.jpg", 
        state: "Rajasthan", 
        description: "The City of Lakes offers romantic palaces, serene boat rides, and vibrant bazaars." 
    },
    { 
        name: "Keoladeo National Park", 
        category: "nature", 
        image: "keoladeo.jpg", 
        state: "Rajasthan", 
        description: "A UNESCO World Heritage Site, this bird sanctuary is home to over 350 species of birds." 
    },

    // Karnataka
    { 
        name: "Mysore Palace", 
        category: "historical", 
        image: "mysorepalace.jpg", 
        state: "Karnataka", 
        description: "A stunning Indo-Saracenic palace, known for its dazzling lights during Dussehra." 
    },
    { 
        name: "Coorg", 
        category: "nature", 
        image: "coorg.jpg", 
        state: "Karnataka", 
        description: "The Scotland of India, Coorg offers coffee plantations, waterfalls, and misty hills." 
    },
    { 
        name: "Bangalore", 
        category: "city", 
        image: "bangalore.jpg", 
        state: "Karnataka", 
        description: "Known as the Silicon Valley of India, it is a bustling hub for technology, parks, and vibrant nightlife." 
    },
    { 
        name: "Nandi Hills", 
        category: "adventure", 
        image: "nandihills.jpg", 
        state: "Karnataka", 
        description: "A picturesque hill station ideal for sunrise views, cycling, and paragliding." 
    },
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
