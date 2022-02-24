const module = () => {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Igor's Italian Eatery";
  title.classList.add("title");
  content.appendChild(title);

  const copy = document.createElement("p");
  copy.textContent = "Best Food In Town!";
  copy.classList.add("copy");
  content.appendChild(copy);

  const tab = document.createElement("h2");
  tab.textContent = "Home";
  tab.classList.add("tab-title");
  content.appendChild(tab);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "HOME";
  homeBtn.classList.add("btn", "btn-home");

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "MENU";
  menuBtn.classList.add("btn", "btn-menu");

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "CONTACT";
  contactBtn.classList.add("btn", "btn-contact");

  const container = document.createElement("div");
  container.classList.add("container");
  container.appendChild(homeBtn);
  container.appendChild(menuBtn);
  container.appendChild(contactBtn);
  content.appendChild(container);

  // divisor

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("container-home");

  const homeHoursTitle = document.createElement("h3");
  homeHoursTitle.textContent = "Hours";
  homeHoursTitle.classList.add("home-hours-title");
  homeContainer.appendChild(homeHoursTitle);

  const openingHours = [
    "Mon: 10a - 6p",
    "Tue: 10a - 6p",
    "Wed: 10a - 6p",
    "Thu: 10a - 6p",
    "Fri: 10a - 6p",
    "Sat: 2p - 6p",
    "Sun: CLOSED",
  ];

  const homeHoursContainer = document.createElement("div");

  openingHours.forEach((hour) => {
    const hourDay = document.createElement("p");
    hourDay.textContent = hour;
    hourDay.classList.add("home-hours");
    homeHoursContainer.appendChild(hourDay);
  });

  homeContainer.appendChild(homeHoursContainer);

  content.appendChild(homeContainer);

  return content;
};

const menuTab = () => {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Igor's Italian Eatery";
  title.classList.add("title");
  content.appendChild(title);

  const copy = document.createElement("p");
  copy.textContent = "Best Food In Town!";
  copy.classList.add("copy");
  content.appendChild(copy);

  const tab = document.createElement("h2");
  tab.textContent = "Menu";
  tab.classList.add("tab-title");
  content.appendChild(tab);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "HOME";
  homeBtn.classList.add("btn", "btn-home");

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "MENU";
  menuBtn.classList.add("btn", "btn-menu");

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "CONTACT";
  contactBtn.classList.add("btn", "btn-contact");

  const container = document.createElement("div");
  container.classList.add("container");
  container.appendChild(homeBtn);
  container.appendChild(menuBtn);
  container.appendChild(contactBtn);
  content.appendChild(container);

  // divisor

  const menuCategories = ["Pasta", "Pizza", "Gelato"];
  // not sure how to add these next unique items. nested forEach? array method?
  const menuDescriptions = ["ipsi lorem", "ipsi lorem", "ipsi lorem"];
  const menuItems = [
    ["A", "B", "C"],
    ["A", "B", "C"],
    ["A", "B", "C"],
  ];
  const menuItemDescriptions = [
    ["laurel", "yannel", "yennifer"],
    ["laurel", "yannel", "yennifer"],
    ["laurel", "yannel", "yennifer"],
  ];
  const menuItemPrices = [
    [12, 23, 34],
    [12, 23, 34],
    [12, 23, 34],
  ];

  menuCategories.forEach((category) => {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("container-menu");

    const menuCategory = document.createElement("h3");
    menuCategory.textContent = category;
    menuCategory.classList.add("menu-category");
    menuContainer.appendChild(menuCategory);

    const menuCategoryDesc = document.createElement("p");
    menuCategoryDesc.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laborum architecto voluptas tempora repellat vel veniam delectus unde, accusamus modi?";
    menuCategoryDesc.classList.add("menu-desc");
    menuContainer.appendChild(menuCategoryDesc);

    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("item-container");
    menuContainer.appendChild(menuItemContainer);

    const menuItemTitles = document.createElement("p");
    menuItemTitles.textContent = "item title";
    menuItemTitles.classList.add("item-title");
    menuItemContainer.appendChild(menuItemTitles);

    const menuItemDescs = document.createElement("p");
    menuItemDescs.textContent = "item description";
    menuItemDescs.classList.add("item-descriptions");
    menuItemContainer.appendChild(menuItemDescs);

    const menuItemPrices = document.createElement("p");
    menuItemPrices.textContent = "$123";
    menuItemPrices.classList.add("item-price");
    menuItemContainer.appendChild(menuItemPrices);

    content.appendChild(menuContainer);
  });

  const appendMenuItems = () => {
    //   code here
  };

  const appendMenuItemDescriptions = () => {
    //   code here
  };

  const appendMenuPrices = () => {
    //   code here
  };

  return content;
};

const contactTab = () => {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Igor's Italian Eatery";
  title.classList.add("title");
  content.appendChild(title);

  const copy = document.createElement("p");
  copy.textContent = "Best Food In Town!";
  copy.classList.add("copy");
  content.appendChild(copy);

  const tab = document.createElement("h2");
  tab.textContent = "Contact";
  tab.classList.add("tab-title");
  content.appendChild(tab);

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "HOME";
  homeBtn.classList.add("btn", "btn-home");

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "MENU";
  menuBtn.classList.add("btn", "btn-menu");

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "CONTACT";
  contactBtn.classList.add("btn", "btn-contact");

  const container = document.createElement("div");
  container.classList.add("container");
  container.appendChild(homeBtn);
  container.appendChild(menuBtn);
  container.appendChild(contactBtn);
  content.appendChild(container);

  // divisor

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("container-contact");

  const contactUsInfo = document.createElement("p");
  contactUsInfo.textContent =
    "Let us know what you think! We're always open to suggestions.";
  contactUsInfo.classList.add("contact-us-info");
  contactContainer.appendChild(contactUsInfo);

  const contactLocation = document.createElement("p");
  contactLocation.textContent = "123 Alphabet Ln, New Vegas, NCR";
  contactLocation.classList.add("contact-location");
  contactContainer.appendChild(contactLocation);

  const contactPhone = document.createElement("p");
  contactPhone.textContent = "123-456-7890";
  contactPhone.classList.add("contact-phone");
  contactContainer.appendChild(contactPhone);

  const contactEmail = document.createElement("p");
  contactEmail.textContent = "iie-notARealEmail@intermail.com";
  contactEmail.classList.add("contact-email");
  contactContainer.appendChild(contactEmail);

  content.appendChild(contactContainer);

  return content;
};

export { module, menuTab, contactTab };
