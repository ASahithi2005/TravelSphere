const places = [
    // Historical
    { 
        name: "Mysore Palace", 
        category: "historical", 
        image: "files/mysorepalace.jpg", 
        state: "Karnataka", 
        description: "An Indo-Saracenic architectural marvel, Mysore Palace is renowned for its grandeur and royal history." 
    },
    { 
        name: "Hampi", 
        category: "historical", 
        image: "files/hampi.jpg", 
        state: "Karnataka", 
        description: "A UNESCO World Heritage Site, Hampi features ancient ruins, temples, and majestic rock formations." 
    },
    { 
        name: "Badami Caves", 
        category: "historical", 
        image: "files/badamicaves.jpg", 
        state: "Karnataka", 
        description: "These rock-cut temples date back to the 6th century and showcase a blend of Hindu and Jain architecture." 
    },
    { 
        name: "Bijapur Gol Gumbaz", 
        category: "historical", 
        image: "files/golgumbaz.jpg", 
        state: "Karnataka", 
        description: "Gol Gumbaz, the tomb of Sultan Mohammed Adil Shah, features the world's second-largest dome and echoes." 
    },

    // Nature
    { 
        name: "Coorg", 
        category: "nature", 
        image: "files/coorg.jpg", 
        state: "Karnataka", 
        description: "Coorg is known for its coffee plantations, misty hills, and vibrant flora, offering a serene escape." 
    },
    { 
        name: "Kabini Wildlife Sanctuary", 
        category: "nature", 
        image: "files/kabini.jpg", 
        state: "Karnataka", 
        description: "A haven for wildlife, Kabini is famous for its rich biodiversity, including tigers, elephants, and exotic birds." 
    },
    { 
        name: "Nandi Hills", 
        category: "nature", 
        image: "files/nandihills.jpg", 
        state: "Karnataka", 
        description: "Known for its cool climate and scenic views, Nandi Hills is a popular destination for nature lovers." 
    },
    { 
        name: "Sakleshpur", 
        category: "nature", 
        image: "files/sakleshpur.jpg", 
        state: "Karnataka", 
        description: "Nestled in the Western Ghats, Sakleshpur is famous for its coffee plantations, forests, and serene landscapes." 
    },

    // Adventure
    { 
        name: "Trekking in Kumara Parvatha", 
        category: "adventure", 
        image: "files/kumaraparvatha.jpg", 
        state: "Karnataka", 
        description: "Kumara Parvatha is one of Karnataka's toughest treks, offering breathtaking views of the Western Ghats." 
    },
    { 
        name: "White Water Rafting in Coorg", 
        category: "adventure", 
        image: "files/whitewaterrafting.jpg", 
        state: "Karnataka", 
        description: "Coorg offers thrilling white water rafting experiences in the rapids of the Barapole River." 
    },
    { 
        name: "Rock Climbing in Ramanagaram", 
        category: "adventure", 
        image: "files/ramanagaram.jpg", 
        state: "Karnataka", 
        description: "Ramanagaram is famous for rock climbing, known for its rocky terrain and scenic surroundings." 
    },
    { 
        name: "Paragliding in Nandi Hills", 
        category: "adventure", 
        image: "files/nandihills.jpg", 
        state: "Karnataka", 
        description: "Nandi Hills offers thrilling paragliding experiences with spectacular views of the surrounding hills and valleys." 
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