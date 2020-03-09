# Sustainable Makeup Bag

!(makeupbanner)[https://imgur.com/VjCYV6A]

## Table of Contents

- [Intro](#Introduction)
- [Wireframes](#Wireframes)
- [MPV Sustainable MakeupBag Features](#SustainableMakeupBagWebappFeatures)
- [API data & details](#API)
- [Post-MVP](#Post-MVP)



## Introduction
 4 to 5 sentences summarizing the features, functions, and goals.

explaining technologies used, approaches taken, a link to your live site, relevant instructions for viewers, and any unsolved problems




## Wireframes
Mockups of your app on desktop, tablet, and mobile.

<p align="center">
  <img src = "https://imgur.com/ycAIocW" width=700>
</p>

## MVP Sustainable MakeupBag Webapp Features

A few of the things you can do with the sustainable Makeupbag web app:

* Choose needed beauty products to recreate our looks
* Obtain a curated list of vegan and sustainable products
* Easy to purchase online links to personalize your makeup bag 
* Search makeupbag options by ocasion 
* Search makeupbag options by brand 
* Functionality in IOS , tablets & laptops

Write out what your goals are for MVP, including the minimum, need-to-have features of your app.

Functional Requirements
Be built with HTML, CSS, and JavaScript.
Use Axios to consume data from an external source, and render that data into the DOM.
Use flexbox (display: flex) and/or CSS grid (display: grid).
Implement responsive design on 3 screen sizes (including desktop) using 2 media queries (tablet and mobile).
Host on Surge. (We will go over this together.)


## API data & details

** About the Makeup API
* Protocol: The transport is HTTP. This API conforms to REST principals
* API Endpoints: The endpoint for the current API version is:
  http://makeup-api.herokuapp.com/api/v1/products.json
* There is currently one API call: Search makeup products
* Type: GET

**Search Parameters**: 
Search for products and filter them by brand, price, product category, tags and many more. 
This API also provides visual representation of the all of JSON data that is available as well
Take a look at the full list below!

Parameter | Data Type | Description
------------------------- | -------------------------- | --------------------------
product_type | string | The type of makeup being searched for (ie. lipstick, eyeliner).
product_category | string | Sub-category for each makeup-type. (ie. lip gloss is a category of lipstick).
product_tags | string | Options each product could be tagged with. (ie. vegan).
brand | string | Brand of the product. Will return all products for each brand.
price_greater_than | number | Will return a list of products with price greater than indicated number (exclusive)
price_less_than | number | Will return a list of products with price less than indicated number (exclusive)
rating_greater_than | number | Will return a list of products with a rating more than indicated number (exclusive)
rating_less_than | number | Will return a list of products with a rating less than indicated number (exclusive).


## Post-MVP

Nice-to-have features that you would like to implement once your MVP is complete.
* Quiz to recommend a custom makeup bag
* Parameter for Zero Waste Makeup Brands
* Parameter for Natural & Organic Makeup
* Add instructional videos
* Look into localstorage so you can save data to the user's browser.
* Add a second API for environemtally friendly tools like vegan makeup brusher
* Get input from a UX student on how to make your app have intuitive UI and design.
