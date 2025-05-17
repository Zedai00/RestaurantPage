function addHomeContent() {
  const container = document.getElementById("content");

  // About Us Section
  const aboutSection = document.createElement("section");
  aboutSection.className = "info-section";

  const aboutHeading = document.createElement("h2");
  aboutHeading.textContent = "About Us";

  const aboutPara = document.createElement("p");
  aboutPara.innerHTML = `
    Welcome to <strong>Zed's Restaurant</strong>, where bold flavors and
    modern comfort come together in every bite. From sizzling starters to
    decadent desserts, our chefs craft each dish with passion and precision.
    Whether you're joining us for a casual brunch, a romantic dinner, or
    late-night bites, Zed’s promises an unforgettable dining experience.
    Come hungry. Leave happy.
    `;

  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(aboutPara);
  container.appendChild(aboutSection);

  // Hours of Operation Section
  const hoursSection = document.createElement("section");
  hoursSection.className = "info-section";

  const hoursHeading = document.createElement("h2");
  hoursHeading.textContent = "Hours of Operation";

  const hoursList = document.createElement("ul");
  const hours = [
    ["Monday – Thursday:", "12:00 PM – 10:00 PM"],
    ["Friday – Saturday:", "12:00 PM – 11:30 PM"],
    ["Sunday:", "11:00 AM – 9:00 PM"],
    [null, "Open on all major holidays"]
  ];

  hours.forEach(([label, time]) => {
    const li = document.createElement("li");
    li.innerHTML = label ? `<strong>${label}</strong> ${time}` : time;
    hoursList.appendChild(li);
  });

  hoursSection.appendChild(hoursHeading);
  hoursSection.appendChild(hoursList);
  container.appendChild(hoursSection);

  // Location Section
  const locationSection = document.createElement("section");
  locationSection.className = "info-section";

  const locationHeading = document.createElement("h2");
  locationHeading.textContent = "Location";

  const locationPara = document.createElement("p");
  locationPara.innerHTML = `
    <strong>Zed’s Restaurant</strong><br />
    88 Riverstone Avenue,<br />
    Lakefield Park,<br />
    Austin, TX 78703<br />
    📍 <a href="https://maps.google.com" target="_blank">View on Google Maps</a>
    `;

  locationSection.appendChild(locationHeading);
  locationSection.appendChild(locationPara);
  container.appendChild(locationSection);
}

export { addHomeContent }
