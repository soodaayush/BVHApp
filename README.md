# Bay View High School App

**Video Demo (submitted this as a final project for Harvard's CS50x): https://www.youtube.com/watch?v=BFU6RQcBPIc**

![icon](https://github.com/user-attachments/assets/6276f451-5f02-4fda-b51a-5cf6a0cecaee)

## Running the App

- `npm install` to install all dependencies.
- `npm start` to start up the app.
- When the app is started, hit `i` to launch an iOS emulator via XCode, or `a` to launch an Android emulator via Android Studio.

## Inspiration

I noticed that students at Bay View High often miss important information because announcements are only made over the intercom. To address this, I decided to create a mobile app that could help improve communication.

## Challenges

I faced challenges in reacquainting myself with the processes involved in developing React Native apps, especially since it had been two years since I last worked on CoinDeno.

## Lessons Learned

I gained valuable experience in designing a user-friendly interface and organizing school-related information effectively.

## The Mobile App

This app provides access to news articles, a calendar of events, a staff directory, social media links, merchandise, and more.

# Screens

These are all the main screens of the app. Even though there are more links on the home screen than the number of screens below, the rest of the links lead to an external website.

## Layout

Although this is not a defined screen within the app, the Layout (path: `app/layout.jsx`) file sets the layout for every screen to copy from. It contains the Header at the top and the Footer at the bottom. In the middle are defined routes to all of the screens within the app.

## Home

![Home](https://github.com/user-attachments/assets/a48ec1a3-6633-4377-b68d-d49dd8ee3834)

The Home (path: `app/index.jsx`) screen is a centralized area where all the links to the pages can be located, along with a nice image of Bay View High School. Each link uses the `LinkButton` (path: `components/home/LinkButton.jsx`) component in the files, where an image and name are passed to the component to be rendered on the home screen.

## News

![News Articles](https://github.com/user-attachments/assets/94c25378-6257-4a3d-95bc-baef0c516bce)

The News (path: `app/news.jsx`) screen displays news about events around the school and community. The News Articles use the `NewsArticle` (path: `components/news/NewsArticle.jsx`) component in the files, where a news article object is passed to the component, containing a title, description, and timestamp. You can tap on the shortened version of the article to reveal the entire article on a separate screen. The articles are rendered by React Native's `FlatList`, whose purpose is to render objects in a JSON file.

## News Article

![News Article](https://github.com/user-attachments/assets/d4e73608-5d3d-462d-994d-46dc204dc4c8)

The News Article (path: `app/newsArticleInfo.jsx`) screen displays the full text of the article along with its title and date. The `expo-router` package, which is used to navigate around the mobile app, is used to send data to the News Articles screen for it to be rendered there.

## Events

![Events](https://github.com/user-attachments/assets/190abfe9-e302-4df4-8431-f7d8429fea92)

The Events (path: `app/events.jsx`) screen contains a calendar using the `react-native-calendar-picker` package. If there are events on a given date, they would be highlighted with a grey tint (e.g., August 27). When tapping on the date, the number's tint changes to blue, and you can see the events listed for that day below. Each event is fetched from a JSON object. The events rendered below use the `CalendarEvent` (path: `components/events/CalendarEvent.jsx`) component, where the event name, date, and time are passed in to be rendered. Since we are using a JSON object, a `FlatList` was used to render all of the events on a given day.

## Directory

![Directory](https://github.com/user-attachments/assets/aa90139b-fc86-4fe7-912f-517354b6cd48)

The Directory (path: `app/directory.jsx`) screen contains subdirectories comprising different types of staff employed at the school (e.g., teachers, administration, etc.). Each subdirectory uses the `DirectoryCategoryLink` (path: `components/directory/DirectoryCategoryLink.jsx`) component, where the title of the subdirectory is passed in via a JSON object. When tapping on the subfolder, the contents are rendered on a separate screen. The subdirectories are rendered by a `FlatList`.

## Directory Category

![Directory Item](https://github.com/user-attachments/assets/68b3c348-f52c-45c5-b901-adba195165fe)

The Directory Category (path: `app/directoryCategory.jsx`) screen renders all staff of the category. Each staff member is rendered via the `DirectoryItem` (path: `components/directory/DirectoryItem.jsx`) component, where the name and position of the staff are passed in. The staff members are rendered by a `FlatList`.

## Quick Links

![Quick Links](https://github.com/user-attachments/assets/99a07374-f62a-4908-a03d-91e4de36d9a0)

The Quick Links (path: `app/quickLinks.jsx`) screen renders important links that would be useful for students. Each quick link is rendered by the `QuickLink` (path: `components/quick-links/QuickLink.jsx`) component, where an image and title are passed in. The quick links are rendered via a `FlatList`.

## Map

![Map](https://github.com/user-attachments/assets/651b1797-e16a-4b8a-ba80-ead2223a68ac)

The Maps (path: `app/map.jsx`) screen renders a map of the school using the `react-native-maps` library. The latitude and longitude are passed into the map in order for it to be geolocated. For it to work on both iOS and Android, I explicitly provided Google and Apple maps links that are dependant on which Operating System is being used. Above the map is very basic information on the location of the school. The arrow icon below the information opens up the directions to the school from your location on your default maps app on your mobile device. There is a marker on the school to make it obvious as to what is the subject on this map.

# Assets

The Assets (path: `assets`) folder contains all of the images used in the mobile app. Most images used in this mobile app are SVGs (Scalable Vector Graphics), which are high quality images that are very small in file size.

- `branding`: Used for branding images.
- `directory-icons`: Icons used in the Directory screens.
- `font`: The folder where the font (Wotfard) of the app is stored.
- `footer-icons`: Icons used in the Footer component.
- `header-icons`: Icons used in the Header component.
- `home-icons`: Icons used in the Home screen.
- `map-icons`: Icons used in the Map screen.
- `quick-links-icons`: Icons used in the Quick Links screen.

# Components

The Components (path: `components`) folder contains all of the components used in the mobile app.

- `directory`: Components in the Directory screens.
  - `DirectoryCategoryLink.jsx`: Used in the Directory screen, links to the subdirectory.
  - `DirectoryItem.jsx`: Used in the Directory Category screen, where the name and role of the staff is listed.
- `events`: Components in the Events screen.
  - `CalendarEvent.jsx`: Used in the Events screen, displays events and their titles, dates, and times.
- `home`: Components in the Home screen.
  - `LinkButton.jsx`: Used in the Home screen, displays links to other screens/websites of the mobile app.
- `misc`: Components used in multiple areas of the mobile app.
  - `Footer.jsx`: Displayed on all screens of the app at the bottom, shows a link to the school's phone number, website, and map.
  - `HamburgerLink.jsx`: A link to a screen/website on the hamburger menu.
  - `HamburgerMenu.jsx`: Displayed on the header, it is a hamburger menu.
  - `Header.jsx`: Displayed on all screens of the app at the top, is a header of the mobile app, where the title and hamburger menu are displayed.
- `news`: Components used in the News screen.
  - `NewsArticle.jsx`: Used in the News screen, displays the shortened version of the news article, where the title, shortened description, and date are shown.
- `quick-links`:
  - `QuickLink.jsx`: Used in the Quick Links screen, displays the quick link, which consists of an image and title.

# Constants

The Constants (path: `constants`) folder contains the `constants.js` file. The file is composed of an object containing common styles (colors and fonts), so that colors can be referred from this file instead of a hard-coded hex code. If a color is changed in this file, it changes everywhere on the mobile app.

# .GitIgnore

A file that communicates to Git the files it should ignore and not send to GitHub.

# App.json

Basic information about the mobile app, along with some configurations and required plugins.

# Configs

`babel.config.js` configures Babel to transform modern JavaScript features and JSX into compatible JavaScript for older engines. `metro.config.js` configures Metro to bundle and optimize JavaScript and assets for React Native apps.

# Package.json and Package-lock.json

Files that list all of the packages/libraries used in this mobile app.
