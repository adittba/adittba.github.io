
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Overview of a Python-built dashboard with sleek plasma color scheme for interactive data analysis and visualization.">
    <title>Dashboard Overview</title>

</head>
<body>
    <h1>Dashboard Overview</h1>
    
<p>This Python-built dashboard uses a plasma color scheme, offering an interactive experience for data analysis. Originally designed to read the Global Superstore dataset, it allows users to upload their own data files for tailored analysis. The dashboard provides a variety of charting options and advanced filtering and sorting capabilities for comprehensive data visualization and insights.</p>

:::tip TL:DR💡
The Plasma Dashboard is a data-visualization tool, built with Python, that allows file-upload, advanced filtering and chart exporting.
:::

## Key Features
<div class="section feature-box">
        <ul>
            <li><strong>Numerous Chart Types:</strong> Choose from pie charts, donut charts, scatter points, bar charts, 3D views, Tree Maps, and more to visualize your data.</li>
            <li><strong>File Upload Support:</strong> Users can import any dataset in CSV/XLSX format, allowing flexibility for different use cases beyond the original Global Superstore dataset.</li>
            <li><strong>Advanced Filtering & Sorting:</strong> Provides options to filter the dataset by different criteria, such as date ranges, categories, or numeric thresholds. Sorting can be done by any variable in ascending or descending order.</li>
            <li><strong>Dynamic Chart Updates:</strong> All charts are interconnected. Adjusting filters updates all visualizations in real-time, ensuring that users always see consistent, up-to-date data across different views.</li>
            <li><strong>Downloadable Reports:</strong> Users can export filtered and visualized data as images or CSV files for reporting purposes.</li>
            <li><strong>Time Period Selection:</strong> Users can now filter the dataset by a specific time range (e.g., monthly, quarterly, or custom date range). All charts and tables will dynamically update to reflect the selected period, allowing focused analysis of specific time frames.</li>
            <li><strong>View Chart Data:</strong> A new feature lets users view all the data used to generate any chart or table. By selecting this option, the raw dataset powering the visualization is displayed, offering complete transparency.</li>
            <li><strong>Download Chart Instances:</strong> Users can download a specific instance of any interactive chart based on applied filters (e.g., a particular time period). Charts can be exported as images or PDFs, making it easy to capture and share customized views.</li>
        </ul>
    </div>
</body>

## Charts

<h4 class="table-title"> Pie Chart & Donut Chart </h4>
<p> The <strong>Pie Chart</strong> and <strong>Donut Chart </strong> display proportional data or parts of a whole, making it ideal for categorical data breakdowns, such as product categories or regions. Its functionality includes hover-over labels that show both percentages and values, allowing users to quickly interpret the data. </p>

<style scoped>
@import url('/.vitepress/theme/style-assets/image-style.css');
</style>

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
import galleryImage1 from '/assets/plasma-donut-chart.png';
import galleryImage2 from '/assets/plasma-pie-charts.png';
// Add more image imports as needed

// Create an array of images
const images = [galleryImage1, galleryImage2 /* add more images here */];

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

// Function to update the carousel image based on the current index
const updateCarousel = () => {
  carouselImage.value = images[currentIndex.value];
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



<h4 class="table-title"> Scatter Plot </h4>
<p> The <strong>Scatter Plot</strong> shows relationships between two continuous variables, helping users identify correlations or clusters within the data, such as sales versus profits. Its functionality includes adjustable axes, and each point can be color-coded based on additional variables like region or product category, enhancing data interpretation. </p>


<div class="image-container">
  <img src="/assets/plasma-scatter-plot.png" class="styled-image" alt="Descriptive text">
</div>

<h4 class="table-title"> Bar Chart </h4>
<p> The <strong>Bar Chart</strong>  is used for comparing quantities across categories, making it ideal for showing sales figures across different product lines or regions. Its functionality allows users to click on bars to isolate data for deeper analysis, and it also supports sorting by various categories, enhancing the user's ability to explore the data.</p>


<div class="image-container">
  <img src="/assets/plasma-bar-chart.png" class="styled-image" alt="Descriptive text">
</div>

<h4 class="table-title"> 3D View </h4>
<p> The <strong>3D Views</strong> visualize more complex, multi-dimensional datasets, providing insight into data distributions and patterns across three variables. Their functionality includes rotatable and zoomable views, enabling users to explore data from multiple perspectives, which enhances overall analysis.</p>


<div class="image-container" style="max-height: 500px; overflow: hidden;">
  <img src="/assets/plasma-3d.png" class="styled-image" alt="Descriptive text" style="max-height: 350px; width: auto; object-fit: contain;">
</div>

<h4 class="table-title"> Tree Map </h4>
<p> The <strong>Tree Map</strong>  displays data points at successive intervals, making it ideal for visualizing trends over time, such as sales performance or website traffic. Its functionality includes adjustable time ranges and the ability to zoom in on specific periods, allowing users to identify patterns and anomalies in the data more effectively. </p>


<div class="image-container">
  <img src="/assets/plasma-tree-map.png" class="styled-image" alt="Descriptive text" style="max-height: 450px; width: auto; object-fit: contain;">
</div>

<h4 class="table-title"> Time Series </h4>
<p> The <strong>Time Series</strong>  displays data points at successive intervals, making it ideal for visualizing trends over time, such as sales performance or website traffic. Its functionality includes adjustable time ranges and the ability to zoom in on specific periods, allowing users to identify patterns and anomalies in the data more effectively. </p>


<div class="image-container">
  <img src="/assets/plasma-time-series.png" class="styled-image" alt="Descriptive text" style="max-height: 450px; width: auto; object-fit: contain;">
</div>

## Demo Video

<p> Here is a presentation video of all the features. </p>

<div class="video-wrapper-plasma">
  <iframe 
    class="styled-video-plasma"
    src="https://drive.google.com/file/d/1dkjRtaAKYX6kDiTJMg7S97xYbq1cpr3E/preview" 
    allowfullscreen>
  </iframe>
</div>

<style scoped>
  .video-wrapper-plasma {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 20px !important;
    border: 1px solid #a9a9a9b6;
    border-radius: 30px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0);
    width: 90%;
    max-width: 1200px;
    margin: auto;
    background-color: #f1f1f100;
  }

  .styled-video-plasma {
    width: 100%;
    height: 400px; /* Default height for larger screens */
    border-radius: 20px;
    border: none;
  }

  @media (max-width: 768px) {
    .styled-video-plasma {
      height: 300px; /* Reduced height for tablets */
    }
  }

  @media (max-width: 480px) {
    .styled-video-plasma {
      height: 250px; /* Further reduced height for smaller mobile screens */
    }
  }
</style>


