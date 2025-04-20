import { createDom } from "../utils/createDom";

function errorTemplate() {
    return createDom(`
      <div class="error-container">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/" class="btn-home">Go Back to Home</a>
      </div>
    `);
  }
  
  export function displayError() {
    const dom = errorTemplate();
    // Optionally, add event listeners or logic here if needed
    return dom;
  }