# Blog Project
## Joy of React, Project III

In this project, we'll build an interactive MDX-based blog using Next.js 14 (App Router):

![Screenshot of the final product](/docs/end-result.png)


## Getting Started

This is a Next 14 project. You'll first need to install NPM dependencies, and then run a local development server. Here are the relevant terminal commands:

```bash
# Install dependencies:
npm install

# Run a development server:
npm run dev
```

To create new components, you can use this helper script. It saves you a bit of time, creating all the files and adding the standard code:

```bash
# Create a new component:
npm run new-component [TheNewComponentName]
```

> **Using a Markdown renderer**
>
> For best results, you should use a Markdown renderer to view this file. This README includes lots of embedded images and screen recordings, and you'll need a Markdown renderer to be able to view them.
>
> In VS Code, you can render this README by opening the command palette (`Ctrl` + `Shift` + `P` on Windows/Linux, `⌘` + `Shift` + `P` on MacOS), typing “Markdown”, and selecting “Markdown: Open Preview”.

## Troubleshooting

- When you run a dev server, you may notice a warning: _You have enabled experimental feature (outputFileTracingIncludes)_. This warning can safely be ignored. `outputFileTracingIncludes` is a configuration option required to make sure that our MDX files are included when deploying our application to Vercel.
  - If you're curious about this, you can learn more [in Module 6 of the course](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/07.01-rendering-strategies-exercises#failed-vercel-deploys)

- If the dev server seems to be stuck on a stale error, and restarting the dev server doesn't help, you can clear Next's cache by deleting the `.next/cache` subdirectory. Don't worry about losing anything important: everything inside the `.next` directory is derived from the rest of the codebase.

- If you get stuck, you can definitely ask for help on Discord! Post your question in the #joy-of-react Discord channel.

- Please make sure you're using Node.js version 16.14 or higher. This is the minimum Node version required by Next.js.
  - You can find your current Node version by running `node -v` in a terminal. If the value is less than 16.14, you'll want to upgrade Node to the [current LTS (Long Term Support) version](https://nodejs.org/en).


---

## Exercise 1: Homepage list of posts

Let's update the homepage so that it shows a list of blog posts:

![Screenshot showing the homepage with a reverse-chronological list of blog posts](/docs/homepage-list-of-posts.png)

**Acceptance Criteria:**

- One `<BlogSummaryCard>` element should be rendered for each MDX file in the `/content` directory.
- A unique `key` should be given to each element.
- Each `<BlogSummaryCard>` element should be given the following props:
  - `slug`, matching the filename (eg. `javascript-modulo-operator`)
  - `title`, `abstract`, and `publishedOn`, all passed along from the frontmatter for each post.

**Note:** To help with some of the Node file-manipulation stuff, a helper module has been provided, `/src/helpers/file-helpers.js`. You can use the `getBlogPostList` function to gather the full list of blog posts. Alternatively, if you some experience using Node, feel free to solve this exercise without using this helper.

---

## Exercise 2: Displaying MDX

When clicking on one of the blog posts on the homepage, we're taken to the dynamic blog post route:

![Screenshot showing the blog post layout with the initial placeholder content](/docs/blog-post-before-mdx.png)

In this exercise, we'll use next-mdx-remote to render the MDX associated with the selected blog post.

**Acceptance Criteria:**

- The MDX corresponding to the selected blog post should be rendered.
  - For example, visiting `/javascript-modulo-operator` should display all of the content included in `/content/javascript-modulo-operator.mdx`.
- The raw content from the MDX file should be passed to the `<MDXRemote>` component.

The final result should look like this:

![Screenshot showing the blog post layout with all of the content from the MDX file, with correct formatting (paragraphs, headings, etc)](/docs/blog-post-with-mdx.png)

**Note:** Inside `/src/helpers/file-helpers.js`, you'll find a function called `loadBlogPost`. You can use this helper function if you're not comfortable with the Node `fs` module.

**Resources:**

