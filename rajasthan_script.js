// Sample data for places with detailed information
const places = [
    { 
        name: "Jaipur City Palace", 
        category: "historical", 
        image: "files/jaipurcitypalace.jpg", 
        state: "Rajasthan", 
        description: "A stunning blend of Mughal and Rajasthani architecture, the City Palace is a cultural landmark with intricate courtyards and museums." 
    },
    { 
        name: "Amer Fort", 
        category: "historical", 
        image: "files/amerfort1.jpg", 
        state: "Rajasthan", 
        description: "Known for its artistic Hindu-style elements, Amer Fort boasts ornate gateways, courtyards, and panoramic views of the Aravalli Hills." 
    },
    { 
        name: "Lake Palace", 
        category: "historical", 
        image: "files/lakepalace1.jpg", 
        state: "Rajasthan", 
        description: "An exquisite white marble palace set amidst Lake Pichola, known for its elegance and luxury as a heritage hotel." 
    },
    { 
        name: "Nahargarh Fort", 
        category: "historical", 
        image: "files/nfort1.jpg", 
        state: "Rajasthan", 
        description: "Situated on the Aravalli Hills, this fort offers stunning sunset views and was a retreat for royal family picnics." 
    },
    { 
        name: "Keoladeo National Park", 
        category: "nature", 
        image: "files/keonp.jpg", 
        state: "Rajasthan", 
        description: "A UNESCO World Heritage Site, it is a haven for birdwatchers with over 370 species of birds, including migratory ones." 
    },
    { 
        name: "Elefanjoy Elephant Sanctuary", 
        category: "nature", 
        image: "files/elephanjoy1.jpg", 
        state: "Rajasthan", 
        description: "A unique experience with elephants where visitors can interact, feed, and even paint them in a natural environment." 
    },
    { 
        name: "Sariska Tiger Reserve", 
        category: "nature", 
        image: "files/Sariska1.jpg", 
        state: "Rajasthan", 
        description: "Home to Bengal tigers and rich biodiversity, Sariska offers exciting safari opportunities in a lush landscape." 
    },
    { 
        name: "Lake Pichola", 
        category: "nature", 
        image: "files/lakepichola1.jpg", 
        state: "Rajasthan", 
        description: "A picturesque artificial lake surrounded by hills, palaces, and ghats, perfect for a serene boat ride." 
    },
    { 
        name: "Ranthambore Day Trip from Jaipur with Jeep", 
        category: "adventure", 
        image: "files/ra1.jpg", 
        state: "Rajasthan", 
        description: "Experience thrilling wildlife safaris in Ranthambore, home to majestic tigers and rich flora and fauna." 
    },
    { 
        name: "Desert Camel Safari Day Tour In Jodhpur", 
        category: "adventure", 
        image: "files/camelsafari1.jpg", 
        state: "Rajasthan", 
        description: "Traverse the golden sands of Jodhpur's Thar Desert with a camel safari that includes cultural performances and local cuisine." 
    },
    { 
        name: "Thar Desert", 
        category: "adventure", 
        image: "files/thar.jpg", 
        state: "Rajasthan", 
        description: "Explore the vast expanse of the Thar Desert with thrilling activities like dune bashing and star gazing under the clear night sky." 
    },
    { 
        name: "Hot Air Ballooning", 
        category: "adventure", 
        image: "files/hab1.jpg", 
        state: "Rajasthan", 
        description: "Float above Jaipur's iconic landmarks and enjoy a breathtaking view of the cityscape and surrounding countryside." 
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