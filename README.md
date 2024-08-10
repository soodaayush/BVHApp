# Bay View High School App

![icon](https://github.com/user-attachments/assets/6276f451-5f02-4fda-b51a-5cf6a0cecaee)

## Inspiration

I noticed that students at Bay View High often miss important information because announcements are only made over the intercom. To address this, I decided to create a mobile app that could help improve communication.

## Challenges

I faced challenges in reacquainting myself with the processes involved in developing React Native apps, especially since it had been two years since I last worked on CoinDeno.

## Lessons Learned

I gained valuable experience in designing a user-friendly interface and organizing school-related information effectively.

## The Mobile App

This app provides access to news articles, a calendar of events, a staff directory, social media links, merchandise, and more.

# Screens

## Layout

Although this is not a defined screen within the app, the Layout (path: `app/layout.jsx`) file sets the layout for every screen to copy from. It contains the Header at the top and the Footer at the bottom. In the middle are defined routes to all of the screens within the app.

## Home

![Home](https://github.com/user-attachments/assets/a48ec1a3-6633-4377-b68d-d49dd8ee3834)

The Home (path: `app/index.jsx`) screen is a centralized area where all the links of the pages can be located along with a nice image of Bay View High School. Each link is using the `LinkButton` (path: `components/home/LinkButton.jsx`) component in the files, where an image and name are passed to the component to be rendered at the home screen.

## News

![News Articles](https://github.com/user-attachments/assets/94c25378-6257-4a3d-95bc-baef0c516bce)

The News (path: `app/news.jsx`) screen displays news about events around the school and community. The News Articles uses the `NewsArticle` (path: `components/news/NewsArticle.jsx`) component in the files, where a news article object is passed to the component, containing a title, description, and timestamp. You can tap on the shortened version of the article to reveal the entire article on a separate screen. The articles are rendered by React Native's `FlatList`, whose purpose is to render objects in a JSON file.

## News Article

![News Article](https://github.com/user-attachments/assets/d4e73608-5d3d-462d-994d-46dc204dc4c8)

The News Article (path: `app/newsArticleInfo.jsx`) screen displays the full text of the article along with its title and date. The `expo-router` package, which is used to navigate around the mobile app, is used to send data to the News Articles screen for it to be rendered there.

## Events

![Events](https://github.com/user-attachments/assets/190abfe9-e302-4df4-8431-f7d8429fea92)

The Events (path: `app/events.jsx`) screen contains a calendar using the `react-native-calendar-picker` package. If there are events on a given date, they would be highlighted with a grey tint (e.g: August 27). When tapping on the date, the number's tint changes to blue and you can see the events listed for that day below. Each event is fetched from a JSON object. The events rendered below uses the `CalendarEvent` (path: `components/events/CalendarEvent.jsx`) component, where the event name, date, and time are passed in to be rendered. Since we are using a JSON object, a `FlatList` was used to render all of the events on a given day.

## Directory

![Directory](https://github.com/user-attachments/assets/aa90139b-fc86-4fe7-912f-517354b6cd48)

The Directory (path: `app/directory.jsx`) screen contains subdirectories comprising of different types of staff employed at the school (e.g teacher, administration, etc.) Each subdirectory uses the `DirectoryCategoryLink` (path: `components/directory/DirectoryCategoryLink.jsx`) component, where the title of the subdirectory is passed in via a JSON object. When tapping on the subfolder, the contents are rendered on a separate screen. The subdirectories are rendered by a `FlatList`.

## Directory Category

![Directory Item](https://github.com/user-attachments/assets/68b3c348-f52c-45c5-b901-adba195165fe)

The Directory Category (path: `app/directoryCategory.jsx`) screen renders all staff of the category. Each staff member is rendered via the `DirectoryItem` (path: `components/directory/DirectoryItem.jsx`) component, where a name and position of the staff is passed in. The staff members are rendered by a `FlatList`.

## Quick Links

![Quick Links](https://github.com/user-attachments/assets/99a07374-f62a-4908-a03d-91e4de36d9a0)

The Quick Links (path: `app/quickLinks.jsx`) screen renders important links that would be useful for students. Each quick link is rendered by the `QuickLink` (path: `components/quick-links/QuickLink.jsx`) component, where an image and title are passed in. The quick links are rendered via a `FlatList`.

## Map

![Map](https://github.com/user-attachments/assets/651b1797-e16a-4b8a-ba80-ead2223a68ac)

The Maps (path: `app/map.jsx`) screen renders a map of the school using the `react-native-maps` library. The latitude and longitude are passed into the map in order for it to be geelocated. For it to work on both iOS and Android, I explicitly provided Google and Apple maps links that are dependant on which Operating System is being used. Above the map is very basic information on the location of the school. The arrow icon below the information opens up the directions to the school from your location on your default maps app on your mobile device. There is a marker on the school to make it obvious as to what is the subject on this map.

# Assets

The Assets (path: `assets`) folder contains all of the images used in the mobile app. Most images used in this mobile app are SVGs (Scalable Vector Graphics), which are high quality images that are very small in file size.

- `branding`: Used for branding images
- `directory-icons`: Icons used in the Directory screens
- `font`: The folder where the font (Wotfard) of the app is stored
- `footer-icons`: Icons used in the Footer component
- `header-icons`: Icons used in the Header component
- `home-icons`: Icons used in the Home screen
- `map-icons`: Icons used in the Map screen
- `quick-links-icons`: Icons used in the Quick Links screen
