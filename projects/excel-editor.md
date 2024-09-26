
<h1>Data Editor Overview</h1>

<div class="section">
<p>The data editor is a Python-based tool designed for marketing companies to streamline the process of formatting lead files. This Excel editor allows users to upload files, delete columns or rows as needed, save the formatting as presets, and apply those presets to multiple files with the same format. By automating this, marketing teams can create different file formats for various purposes, like cold calling or email marketing, saving time and reducing manual errors.</p>
</div>


## Use Case
<div class="section">
<p>Marketing companies often receive lead files that need to be formatted differently depending on the purpose. For example, a lead file used for cold calling might only need the contact’s name, phone number, and company, while a file for email marketing might require the email address, name, and past interactions. With this tool:</p>
<ul>
    <li><strong>Cold Calling:</strong> Format the file to display only the columns necessary for sales representatives to make phone calls.</li>
    <li><strong>Email Marketing:</strong> Format the same file to show the essential fields for email outreach.</li>
    <li><strong>Consistency:</strong> Apply saved presets to quickly format new lead files that follow the same structure, ensuring uniformity across multiple teams.</li>
</ul>
</div>

<!-- Include the external CSS file in the head of your HTML if not already included -->
<link rel="stylesheet" href="/.vitepress/theme/style-assets/image-style.css">

<!-- Use HTML to create a container around the image -->
<div class="image-container">
  <img src="/assets/excel-editor.jpg" class="styled-image" alt="Descriptive text">
</div>


## Key Features
<div class="section">
    <ul>
        <li><strong>File Upload & Processing:</strong> Upload multiple files (Excel or CSV) and process them all at once.</li>
        <li><strong>Custom Preset Creation:</strong> Users can select columns and rows to remove and save these settings as presets for future use.</li>
        <li><strong>Batch Formatting:</strong> Apply a preset to format multiple files of the same format together, enabling rapid and consistent data preparation.</li>
        <li><strong>User-Friendly Interface (Tkinter):</strong> The graphical user interface (GUI) built with Tkinter, even though it is not the most aesthetically appealing, it allows users to interact easily with the tool without needing to write code.</li>
        <li><strong>Backend Data Processing (Python):</strong> The backend processes each file using Python’s file handling and data manipulation libraries like pandas to manage and format large datasets.</li>
        </ul>
    </div>
    

## Diagram 
<p> The following whiteboard diagram represents the entire user journey and how the application's logic reacts based on the user decisions. This was a key step for the application development in order to better visualize all the steps and find important touch-points that could be optimized. </p>

<div class="section">

<iframe 
    class="figma-embed"
    src="https://embed.figma.com/board/5meKJGQ6ff9fZiJzPxYqX9/Excel-Editor?node-id=1-708&embed-host=share" 
    allowfullscreen>
</iframe>

<style scoped>
  /* Responsive styling for the embedded Figma files */
  .figma-embed {
    width: 100%;
    height: 600px; /* Default height for larger screens */
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px; /* Rounded corners */
    overflow: hidden; /* Ensures content does not overflow the rounded corners */
  }

  /* Adjust height for tablets and larger mobile devices */
  @media (max-width: 768px) {
    .figma-embed {
      height: 400px;
    }
  }

  /* Adjust height for smaller mobile devices */
  @media (max-width: 480px) {
    .figma-embed {
      height: 300px;
    }
  }
</style>


## How is it built?

<h3>Frontend - User Interface (Tkinter)</h3>
<p>The user interface is built using the Tkinter library. Tkinter’s simplicity and compatibility with Python make it an ideal choice for this application.</p>
<ul>
    <li><strong>File Selector:</strong> Users can upload Excel or CSV files from their system through an intuitive file dialog, and can see how many files are uploaded and what preset is selected</li>
    <li><strong>Preset Selection:</strong> Users can define the columns and rows they want to remove and save these selections as presets using buttons or dropdown menus.</li>
</ul>

<h3>Backend - File Processing and Preset Management (Python)</h3>
<p>The backend handles the core data processing using Python, leveraging libraries like pandas to manipulate the files. The backend:</p>
<ul>
    <li>Loads the uploaded Excel or CSV files into a data frame for easy manipulation.</li>
    <li>Allows the user to define which columns or rows should be removed, then saves this configuration as a preset for reuse.</li>
    <li>Enables batch processing, allowing multiple files to be uploaded and formatted in one go based on a previously saved preset.</li>
</ul>

<h3>Saving and Loading Presets</h3>
<p>Presets allow marketers to avoid manually reselecting columns each time. This involves saving the list of selected columns or rows to a file that can be loaded later for reuse.</p>
<ul>
    <li><strong>Save Preset:</strong> When a user selects certain columns, the preset is saved to disk as a configuration file (JSON).</li>
    <li><strong>Load Preset:</strong> The tool reads the saved configuration and applies the same formatting to any new files uploaded.</li>
</ul>

<h3>User Friendliness</h3>
    <ul>
        <li><strong>Feedback & Error Handling:</strong> The interface provides feedback, such as file upload confirmation, preset saving notifications, or warnings when there’s an error (e.g., invalid file format).</li>
    </ul>
</div>

