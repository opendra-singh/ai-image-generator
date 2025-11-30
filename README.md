# AI Image Generator

A modern, full-stack AI image generation application that leverages powerful models like Stable Diffusion XL (SDXL) and DALL·E 3 to create stunning visuals from text prompts.

## Features

-   **Multiple Models**: Support for Stable Diffusion 2, SDXL, and DALL·E 3.
-   **Customizable Options**: Select image type (Realistic, Anime, 3D Render, etc.), category, style, and size.
-   **Modern UI**: A sleek, dark-themed interface with glassmorphism effects and responsive design.
-   **Real-time Generation**: Instant feedback with loading states.

## Tech Stack

-   **Frontend**: HTML5, CSS3 (Modern features, Flexbox/Grid), Vanilla JavaScript.
-   **Backend**: Node.js, Express.js.
-   **AI Integration**:
    -   OpenAI API (for DALL·E 3)
    -   Hugging Face Inference API (for Stable Diffusion models)

## Prerequisites

Before running the project, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   npm (Node Package Manager)

## Setup & Installation

1.  **Navigate to the project directory**:
    ```bash
    cd /projects/yt-ai-image-generator
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Configuration**:
    Create or update the `.env` file in the root directory with your API keys and configuration:
    ```env
    PORT=8000
    OPEN_AI_KEY=your_openai_api_key_here
    HF_AI_KEY=your_huggingface_api_key_here
    ```

## Running the Application

1.  **Start the Backend Server**:
    ```bash
    node index.js
    ```
    The server will start on `http://localhost:8000`.

2.  **Launch the Frontend**:
    Open `public/index.html` directly in your browser.
    
    *Note: The frontend is configured to communicate with the backend at `http://localhost:8000/generate_image`.*

## Usage

1.  Open the application in your browser.
2.  Select your desired **Model** (e.g., SDXL).
3.  Choose the **Type**, **Category**, **Style**, and **Size**.
4.  Click **"Generate Masterpiece"**.
5.  Wait for the AI to process your request and display the result.

## Project Structure

-   `index.js`: Main backend server file handling API requests.
-   `public/`: Contains frontend assets.
    -   `index.html`: Main user interface.
    -   `style.css`: Modern styling for the application.
