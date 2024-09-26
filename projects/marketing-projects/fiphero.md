# FipHero

<div class="website">
  <ul>
    <li>
      <p><strong>Website</strong>: <a href="https://www.fiphero.org">FipHero</a></p>
    </li>
  </ul>
</div>

<style>
  .website ul {
    padding-left: 20px; /* Optional: Adjusts padding to align the bullet */
  }

  .website p {
    font-size: 18px; /* Sets the font size of the paragraph */
    margin: 0; /* Removes extra margin from the paragraph */
  }

  .website a {
    font-size: 18px; /* Sets the font size of the link */
  }
</style>

FIPHero is a company that makes medicines for feline infectious peritonitis (FIP), a serious disease in cats. Their goal is to help improve the lives of cats and their owners. They currently operate in the USA, France, Italy, and Germany, with plans to expand to the Netherlands and Spain. FIPHero works with a team of veterinarians who help cat owners diagnose FIP and find the right treatment. They also provide useful information and support to raise awareness about FIP and empower cat owners to take care of their pets.

<!-- Main Carousel -->
<div :class="['carousel-wrapper', { hidden: isFullScreen }]">
  <span class="arrow left-arrow" @click="changeImage(-1)">&#10094;</span>
  <div class="carousel-container">
    <img :src="carouselImage" alt="Gallery Image" class="carousel-image" @click="toggleFullScreen()">
    <div class="image-counter">{{ currentIndex + 1 }} / {{ images.length }}</div> <!-- Image Counter -->
  </div>
  <span class="arrow right-arrow" @click="changeImage(1)">&#10095;</span>

 <!-- Thumbnail previews -->
<div class="carousel-thumbnails">
  <img
    v-for="(thumbnail, index) in displayedThumbnails"
    :key="index"
    :src="thumbnail.src"
    alt="Thumbnail"
    class="thumbnail"
    :class="{
      'current-thumbnail': thumbnail.currentIndex === currentIndex,
      'next-thumbnail': thumbnail.currentIndex !== currentIndex,
    }"
    @click="currentIndex = thumbnail.currentIndex; updateCarousel()"
  />
</div>
</div>

<!-- Full-Screen Modal -->
<div class="fullscreen-modal" v-if="isFullScreen">
  <div class="fullscreen-content">
    <span class="arrow left-arrow" @click="changeImage(-1)">&#10094;</span>
    <img :src="carouselImage" alt="Gallery Image" class="fullscreen-image">
    <span class="arrow right-arrow" @click="changeImage(1)">&#10095;</span>
    <div class="image-counter fullscreen-counter">{{ currentIndex + 1 }} / {{ images.length }}</div>
    <span class="close-button" @click="toggleFullScreen()">&times;</span>
  </div>
</div>

