const places = [
    // Historical
    { 
        name: "Padmanabhaswamy Temple", 
        category: "historical", 
        image: "files/padmanabhaswamy.png", 
        state: "Kerala", 
        description: "This grand temple dedicated to Lord Vishnu showcases traditional Kerala-style architecture and intricate murals." 
    },
    { 
        name: "Kochi Fort", 
        category: "historical", 
        image: "files/fortkochi.png", 
        state: "Kerala", 
        description: "A historical area known for its colonial architecture, bustling streets, and Chinese fishing nets." 
    },
    { 
        name: "Thalassery Fort", 
        category: "historical", 
        image: "files/tfort.png", 
        state: "Kerala", 
        description: "An ancient monument in Kannur district that was built by the British East India Company in 1703. It's located on a rocky cliff and offers views of the city." 
    },
    { 
        name: "St. Francis Church", 
        category: "historical", 
        image: "files/stfrancis.png", 
        state: "Kerala", 
        description: "Built in 1503, it is the oldest European church in India, reflecting the Portuguese colonial influence." 
    },

    // Nature
    { 
        name: "Alleppey Backwaters", 
        category: "nature", 
        image: "files/alleppey.png", 
        state: "Kerala", 
        description: "A picturesque network of backwaters, famous for houseboat cruises through its tranquil waters and lush landscapes." 
    },
    { 
        name: "Munnar Tea Gardens", 
        category: "nature", 
        image: "files/munnar.png", 
        state: "Kerala", 
        description: "Munnar is known for its sprawling tea plantations and cool climate, offering breathtaking panoramic views." 
    },
    { 
        name: "Athirappilly Waterfalls", 
        category: "nature", 
        image: "files/athirappilly.png", 
        state: "Kerala", 
        description: "Often called the 'Niagara of India,' this waterfall offers stunning views and is surrounded by lush forests." 
    },
    { 
        name: "Wayanad Wildlife Sanctuary", 
        category: "nature", 
        image: "files/wayanad.png", 
        state: "Kerala", 
        description: "A haven for wildlife enthusiasts, this sanctuary is home to elephants, tigers, and rich flora and fauna." 
    },

    // Adventure
    { 
        name: "Paragliding in Vagamon", 
        category: "adventure", 
        image: "files/vagamon.png", 
        state: "Kerala", 
        description: "Vagamon is a popular spot for paragliding, offering thrilling views of the lush hills and valleys." 
    },
    { 
        name: "Trekking in Agasthyakoodam", 
        category: "adventure", 
        image: "files/agasthyakoodam.png", 
        state: "Kerala", 
        description: "Agasthyakoodam is the second-highest peak in Kerala, attracting trekkers with its scenic trails and rich biodiversity." 
    },
    { 
        name: "Bamboo Rafting in Periyar", 
        category: "adventure", 
        image: "files/bamboorafting.png", 
        state: "Kerala", 
        description: "Experience the thrill of bamboo rafting in Periyar Lake, surrounded by pristine nature and wildlife." 
    },
    { 
        name: "Rock Climbing in Varkala", 
        category: "adventure", 
        image: "files/varkala.png", 
        state: "Kerala", 
        description: "Varkala offers rock climbing opportunities with stunning views of the Arabian Sea and the cliffs." 
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