const places = [
    // Historical
    { 
        name: "Golden Temple", 
        category: "historical", 
        image: "files/goldentemple.jpg", 
        state: "Punjab", 
        description: "The holiest shrine for Sikhs, the Golden Temple in Amritsar is a stunning architectural masterpiece surrounded by a serene water pool." 
    },
    { 
        name: "Jallianwala Bagh", 
        category: "historical", 
        image: "files/jallianwalabagh.jpg", 
        state: "Punjab", 
        description: "A historical site of immense significance, Jallianwala Bagh is known for the tragic massacre during British colonial rule in 1919." 
    },
    { 
        name: "Wagah Border", 
        category: "historical", 
        image: "files/wagahborder.jpg", 
        state: "Punjab", 
        description: "A historic border post between India and Pakistan, famous for its daily flag-lowering ceremony, symbolizing the countries' friendship." 
    },
    { 
        name: "Sheesh Mahal", 
        category: "historical", 
        image: "files/sheeshmahal.jpg", 
        state: "Punjab", 
        description: "An architectural gem in Patiala, the Sheesh Mahal is famous for its mirrored walls and stunning gardens." 
    },

    // Nature
    { 
        name: "Harike Wetland", 
        category: "nature", 
        image: "files/harikewetland.jpg", 
        state: "Punjab", 
        description: "A unique wetland sanctuary, Harike is home to a diverse range of migratory birds and aquatic species, perfect for birdwatching." 
    },
    { 
        name: "Ropar Wetland", 
        category: "nature", 
        image: "files/roparwetland.jpg", 
        state: "Punjab", 
        description: "Ropar Wetland is a scenic area ideal for nature lovers, with opportunities for bird watching and peaceful boat rides." 
    },
    { 
        name: "Keshopur Wildlife Sanctuary", 
        category: "nature", 
        image: "files/keshopur.jpg", 
        state: "Punjab", 
        description: "A haven for wildlife enthusiasts, Keshopur Wildlife Sanctuary is known for its lush greenery and variety of species." 
    },
    { 
        name: "Naina Devi Temple", 
        category: "nature", 
        image: "files/nainadevi.jpg", 
        state: "Punjab", 
        description: "Set in a picturesque location amidst the Shivalik hills, this temple offers a perfect blend of spirituality and natural beauty." 
    },

    // Adventure
    // { 
    //     name: "Rafting at Rishikesh", 
    //     category: "adventure", 
    //     image: "files/rishikeshrafting.jpg", 
    //     state: "Punjab", 
    //     description: "Enjoy thrilling rafting experiences in the Ganges at Rishikesh, a popular adventure destination for rafting enthusiasts." 
    // },
    { 
        name: "Trekking at Morni Hills", 
        category: "adventure", 
        image: "files/mornihills.jpg", 
        state: "Punjab", 
        description: "A serene trekking spot, Morni Hills offers a blend of nature and adventure with its scenic views and lush surroundings." 
    },
    { 
        name: "Paragliding in Solang Valley", 
        category: "adventure", 
        image: "files/solangparagliding.jpg", 
        state: "Punjab", 
        description: "Experience the thrill of paragliding in Solang Valley, offering majestic views of the mountains and valleys." 
    },
    { 
        name: "Cycling at Chandigarh", 
        category: "adventure", 
        image: "files/chandigarhcycling.jpg", 
        state: "Punjab", 
        description: "Chandigarh offers a vibrant cycling culture, with well-maintained cycling routes and beautiful gardens to explore." 
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
