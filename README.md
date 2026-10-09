# Program 20 – Nested Routes in React Router

## Aim

To create a React application using `BrowserRouter`, `Routes`, `Route`, `Link`, and `Outlet` to implement a parent route with nested child routes for a Blog application.

## Technologies Used

* React JS
* React Router DOM v6
* HTML and CSS
* JavaScript
* GitHub Actions
* GitHub Pages

## Project Structure

```text
RJS-P20-Blog/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── BlogLayout.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Blog.js
│   │   ├── Post1.js
│   │   ├── Post2.js
│   │   └── Post3.js
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       ├── autograding.yml
│       └── deploy.yml
├── package.json
└── README.md
```

## Application Requirements

1. Create a Home page with a welcome message and a link to the Blog page.
2. Create a parent Blog route at `/blog`.
3. Display a list of blog posts on the Blog page.
4. Create three nested child routes:

   * `/blog/post1` – Web Development
   * `/blog/post2` – Learning React
   * `/blog/post3` – Career Skills
5. Use `Link` to navigate between pages.
6. Use `Outlet` to display child pages inside the parent Blog layout.
7. Apply CSS styling to make the application user-friendly.

## Important React Router Concepts

| Component     | Purpose                                             |
| ------------- | --------------------------------------------------- |
| BrowserRouter | Enables browser-based routing                       |
| Routes        | Groups route definitions                            |
| Route         | Defines a URL path and its component                |
| Link          | Navigates without a full page reload                |
| Outlet        | Displays the matched nested child route             |
| Index route   | Displays the default child page of the parent route |

## Installation and Execution

1. Install Node.js.

2. Open a terminal in the project directory.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open `http://localhost:3000` in the browser.

## Testing

Run the automated tests using:

```bash
npm test -- --watchAll=false
```

The tests check:

* Home page rendering
* Navigation to the Blog page
* Display of all three nested blog posts
* Presence of the shared parent layout on a child route

## GitHub Actions Autograding

The `autograding.yml` workflow runs when code is pushed to the configured branch. It checks required files, verifies basic route structure, executes tests, and builds the application.

## GitHub Pages Deployment

The `deploy.yml` workflow runs tests, builds the application, and deploys it to GitHub Pages.

To enable deployment:

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Select **GitHub Actions** as the deployment source.
4. Push changes to the `main` branch.
5. Check the **Actions** tab for the workflow result.
6. Open the published URL after deployment succeeds.

For a repository-based Pages URL, configure `BrowserRouter` with `basename={process.env.PUBLIC_URL}` as described in the deployment instructions.

## Result

A React Blog application is created with a parent route and nested child routes. The application supports navigation between the Home page, Blog page, and individual blog posts.
