const sitesData = {
  cairo: [
    {
      id: 1,
      title: "The Pyramids of Giza",
      location: "Giza, Egypt",
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368",
      description: "The Great Pyramid of Giza is the oldest and largest...",
      history: "Built as a tomb over a 10- to 20-year period...",
      visit: "Open daily from 8:00 AM to 5:00 PM..."
    },
    {
      id: 2,
      title: "The Egyptian Museum",
      location: "Tahrir Square, Cairo",
      image: "https://i.postimg.cc/V6r3NBqw/5bfe4154a1f78dcbfbfc0894211f2d2d.jpg",
      description: "The Museum of Egyptian Antiquities...",
      history: "Established in 1858...",
      visit: "Open daily from 9:00 AM to 5:00 PM..."
    }
  ],
  other: [
    {
      id: 3,
      title: "Luxor Temple",
      location: "Luxor, Egypt",
      image: "https://i.postimg.cc/tJMG2DTg/istockphoto-1484497494-612x612.jpg",
      description: "Luxor Temple is a large Ancient Egyptian temple...",
      history: "The temple was built by Amenhotep III...",
      visit: "Open daily from 6:00 AM to 10:00 PM..."
    },
    {
      id: 4,
      title: "Abu Simbel Temples",
      location: "Aswan, Egypt",
      image: "https://i.postimg.cc/158QfxCV/istockphoto-1222196925-612x612.jpg",
      description: "The Abu Simbel temples are two massive rock temples...",
      history: "The twin temples were originally carved...",
      visit: "Open daily from 5:00 AM to 6:00 PM..."
    }
  ],
  museums: {
    france: [
      {
        id: 5,
        title: "Louvre Museum",
        location: "Paris, France",
        image: "https://i.postimg.cc/MpRJm78W/received-905263444987172-300x300.jpg",
        description: "The Louvre Museum is the world's largest art museum...",
        history: "The Louvre's collection of Egyptian antiquities...",
        visit: "Open daily from 9:00 AM to 6:00 PM..."
      }
    ],
    uk: [
      {
        id: 7,
        title: "British Museum",
        location: "London, UK",
        image: "https://i.postimg.cc/y8w9wz5m/500px-British-Museum-Egypt-001.jpg",
        description: "The British Museum's Egyptian collection...",
        history: "The collection began in 1753...",
        visit: "Open daily from 10:00 AM to 5:00 PM..."
      },
      {
        id: 8,
        title: "Ashmolean Museum",
        location: "Oxford, UK",
        image: "https://i.postimg.cc/zDs1LtKq/degypt18003-0.jpg",
        description: "The Ashmolean Museum's Egyptian collections...",
        history: "The museum's Egyptian holdings began in 1683...",
        visit: "Open Tuesday-Sunday from 10:00 AM to 5:00 PM..."
      }
    ],
    usa: [
      {
        id: 9,
        title: "Metropolitan Museum of Art",
        location: "New York, USA",
        image: "https://i.postimg.cc/cJw1ySJ9/Dendur-Coloring-EGDP023050.jpg",
        description: "The Met's collection of ancient Egyptian art...",
        history: "The collection was begun in 1906...",
        visit: "Open Sunday-Thursday 10:00 AM to 5:30 PM..."
      },
      {
        id: 10,
        title: "University of Pennsylvania Museum",
        location: "Philadelphia, USA",
        image: "https://i.postimg.cc/VNW6DQcL/53283.jpg",
        description: "The Penn Museum houses one of the finest collections...",
        history: "The museum's Egyptian collection began in 1889...",
        visit: "Open Tuesday-Sunday from 10:00 AM to 5:00 PM..."
      }
    ]
  }
};

// Initialize the application
function initApp() {
  displaySites();
  setupEventListeners();
  startSlideShow();
}

// Display sites in the grid
function displaySites() {
  // Display Egyptian sites
  displayEgyptianSites();
  
  // Display international museums
  displayInternationalMuseums();
}

// Display Egyptian sites
function displayEgyptianSites() {
  const cairoGrid = document.querySelector('#cairo .sites-grid');
  const otherGrid = document.querySelector('#other .sites-grid');
  
  sitesData.cairo.forEach(site => {
    cairoGrid.appendChild(createSiteCard(site));
  });
  
  sitesData.other.forEach(site => {
    otherGrid.appendChild(createSiteCard(site));
  });
}

// Display international museums
function displayInternationalMuseums() {
  const allSitesGrid = document.querySelector('#all-sites');
  
  // Display all museums initially
  for (const country in sitesData.museums) {
    sitesData.museums[country].forEach(museum => {
      const card = createSiteCard(museum);
      card.setAttribute('data-country', country);
      allSitesGrid.appendChild(card);
    });
  }
}