<style scoped>
  /* General carousel styling */
  .carousel-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    position: relative;
  }

  .carousel-container {
    position: relative; /* Relative positioning to contain absolutely positioned arrows */
    width: 80%;
    max-width: 600px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-bottom: 15px; /* Space between image and thumbnails */
  }

  /* Main image styling */
  .carousel-image {
    width: 100%;
    height: auto;
    border-radius: 20px; /* Rounded corners */
    object-fit: cover;
    transition: opacity 0.5s ease;
    cursor: pointer; /* Indicate the image is clickable */
  }

  /* Arrows */
  .arrow {
    font-size: 20px; /* Smaller size */
    color: #fff;
    padding: 5px; /* Reduced padding */
    cursor: pointer;
    user-select: none;
    position: absolute; /* Position within the .carousel-container */
    top: 50%; /* Center vertically within the container */
    transform: translateY(-50%);
    z-index: 1;
    transition: transform 0.2s ease; /* Smooth transition */
  }

  .left-arrow {
    left: 10px; /* Fixed distance from the left inside the container */
  }

  .right-arrow {
    right: 10px; /* Fixed distance from the right inside the container */
  }

  .arrow:hover {
    color: #ccc; /* Change color on hover for better visibility */
  }

  /* Thumbnail styling */
  .carousel-thumbnails {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }

  .thumbnail {
    width: 60px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
    padding: 2px;
    transition: opacity 0.3s ease;
  }

  .previous-thumbnail,
  .next-thumbnail {
    opacity: 0.5;
    border: none;
  }

  .current-thumbnail {
    opacity: 1;
    border: 2px solid rgba(255, 255, 255, 0.5); /* Highlight the selected thumbnail */
  }

  /* Image counter styling */
  .image-counter {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 12px;
  }

  /* Full-Screen Modal Styles */
  .fullscreen-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 40px; /* Adds padding to prevent elements from touching the edges */
  }

  .fullscreen-content {
    position: relative;
    width: 90%;
    max-width: 800px; /* Reduce the max width to keep images smaller */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fullscreen-image {
    width: 90%; /* Scale down the image size */
    max-height: 80vh; /* Ensure the image doesn't overflow vertically */
    border-radius: 20px; /* Maintain rounded corners */
    object-fit: contain; /* Ensure the image fits within the given space */
  }

  /* Positioning the Close Button and Arrows Outside the Image Box */
  .close-button {
    position: fixed; /* Fixed position to prevent overlapping with the image */
    top: 30px;
    right: 30px;
    font-size: 36px;
    color: #fff;
    cursor: pointer;
    z-index: 1001;
  }

  .fullscreen-modal .arrow {
    font-size: 36px;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    position: fixed; /* Fixed position to keep arrows outside the image */
    top: 50%;
    transform: translateY(-50%);
    z-index: 1001;
  }

  .fullscreen-modal .left-arrow {
    left: 30px; /* Positioning the arrow outside the left side of the image box */
  }

  .fullscreen-modal .right-arrow {
    right: 30px; /* Positioning the arrow outside the right side of the image box */
  }

  /* Full-Screen Image Counter */
  .fullscreen-counter {
    position: fixed; /* Keeps the counter in the same place on the screen */
    bottom: 40px; /* Position near the bottom of the screen */
    right: 40px; /* Position near the right side of the screen */
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 12px;
    z-index: 1001; /* Ensure it stays above other elements */
  }

  /* Hide the carousel when in full-screen mode */
  .hidden {
    display: none;
  }
</style>

<script setup>
import { ref, computed } from 'vue';

// Import images correctly
import image1 from '/assets/fiphero1.png';
import image2 from '/assets/fiphero2.png';
// Add more image imports here if needed

// Create an array of imported images
const images = [image1, image2];

const currentIndex = ref(0);
const carouselImage = ref(images[currentIndex.value]);
const isFullScreen = ref(false); // State to manage full-screen mode

// Computed property to manage displayed thumbnails
const displayedThumbnails = computed(() => {
  if (images.length === 2) {
    return [
      { src: images[currentIndex.value], currentIndex: currentIndex.value }, // Current image
      {
        src: images[(currentIndex.value + 1) % 2],
        currentIndex: (currentIndex.value + 1) % 2,
      }, // The other image
    ];
  }

  const prevIndex = (currentIndex.value - 1 + images.length) % images.length;
  const nextIndex = (currentIndex.value + 1) % images.length;

  return [
    { src: images[prevIndex], currentIndex: prevIndex },
    { src: images[currentIndex.value], currentIndex: currentIndex.value },
    { src: images[nextIndex], currentIndex: nextIndex },
  ];
});

const updateCarousel = () => {
  carouselImage.value = images[currentIndex.value];
};

// Function to set index from thumbnail click
const setIndexFromThumbnail = (index) => {
  currentIndex.value = index;
  updateCarousel();
};

// Adjust the changeImage function to correctly update the currentIndex
const changeImage = (direction) => {
  currentIndex.value = (currentIndex.value + direction + images.length) % images.length;
  updateCarousel();
};

// Toggle full-screen mode
const toggleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value;
};
</script>



## My impact
As the Marketing Manager at FIPHero I played a key role in growing the brand in the USA, France, Italy, and Germany. My leadership helped increase their Facebook groups through organic growth, without ads. I managed the marketing and social media teams, ensuring we effectively engaged with pet owners and provided valuable information. I also trained the team on how to use Reddit for growth and monitored their efforts, which was crucial in building a strong online community for cat owners.

## Key Tasks

<ol>
    <li><strong>Trained Team on Reddit</strong>: Conducted training sessions and created guides to help the marketing team effectively use Reddit for community growth and engagement.</li>
    <li><strong>Monitored Social Media Activities</strong>: Oversaw the activities of social media team members to ensure they aligned with our marketing goals and maintained a positive community presence.</li>
    <li><strong>Content Creation Oversight</strong>: Guided the content creation team in producing informative and engaging posts, ensuring all information was fact-checked and posted at optimal times for maximum engagement.</li>
    <li><strong>Engaged with Community</strong>: Worked closely with veterinarians to engage with pet owners, answering their questions and providing helpful information about FIP and treatment options.</li>
</ol>
