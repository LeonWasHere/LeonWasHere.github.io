/**
 * Author: Leon Wasiliew
 * Creation Date: 2026-04-08
 * Modification Date: 2026-04-08
 * Description: JavaScript file that dynamically loads and renders project data.
 * Utilizes the JSON file to populate the projects section for the first and second year projects on the portfolio website.
 */

async function loadAllProjects() {
    try {
        // Fetches JSON data for both first and second year projects
        const response = await fetch("./assets/json/projects.json");

        // Converts response into usable JavaScript object
        const data = await response.json();

        // Renders second-year and first-year projects
        renderAllProjects(data.secondYear, "second-year-projects");
        renderAllProjects(data.firstYear, "first-year-projects");
        
    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

function renderAllProjects(projects, containerId) {

    // Retrieves the container element from the DOM
    const container = document.getElementById(containerId);

    // Loops through each project and creates a card
    projects.forEach(project => {

        // Generates tech stack badges
        const techStack = project.techStack.map(tech => `
            <span class="bg-[#EAF1F8] text-[#004780] text-xs px-2 py-1 rounded-full">
                ${tech}
            </span>
        `).join("");

        // Creates card container element
        const card = document.createElement("div");

        // Applies Tailwind CSS classes for styling
        card.className = `
            bg-[#F8FAFC]
            border border-[#D1D5DB]
            rounded-2xl
            shadow-sm
            hover:shadow-lg
            transition
            flex flex-col md:flex-row
            overflow-hidden
        `;

        // Populates card content using template literals
        card.innerHTML = `
            <!-- Left Section - Information -->
            <div class="p-5 flex flex-col flex-1>
            
                <!-- Course Name -->
                <p class="text-sm font-semibold text-[#004780] mb-1">
                    ${project.course}
                </p>
                
                <!-- Project Name -->
                <h4 class="text-xl font-bold text-[#111827] mb-2">
                    ${project.name}
                </h4>
                
                <!-- Project Description -->
                <p class="text-[#6B7280] text-sm leading-6 mb-4">
                    ${project.description}
                </p>
                
                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-4">
                    ${techStack}
                </div>
                
                <!-- Action Elements -->
                <div class="flex gap-3 mt-auto flex-wrap">
                    
                    <!-- Opens Sample Code -->
                    <button
                        onclick="window.open('${project.sampleCodeLink}', '_blank')"
                        class="bg-[#004780] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#003A63] transition">
                        View Sample
                    </button>
                    
                    <!-- Opens GitHub Repository -->
                    <a href="${project.gitHubLink}"
                        target="_blank"
                        class="border border-[#004780] text-[#004780] px-3 py-2 rounded-lg text-sm hover:bg-[#004780] hover:text-white transition">
                        GitHub Repo
                    </a>
                </div>
            </div>
            
            <!-- Right Section - Image -->
            <div class="md:w-1/3 w-full">
                <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover">
            </div>
        `;

        // Appends the card to the container element
        container.appendChild(card);
    });
}

// Initializes the project loading process
document.addEventListener("DOMContentLoaded", loadAllProjects);