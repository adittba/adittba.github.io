# Stefano Avellino

<div class="website">
  <ul>
    <li>
      <p><strong>Youtube Channel</strong>: <a href="https://www.youtube.com/@SensetheLens/videos">Sense the Lens</a></p>
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


As the Marketing Manager for Stefano, a known travel influencer and former Emirates flight attendant, I played a key role in building his online brand. After five years of working as a flight attendant, Stefano realized he could earn more as an influencer, so he decided to focus fully on sharing his travel adventures. He now has 11,000 followers on Instagram and almost 200,000 subscribers on YouTube, where he inspires others to explore the world.

Stefano is not just about travel; he also has a passion for finance and trading. After leaving his job, he started a second Instagram account to share valuable advice on finance, helping his followers understand money management better.

<!-- Include the external CSS file in the head of your HTML if not already included -->
<link rel="stylesheet" href="/.vitepress/theme/style-assets/image-style.css">

<!-- Use HTML to create a container around the image -->
<div class="image-container">
  <img src="/assets/sensethelens.png" class="styled-image" alt="Descriptive text">
</div>


## My impact
In my role, I collaborated with his team to manage his Instagram account and launch the finance channel. We planned and edited videos for his personal brand and handled newsletter email campaigns, creating messages and designs to connect with his audience. We also developed content calendars to keep his posts organized and consistent. And, through regular meetings, we provided marketing insights to strengthen his social media presence.

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
    width: 40%;
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

const images = [
  '/assets/sensethelens-ig.jpg',
  '/assets/stefano-ig.jpg',
  // Add more images here
];

const currentIndex = ref(0);
const carouselImage = ref(images[currentIndex.value]);
const isFullScreen = ref(false); // State to manage full-screen mode

// Computed property to manage displayed thumbnails
const displayedThumbnails = computed(() => {
  if (images.length === 2) {
    // Logic to ensure thumbnails match the current picture when there are exactly 2 images
    return [
      { src: images[currentIndex.value], currentIndex: currentIndex.value }, // Current image
      {
        src: images[(currentIndex.value + 1) % 2],
        currentIndex: (currentIndex.value + 1) % 2,
      }, // The other image
    ];
  }

  // Normal case when more than 2 images are present
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


## CRM

I built a CRM system for Stefano that organized leads generated from a lead magnet, which primarily came from a call-to-action in his short-form content videos. These leads would automatically enter an email newsletter, allowing us to nurture and engage with them more effectively. The CRM helped us track interactions, manage follow-ups, and keep the communication organized for better outreach and connection with his growing audience.

## Email Marketing
I managed multiple email marketing campaigns for Stefano to support his personal brand and 1:1 trading sessions. One campaign focused on lead nurturing, building relationships with new leads by providing valuable content over time. Another campaign was designed to engage leads by sending them links to pre-recorded webinars and educational materials, helping them learn more about trading. The third campaign was used to send appointment reminders or rescheduling notices for his trading sessions, ensuring smooth communication and a positive experience for his followers.


## Funnel
I created a funnel for Stefano to streamline the lead generation process. It started with a lead magnet, typically a call-to-action from one of his short-form content videos, which attracted potential followers interested in trading. You can take a look to the funnel below.


<div style="position: relative; width: 100%; height: 0; padding-top: 100.0000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 20px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGRtC3_arE/vnN7BhkdsHvz0VyBoryqVA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>

