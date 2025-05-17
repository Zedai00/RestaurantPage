function addAboutPage() {

  const content = document.getElementById('content');

  // Create the main section
  const aboutSection = document.createElement('section');
  aboutSection.className = 'info-section';

  // Heading
  const heading = document.createElement('h2');
  heading.textContent = 'About Us';

  // Paragraphs
  const para1 = document.createElement('p');
  para1.innerHTML = `
    Welcome to <strong>Zed's Restaurant</strong>, where bold flavors and modern comfort come together in every bite.
  `;

  const para2 = document.createElement('p');
  para2.textContent = 'Our mission is to serve delicious food with a welcoming atmosphere that makes you feel right at home.';

  const para3 = document.createElement('p');
  para3.textContent = 'Founded in 2015, Zed’s Restaurant has grown from a small neighborhood eatery into a beloved culinary destination. Our chefs use only the freshest ingredients, crafting each dish with passion and care.';

  const para4 = document.createElement('p');
  para4.textContent = 'Whether you’re joining us for a casual brunch, a romantic dinner, or late-night bites, Zed’s promises an unforgettable dining experience.';

  // Append all to section
  aboutSection.appendChild(heading);
  aboutSection.appendChild(para1);
  aboutSection.appendChild(para2);
  aboutSection.appendChild(para3);
  aboutSection.appendChild(para4);

  // Append section to container
  content.appendChild(aboutSection);
}

export { addAboutPage } 
