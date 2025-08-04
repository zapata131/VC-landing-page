### **Product Requirements Document: Dynamic YAML Landing Page**

## **1. Introduction**

This document outlines the requirements for a **Dynamic YAML Landing Page**, a client-side solution for creating a personal or company landing page. The goal is to provide a simple, single-file CMS-like experience where users can configure their site entirely through a simple YAML file, with content fetched and rendered dynamically using only CSS and JavaScript. This product is designed for users who want a fast, lightweight, and easily maintainable web presence without the complexity of a backend server or database.

---

## **2. User Stories**

* **As a user**, I want to be able to create a landing page with a title and an introduction.
* **As a user**, I want to customize the content and layout of my page using a simple YAML file.
* **As a user**, I want to be able to add different content sections to my page.
* **As a user**, I want my social media feeds to be automatically updated on the page.
* **As a user**, I want to be able to add links and RSS feeds to my page.
* **As a user**, I want to be able to choose between a light and dark theme.
* **As a user**, I want to be able to select custom colors and fonts for my page.
* **As a user**, I want my page to display content in a visually appealing, magazine-style layout.

---

## **3. Product Requirements**

### **3.1. Core Functionality**

The landing page must be a **single HTML file** that includes all necessary CSS and JavaScript. The page's content, layout, and styling must be dynamically loaded and configured from a separate **YAML file**. The site should only use client-side technologies (HTML, CSS, and vanilla JavaScript) with no server-side processing required for content delivery.

### **3.2. Configuration (YAML File)**

The YAML file will be the central control for the entire site. It must be well-documented and easy for a non-developer to edit. The file should include:

* **Page Metadata**:
  * `title`: The title of the page that appears in the browser tab.
  * `intro_title`: The main heading for the page.
  * `intro_text`: A brief introductory paragraph.
* **Theme Configuration**:
  * `theme`: A property to set a default theme (`light` or `dark`).
  * `colors`: A section to define custom color palettes, such as `primary`, `secondary`, `background`, and `text` colors.
  * `fonts`: A property to select a Google Font.
* **Layout Configuration**:
  * `columns`: An integer value (2 or 3) to set the number of columns for the masonry layout.
* **Content Sections**:
  * A list of `sections` where each item represents a content block. Each section should have:
    * `type`: The type of content, e.g., `link`, `rss`, or `social`.
    * `title`: A title for the section.
    * `content`: The content for the section, which will vary based on the `type`.

### **3.3. Dynamic Content and Feeds**

The page will fetch and display content from various sources, defined in the YAML file.

* **RSS Feeds**: The page must be able to parse and display content from any valid RSS feed URL. The YAML configuration for an RSS section should include a `url` property.
* **Social Network Feeds**: The page will fetch posts from social media platforms. Due to a lack of native RSS support from most major social networks, the implementation will rely on a list of candidate networks that still support RSS or provide a way to generate a feed.

#### **Social Network Candidates for RSS**

Most major social networks like Facebook, X (formerly Twitter), and Instagram have either deprecated their native RSS support or never had it in the first place. However, some platforms still support RSS or have third-party services that can generate RSS feeds for them. Candidates include:

* **Mastodon** 🐘: Supports RSS feeds for user profiles and hashtags. This is a primary candidate as it's a decentralized platform that values open standards.
* **Bluesky** 🐦: Similar to Mastodon, Bluesky offers RSS feeds for user profiles.
* **YouTube** ▶️: YouTube channels have RSS feeds that can be used to display new videos.
* **Third-party services**: Services like RSS.app or others can generate feeds from social media pages that don't natively support them. While this adds a dependency on an external service, it offers the flexibility to include a wider range of social content.

### **3.4. User Interface and Experience**

* **Magazine-Style Masonry Layout**: The content sections (excluding the intro) must be arranged in a responsive, magazine-style masonry grid. The number of columns should be configurable via the YAML file. The implementation should leverage modern CSS Grid capabilities, with a fallback for older browsers if necessary.
* **Light/Dark Theme Toggle**: A visible button, preferably in the top-right corner, must allow users to switch between light and dark themes. The user's preference should be saved to `localStorage` so it persists across sessions. The default theme should be determined by the `theme` property in the YAML file.
* **Font Selection**: The `fonts` property in the YAML file should allow users to specify a Google Font URL to be imported and used on the page.

---

## **4. Technical Specifications**

* **Frontend Technologies**:
  * **HTML5**: The base structure of the page.
  * **CSS3**: For all styling, including the masonry grid layout and theme switching.
  * **Vanilla JavaScript**: To parse the YAML file, fetch content from feeds, handle the theme toggle, and dynamically render the page elements.
* **Data Format**: **YAML** will be used for configuration. A JavaScript library for parsing YAML (e.g., `js-yaml`) can be used.
* **Layout**: The masonry layout should be achieved using a combination of CSS Grid and JavaScript for optimal performance and responsiveness. The number of columns must be fluidly handled based on the viewport size.
* **Styling**: The site must use CSS variables (custom properties) to define colors, fonts, and other stylistic elements. This allows the theme toggle to simply change the values of these variables, making the light/dark mode implementation efficient and scalable.

---

## **5. Success Criteria**

* The landing page successfully loads and displays content configured in the YAML file.
* The page is fully responsive and looks good on various devices.
* The light/dark theme toggle works as expected and saves user preference.
* Social and RSS feeds are successfully fetched and displayed without requiring a backend.
* The page can be hosted as a simple static site without any server-side configuration.