- [“MDX in Next.js” lesson](https://courses.joshwcomeau.com/joy-of-react/project-blog/01.02-mdx-in-next)
- [next-mdx-remote docs](https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support)
  - **Be sure to use the _RSC_ version of the package!**
- [“Dynamic Segments” lesson](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/04.03-dynamic-segments)

---

## Exercise 3: Adding metadata

As we learned in Module 6, the [Next.js Metadata API](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/05-metadata) allows us to specify site metadata, like adding a `<title>` tag, or various `<meta>` tags. Let's use this API to add metadata to our blog.

For example, here's the metadata we should include, in the `<head>`:

```html
<title>Bits & Bytes</title>
<meta
  name="description"
  content="A wonderful blog about JavaScript"
/>
```

And on the blog post page, it should look something like this:

```html
<title>
  Understanding the JavaScript Modulo Operator • Bits & Bytes
</title>
<meta
  name="description"
  content="One of the most commonly-misunderstood operators…"
/>
```

**Acceptance Criteria:**

- The homepage and blog post pages should include the metadata specified above.
  - For the blog post page, the metadata should match the particular blog post. The `<title>` should include the blog post's `title`, and the `<meta name="description">` should use the `abstract`.
- The name of the blog, “Bits & Bytes”, shouldn't be hardcoded. It should use the `BLOG_TITLE` constant found in `/src/constants.js`.
- Performance should be optimized, as necessary, using the React Cache API.

**Resources:**

- [“Next.js Metadata API” lesson](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/05-metadata)
- [Next Metadata API official docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

---

## Exercise 4: Code snippets with Bright

Our MDX files include code snippets. By default, they'll be rendered by `<MDXRemote>` as a `<pre>` tag. This _works_, but it's not very ✨ aesthetic ✨. We can improve the presentation using [Bright](https://bright.codehike.org/), the React-Server-Components-based syntax highlighter we saw in Module 6.

This package is already installed in this repository, and is being used inside the `/src/components/CodeSnippet` component. Your mission in this exercise is to render this `CodeSnippet` component for every code snippet inside the MDX files.

The end result should look like this:

![Screenshot of the code snippets with correct syntax highlighting](/docs/bright-syntax-highlighting.png)

**Acceptance Criteria:**

- Code snippets inside blog posts should be syntax-highlighted.
- You should use the `CodeSnippet` component, found in `/src/components/CodeSnippet`

**Resources:**

- [Bright docs](https://bright.codehike.org/)
- [“MDX in Next.js” lesson](https://courses.joshwcomeau.com/joy-of-react/project-blog/01.02-mdx-in-next)
- [next-mdx-remote docs](https://github.com/hashicorp/next-mdx-remote#custom-components)
- [“Revealable Code Snippets” exercise](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/03.04-client-components-exercises#revealable-code-snippets-with-bright)

---

## Exercise 5: Animated division widget

So far, our blog posts don't really feature anything super custom. Let's change that.

The “Understanding the JavaScript Modulo Operator” blog post makes use of two different embedded widgets. In this exercise, we'll focus on the first one, `DivisionGroupsDemo`.

**This is a significant challenge.** To help keep things a bit more manageable, we'll break this exercise up into 3 parts.


### Exercise 5A: Rendering embedded components

First thing's first, we need to get this component rendering!

Inside the `javascript-modulo-operator.mdx` file, you'll notice that some code has been commented out:

```md
**TODO: Uncomment DivisionGroupsDemo**

{/* <DivisionGroupsDemo /> */}
```

If you uncomment this code, you'll get an error telling you that next-mdx-remote doesn't know how to resolve the `DivisionGroupsDemo`.

This component exists, and you can find it in `/src/components/DivisionGroupsDemo/DivisionGroupsDemo.js`. Your mission in the first part of this exercise is to resolve this component, fixing the issue and getting it rendering, like so:

![Screen recording showing the embedded `DivisionGroupsDemo` component](/docs/division-groups-demo.png)

**Acceptance Criteria:**

- Within `javascript-modulo-operator.mdx`, the first `<DivisionGroupsDemo>` element should be uncommented, and rendering without issue.
- Your solution should scale well, even if there are 100s of blog posts. You'll want to use _lazy loading_ to make sure that the `DivisionGroupsDemo` component is only downloaded when it's rendered.

**Resources:**

- [“MDX in Next.js” lesson](https://courses.joshwcomeau.com/joy-of-react/project-blog/01.02-mdx-in-next)
- [next-mdx-remote docs](https://github.com/hashicorp/next-mdx-remote#custom-components)
- [“Lazy Loading in Next”](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/10.01-lazy-loading-in-next)


### Exercise 5B: Animations with Framer Motion

As it stands, the `DivisionGroupsDemo` widget works alright, but it does feel pretty abrupt:

![Screen recording showing the default behaviour, instant transitions](/docs/division-groups-default.gif)

Let's implement some _layout animations_, so that the pink circles being grouped up glide smoothly when the number of groups changes:

![Screen recording showing the new behaviour, smooth layout animations](/docs/division-groups-animated.gif)

**Acceptance Criteria:**

- When the number of groups changes, the pink circles should glide smoothly, using Framer Motion layout animations.
- For now, you can ignore all of the stuff in the `includeRemainderArea` conditional; we'll deal with that in the next part of this exercise.
- _This animation should respect user preferences._ If they've toggled the “Reduce motion” setting in their operating system, the pink circles should jump immediately into their new groups.
  - To test this, you can use emulation inside the devtools. See the [“Motion Accessibility” lesson](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/05-accessibility) for more info.

**Resources:**

- [“Layout Animations” lesson](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/03-layout-animations)
- [“Shared Layout” lesson](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/04-layout-id)
- [“Working With Groups” lesson](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/04.01-layout-groups)
- [“Motion Accessibility” lesson](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/05-accessibility)


### Exercise 5C: Remainder area

If you keep scrolling down inside `javascript-modulo-operator.mdx`, you'll notice another instance of `DivisionGroupsDemo` which has been commented out:

```md
**TODO: Uncomment DivisionGroupsDemo**

{/* <DivisionGroupsDemo includeRemainderArea={true} numOfItems={11} initialNumOfGroups={4} /> */}
```

If you haven't already, you can uncomment this second `DivisionGroupsDemo` element. Your mission in this final part of the exercise is to ensure that the layout animations continue working as expected:

![Screen recording showing the final animation](/docs/divison-groups-demo-with-remainder.gif)

**There's a subtle thing here:** We want elements entering the Remainder Area to enter from the right, not the left. This GIF shows the difference:

![Screen recording showing how elements should stack in the Remainder Area](/docs/division-groups-remainder-stack-direction.gif)

**NOTE:** to help illustrate the difference, I've given the items different colors/shapes in this GIF. You don't need to incorporate this change; your items should all be pink circles.


**Acceptance Criteria:**

- In the second `DivisionGroupsDemo` element, a new “Remainder area” is added. The pink circles should be animated when moving to/from this remainder area, the same as they are when moving between groups.
- The pink circles should be added to the _end_ of the remainder area, stacking on the right. They shouldn't "cross over" and sit at the front. See the GIF above for the exact effect we're after.

**Resources:**

- [“Layout Animations” lesson](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/03-layout-animations)
- [“Shared Layout” lesson](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/04-layout-id)
- [“Working With Groups” lesson](https://courses.joshwcomeau.com/joy-of-react/07-framer-motion/04.01-layout-groups)

---

## Exercise 6: Circular colors widget

Our “Understanding the JavaScript Modulo Operator” blog post has one more embedded widget, `CircularColorsDemo`:

![Screen recording of the `CircularColorsDemo` component](/docs/circular-colors-demo.gif)

This widget demonstrates how the Modulo operator can be used to select items from an array in a circular manner. A timer climbs from 0 to infinity, and that linear value is used to pluck one of three colors, circling back to the front on each 3rd value.

**None of the client-side logic has been implemented.** To solve this exercise, you'll need to rely on the fundamentals we saw back in Module 2 and Module 3.

**Acceptance Criteria:**

- Clicking the “Play” button should start a long-running process which increments the `timeElapsed` value by 1 every second, like a stopwatch.
- The `selectedColor` should be calculated using the `timeElapsed`. It's shown as a black rectangle around 1 of the colors, and it should cycle through the 3 colors as shown in the GIF above.
- When the stopwatch is running, the “Play” button should switch to a “Pause” button, using the `Pause` icon. Clicking the “Pause” button should stop the timer.
- Clicking the “Reset” button should stop the timer, and reset the `timeElapsed` to 0.
- A layout animation should be used on the `selectedColor` outline, causing it to glide smoothly between the 3 colors.
  - Like all layout animations, this should be disabled if the user has enabled the “Reduce motion” setting.

**Resources:**

- [The blog post itself!](https://project-blog-dun.vercel.app/javascript-modulo-operator) This is very meta, but the blog post we've been working on details how the Modulo operator works, and you'll want to use this operator in your solution.
- [“Side Effects” set of lessons from Module 3](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05-effects)
  - In particular, the [“Digital Clock” Exercise](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.07-cleanup-exercises#digital-clock) might be helpful.

---

## Exercise 7: Dark mode

Inside the site header, we have a little sun icon. As of right now, it doesn't do anything. Your mission in this exercise is to wire it up so that it toggles between light mode and dark mode:

![Toggling between light mode and dark mode](/docs/dark-mode-toggle.gif)

Inside the root layout (`/src/app/layout.js`), you'll see that the theme is currently being hardcoded as `'light'`. If you manually change this value to `'dark'`, the site will flip to the dark mode color theme. Your mission is to expand this implementation so that it can be toggled by the user, with their preference being persisted.

**Acceptance Criteria:**

- Clicking the Sun icon in the header should immediately flip to the dark color theme.
- The icon within this button should match the theme: a sun in light mode, a moon in dark mode.
- The user's saved value should be remembered, so that if they refresh the page, the colors don't change.
  - This should be seamless, without any awkward “flash of light mode”, where the wrong colors are shown for a brief moment.

**Resources:**

- [“Dark Mode” lesson](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/11-dark-mode)


---


## Stretch goals

Phew! We've made it through the full set of standard exercises.

There's a couple more things we should do to make this blog feel a bit more complete. **I'll warn you now: I haven't shown you how to solve the exercises in this section.** You'll need to do some additional research and experimentation to figure out how to solve these problems.

Don't worry, though: I'll be sure to point you in the right direction, and I'll share my solution so you can see how I'd solve these problems.

### Stretch goal 1: RSS Feed

A surprising number of people prefer to read blog posts using an RSS reader. An RSS reader is a piece of software that lets users follow specific blogs, to be notified when new content is published.

For example, [Feedly](https://feedly.com/) is an RSS reader showing new posts from some of the blogs I follow:

![Screenshot of “Feedly”, an RSS reader](/docs/feedly.png)

In order for people to add our blog to their RSS readers, we need to produce an RSS feed. This is an XML document that contains all the info these readers need. For example, you can check out the RSS feed I publish on my official blog here:

- [https://joshwcomeau.com/rss.xml](https://joshwcomeau.com/rss.xml)

Our blog currently includes a link to the RSS feed, using the typical RSS icon:

![Screenshot of the site header, showing the RSS icon](/docs/rss-icon.png)

Right now, it links to a feed that doesn't exist. Your mission in this stretch goal should be to produce an RSS feed.

**Acceptance Criteria:**

- Visiting `/rss.xml` should return an XML document that lists out all of the posts, in reverse-chronological order (newest posts first).

**Tips and hints:**

There are two viable approaches here:

1. You can generate the XML file during the build, dropping the XML file in the `/public` directory. You can use a `prebuild` NPM script to automatically do some work before the `build` script runs. See the [NPM docs](https://docs.npmjs.com/cli/v9/using-npm/scripts#pre--post-scripts) for more information.

2. You can generate the XML file on-demand, when the user visits `/rss.xml`, using a Next.js [Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers). Route handlers allow us to build API endpoints that run on the server and can do things like generate custom responses.

To generate the RSS feed itself, you can use an NPM dependency. I use the [rss](https://www.npmjs.com/package/rss) NPM package. It's fantastic.

To get the list of blog posts, you can reuse the `getBlogPostList` function we saw in Exercise 1.

If you opt to go the “on-demand” route, you'll need to set a specific header for everything to work correctly: `Content-Type: application/xml`. You can set headers using a `Response` object, as detailed in the [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) docs.

---

### Stretch goal 2: Handling invalid URLs

In this project, we're using a dynamic route segment for the `postSlug`. We look up the blog post based on this route parameter.

But what if the user enters an invalid slug? For example, maybe they make a typo and try to visit `/javascritp-mdoulo-operatro`. Or enter a complete gibberish URL like `/fdjsmkl`.

As it stands, we get a pretty funky error:

> _Error: ENOENT: no such file or directory, open '/project-blog/content/fdjsmkl.mdx'_

Your mission in this exercise is to instead render a “404 not found” page:

![Screenshot of the 404 page](/docs/404-page.png)

**Acceptance Criteria:**

- Visiting an invalid URL should show the user a 404-style error.
- It isn't sufficient to render an `<h1>404 Not Found</h1>` within the `page.js` component. We want to render an _actual_ 404 page, with a 404 status code and the correct meta tags. This is important for SEO.

**Gotchas:**

There's two things to be aware of, before you start work on this:

- Next has an official way of handling 404 errors, but it changed recently. In the old “Pages” router, we created 404 pages using a special `404.js` file. This is _not_ how we do things in the newer App Router. Instead, we want to use the `not-found.js` file. See the docs links below.
- There's [an open bug](https://github.com/vercel/next.js/issues/48609) when it comes to putting `not-found.js` components inside dynamic routes. It doesn't currently work. And so, we'll solve this problem with a _global_ `not-found.js` file.

**Tips and hints:**

To signal to Next that a 404 page should be triggered, you'll want to invoke the [notFound() function](https://nextjs.org/docs/app/api-reference/functions/not-found). By default, this shows a not-very-aesthetic 404 message. We can replace this by creating a [`not-found.js` file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) inside our `/app` directory.

So far in this project, all of the styles have been provided, but in this case, no styles exist. Feel free to create a new CSS Module for the `not-found` styles.

---

## Next steps

Our blog is looking pretty darn good. 😄

However, this is really just the beginning. There are **so many things** we could do, so many interesting avenues to explore!

From this point onwards, it's up to you what you want to do. Here are some suggestions:

- Create an interactive code playground component with [Sandpack](https://sandpack.codesandbox.io/).
- Add tags and/or categories.
- Add more than 2 color themes.
- Add a "Table of Contents" component that plucks out the headings from the blog post.
- Include a “Comments” section, using something like [webmentions](https://webmention.io/), loaded with Suspense!
- Create custom-generated OpenGraph images using [vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)

If you've been thinking about starting a developer blog, this project should serve as an excellent foundation for you to build upon. Just be sure to abide by the conditions in the [LICENSE.md file](https://github.com/joy-of-react/project-blog/blob/main/LICENSE.md).

I can't wait to see where you take it!
