const places = [
    // Historical
    { 
        name: "Taj Mahal", 
        category: "historical", 
        image: "files/tajmahal.jpg", 
        state: "Uttar Pradesh", 
        description: "A symbol of love, the Taj Mahal is a stunning white marble mausoleum and one of the Seven Wonders of the World." 
    },
    { 
        name: "Agra Fort", 
        category: "historical", 
        image: "files/agrafort.jpg", 
        state: "Uttar Pradesh", 
        description: "A UNESCO World Heritage Site, Agra Fort is an impressive Mughal fort made of red sandstone." 
    },
    { 
        name: "Fatehpur Sikri", 
        category: "historical", 
        image: "files/fatehpursikri.jpg", 
        state: "Uttar Pradesh", 
        description: "A former Mughal capital, Fatehpur Sikri is known for its well-preserved architecture and historic significance." 
    },
    { 
        name: "Kashi Vishwanath Temple", 
        category: "historical", 
        image: "files/kashivishwanath.jpg", 
        state: "Uttar Pradesh", 
        description: "An ancient and revered Hindu temple dedicated to Lord Shiva, located in the spiritual city of Varanasi." 
    },

    // Nature
    { 
        name: "Dudhwa National Park", 
        category: "nature", 
        image: "files/dudhwa.jpg", 
        state: "Uttar Pradesh", 
        description: "A biodiversity hotspot, Dudhwa is home to a variety of wildlife, including tigers, rhinos, and elephants." 
    },
    { 
        name: "Sundarban Reserve Forest", 
        category: "nature", 
        image: "files/sundarban.jpg", 
        state: "Uttar Pradesh", 
        description: "Known for its marshes and mangroves, this reserve is home to many endangered species like the Bengal tiger." 
    },
    { 
        name: "Braj Bhoomi", 
        category: "nature", 
        image: "files/brajbhoomi.jpg", 
        state: "Uttar Pradesh", 
        description: "This sacred region is associated with Lord Krishna and is renowned for its picturesque landscapes." 
    },
    { 
        name: "Ramgarh Tal", 
        category: "nature", 
        image: "files/ramgarhtal.jpg", 
        state: "Uttar Pradesh", 
        description: "A serene lake surrounded by hills, Ramgarh Tal is ideal for boating and picnics." 
    },

    // Adventure
    { 
        name: "Trekking in Rajaji National Park", 
        category: "adventure", 
        image: "files/rajaji.jpg", 
        state: "Uttar Pradesh", 
        description: "Rajaji National Park offers excellent trekking routes through its forested hills and diverse wildlife." 
    },
    { 
        name: "Paragliding in Nainital", 
        category: "adventure", 
        image: "files/nainitalparagliding.jpg", 
        state: "Uttar Pradesh", 
        description: "Nainital offers a thrilling paragliding experience with panoramic views of the surrounding hills and lakes." 
    },
    { 
        name: "River Rafting in Rishikesh", 
        category: "adventure", 
        image: "files/rishikeshrafting.jpg", 
        state: "Uttar Pradesh", 
        description: "Rishikesh is a popular spot for river rafting in the Ganges, with rapids of varying intensity for adventure seekers." 
    },
    { 
        name: "Wildlife Safari in Dudhwa National Park", 
        category: "adventure", 
        image: "files/dudhwa_safari.jpg", 
        state: "Uttar Pradesh", 
        description: "Dudhwa National Park offers thrilling wildlife safaris where visitors can spot tigers, rhinos, and many more animals." 
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