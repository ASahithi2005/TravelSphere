const places = [
    // Historical
    { 
        name: "Charminar", 
        category: "historical", 
        image: "files/charminar.jpg", 
        state: "Telangana", 
        description: "A majestic 16th-century mosque, Charminar is an iconic symbol of Hyderabad with intricate architecture." 
    },
    { 
        name: "Golconda Fort", 
        category: "historical", 
        image: "files/golconda.png", 
        state: "Telangana", 
        description: "Golconda Fort is a historic fortification offering panoramic views of the city and rich Mughal architecture." 
    },
    { 
        name: "Qutub Shahi Tombs", 
        category: "historical", 
        image: "files/qutubshahitombs1.jpg", 
        state: "Telangana", 
        description: "A complex of tombs built by the Qutub Shahi rulers, showcasing Indo-Saracenic architecture and peaceful surroundings." 
    },
    { 
        name: "Chilkur Balaji Temple", 
        category: "historical", 
        image: "files/chilkurbalaji1.jpg", 
        state: "Telangana", 
        description: "An ancient temple dedicated to Lord Venkateswara, also known for its belief in fulfilling devotees' wishes." 
    },

    // Nature
    { 
        name: "Hussain Sagar Lake", 
        category: "nature", 
        image: "files/hussainsagar1.jpg", 
        state: "Telangana", 
        description: "A man-made lake in the heart of Hyderabad, offering scenic boat rides and beautiful views of the city skyline." 
    },
    { 
        name: "KBR National Park", 
        category: "nature", 
        image: "files/kbrpark1.jpg", 
        state: "Telangana", 
        description: "Located in Hyderabad, this national park is a green oasis offering walking trails and diverse flora and fauna." 
    },
    { 
        name: "Pochampally", 
        category: "nature", 
        image: "files/pochampally1.jpg", 
        state: "Telangana", 
        description: "Known for its scenic beauty, Pochampally is a peaceful village famous for its silk weaving industry and landscapes." 
    },
    { 
        name: "Mrugavani National Park", 
        category: "nature", 
        image: "files/mrugavani1.jpg", 
        state: "Telangana", 
        description: "A wildlife park on the outskirts of Hyderabad, home to various species of animals and birds amidst natural beauty." 
    },

    // Adventure
    { 
        name: "Trekking at Bhongir Fort", 
        category: "adventure", 
        image: "files/bhongirfort1.jpg", 
        state: "Telangana", 
        description: "An exciting trekking adventure leading to a historical fort, offering panoramic views of the surrounding landscape." 
    },
    { 
        name: "Boating at Hussain Sagar Lake", 
        category: "adventure", 
        image: "files/boatinghussainsagar1.jpg", 
        state: "Telangana", 
        description: "Enjoy thrilling boat rides on the picturesque Hussain Sagar Lake with breathtaking views of the city and Buddha statue." 
    },
    { 
        name: "Rock Climbing at Ananthagiri Hills", 
        category: "adventure", 
        image: "files/ananthagirihills1.jpg", 
        state: "Telangana", 
        description: "Explore the rugged terrain and enjoy rock climbing at Ananthagiri Hills, perfect for adventure enthusiasts." 
    },
    { 
        name: "Cycling at Osmania University Campus", 
        category: "adventure", 
        image: "files/osmaniacampus1.jpg", 
        state: "Telangana", 
        description: "A cycling adventure through the scenic Osmania University campus, surrounded by green spaces and historic buildings." 
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