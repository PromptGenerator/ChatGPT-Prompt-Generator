document.getElementById("generate-prompt").addEventListener("click", function () {
  // Get input values
  const taskType = document.getElementById("task-type").value.trim();
  const product = document.getElementById("product").value;
  const excludeProductInfo = document.getElementById("exclude-product-info").checked;
  const audience = document.getElementById("audience").value;
  const mainTaskInfo = document.getElementById("main-task-info").value.trim();
  const limitations = document.getElementById("limitations").value.trim();
  const length = document.getElementById("length").value;
  const styleFormat = document.getElementById("style-format").value.trim();

  // Default product information
  const productDetails = {
    "OfficeRnD Hybrid": {
      valueProp: "Digital Experiences for Physical Workplaces, Hybrid work coordination made simple, etc.",
      elevatorPitch: "Workplace management software for flexible office environments.",
      longDesc: "Tools for meeting room booking, desk booking, visitor management, workplace analytics, etc."
    },
    "OfficeRnD Flex": {
      valueProp: "All-in-one platform for tenant experience and operations in buildings.",
      elevatorPitch: "Property management platform for flex space operators and landlords.",
      longDesc: "Tools for room booking, billing, member apps, customer lifecycle management, etc."
    }
  };

  // Create the prompt
  let generatedPrompt = `<strong>Task:</strong> ${taskType || "Not specified"}<br>`;
  generatedPrompt += `<strong>Audience:</strong> ${audience || "Not specified"}<br>`;
  generatedPrompt += `<strong>Main Task Information:</strong> ${mainTaskInfo || "Not provided"}<br>`;
  generatedPrompt += `<strong>Limitations/Exclusions:</strong> ${limitations || "Not specified"}<br>`;
  generatedPrompt += `<strong>Desired Length:</strong> ${length}<br>`;
  generatedPrompt += `<strong>Style and Format:</strong> ${styleFormat || "Not specified"}<br>`;

  // Add product details unless excluded
  if (!excludeProductInfo && product) {
    const details = productDetails[product];
    generatedPrompt += `<br><strong>Product:</strong> ${product}<br>`;
    generatedPrompt += `<strong>Value Proposition:</strong> ${details.valueProp}<br>`;
    generatedPrompt += `<strong>Elevator Pitch:</strong> ${details.elevatorPitch}<br>`;
    generatedPrompt += `<strong>Long Description:</strong> ${details.longDesc}<br>`;
  }

  // Display the generated prompt
  document.getElementById("generated-prompt").innerHTML = generatedPrompt;
});