// Create a site card element
function createSiteCard(site) {
  const card = document.createElement('div');
  card.className = 'site-card';
  card.setAttribute('data-id', site.id);
  
  card.innerHTML = `
    <img src="${site.image}" alt="${site.title}">
    <div class="card-content">
      <h3>${site.title}</h3>
      <p class="location"><i class="fas fa-map-marker-alt"></i> ${site.location}</p>
    </div>
  `;
  
  return card;
}

// Setup event listeners
function setupEventListeners() {
  // Tab switching
  setupTabSwitching();
  
  // Site card clicks
  setupSiteCardClicks();
  
  // Scanner functionality
  setupScanner();
  
  // Modal close button
  document.querySelector('.close-modal').addEventListener('click', closeModal);
}

// Setup tab switching
function setupTabSwitching() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Update active tab button
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Update active tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Setup site card clicks
function setupSiteCardClicks() {
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.site-card');
    if (card) {
      const siteId = parseInt(card.getAttribute('data-id'));
      showArtifactDetails(siteId);
    }
  });
}

// Show artifact details in modal
function showArtifactDetails(siteId) {
  let selectedSite = null;
  
  // Search in Egyptian sites
  for (const category of ['cairo', 'other']) {
    const found = sitesData[category].find(site => site.id === siteId);
    if (found) {
      selectedSite = found;
      break;
    }
  }
  
  // Search in international museums if not found in Egyptian sites
  if (!selectedSite) {
    for (const country in sitesData.museums) {
      const found = sitesData.museums[country].find(site => site.id === siteId);
      if (found) {
        selectedSite = found;
        break;
      }
    }
  }
  
  if (selectedSite) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
      <div>
        <img class="modal-image" src="${selectedSite.image}" alt="${selectedSite.title}">
      </div>
      <div class="modal-details">
        <h3>${selectedSite.title}</h3>
        <p class="location"><i class="fas fa-map-marker-alt"></i> ${selectedSite.location}</p>
        <p>${selectedSite.description}</p>
        <h4>History</h4>
        <p>${selectedSite.history}</p>
        <h4>Visit Information</h4>
        <p>${selectedSite.visit}</p>
        <div class="audio-controls">
          <p>Voice Description:</p>
          <div class="audio-btns">
            <button class="audio-btn" data-lang="ar"><i class="fas fa-play"></i> العربية</button>
            <button class="audio-btn" data-lang="en"><i class="fas fa-play"></i> English</button>
            <button class="audio-btn" data-lang="fr"><i class="fas fa-play"></i> Français</button>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners to audio buttons
    document.querySelectorAll('.audio-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        playAudioDescription(selectedSite.title, lang);
      });
    });
    
    openModal();
  }
}

// Setup scanner functionality
function setupScanner() {
  const startScanBtn = document.getElementById('start-scan');
  const stopScanBtn = document.getElementById('stop-scan');
  const scannerResults = document.querySelector('.scanner-results');
  const scannerBox = document.querySelector('.scanner-box');
  
  startScanBtn.addEventListener('click', function() {
    this.classList.add('hidden');
    stopScanBtn.classList.remove('hidden');
    scannerBox.classList.add('hidden');
    scannerResults.style.display = 'block';
    
    // Simulate scanning
    setTimeout(() => {
      document.getElementById('artifact-title').textContent = "Tutankhamun's Mask";
      document.getElementById('artifact-img').src = "https://images.unsplash.com/photo-1580106894036-3c9c5c7f3673";
      document.getElementById('artifact-desc').textContent = "The mask of Tutankhamun is a gold mask of the 18th-dynasty ancient Egyptian pharaoh Tutankhamun (reigned 1334–1325 BC). It was discovered by Howard Carter in 1925 in tomb KV62 and is now housed in the Egyptian Museum in Cairo.";
    }, 2000);
  });
  
  stopScanBtn.addEventListener('click', function() {
    this.classList.add('hidden');
    startScanBtn.classList.remove('hidden');
    scannerResults.style.display = 'none';
    scannerBox.classList.remove('hidden');
  });
}

// Play audio description
function playAudioDescription(title, lang) {
  // In a real app, this would play actual audio
  console.log(`Playing ${lang} audio description for ${title}`);
  alert(`Playing ${lang} audio description for ${title}`);
}

// Open modal
function openModal() {
  document.querySelector('.artifact-modal').classList.add('active');
}

// Close modal
function closeModal() {
  document.querySelector('.artifact-modal').classList.remove('active');
}

// Start slideshow
function startSlideShow() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }
  
  setInterval(nextSlide, 5000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
