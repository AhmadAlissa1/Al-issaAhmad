document.addEventListener('DOMContentLoaded', function () {
    // List of project files to load with their corresponding tab IDs
    const projectFiles = [
        { file: 'Projects/serial-number.html', tabId: 'project4' },
        { file: 'Projects/disassembly.html', tabId: 'project5' },
        { file: 'Projects/irbm-integration.html', tabId: 'project6' },
        { file: 'Projects/EFT.html', tabId: 'project7' },
        { file: 'Projects/price-log.html', tabId: 'project8' },
        { file: 'Projects/warranty-check.html', tabId: 'project9' }
    ];

    // Load each project into its tab content
    Promise.all(projectFiles.map(project =>
        fetch(project.file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${project.file}`);
                }
                return response.text();
            })
            .then(html => {
                // Create tab content if it doesn't exist
                let tabContent = document.getElementById(project.tabId);
                if (!tabContent) {
                    tabContent = document.createElement('div');
                    tabContent.id = project.tabId;
                    tabContent.className = 'tab-content';
                    // Find the projects section to append to
                    const projectsSection = document.querySelector('#projects .max-w-4xl');
                    if (projectsSection) {
                        projectsSection.appendChild(tabContent);
                    } else {
                        console.error('Projects container not found');
                    }
                }

                // Insert the HTML content
                tabContent.innerHTML = html;
                return true;
            })
            .catch(error => {
                console.error(`Error loading ${project.file}:`, error);
                return false;
            })
    ))
        .then(() => {
            console.log('All projects loaded successfully');
        })
        .catch(error => console.error('Error loading projects:', error));
});