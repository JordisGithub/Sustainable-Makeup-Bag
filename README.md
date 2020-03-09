# Sustainable Makeup Bag

![makeupbanner](https://github.com/JordisGithub/Sustainable-Makeup-Bag/blob/master/images/makeupbanner.jpeg)

## Table of Contents

- [Intro](#Introduction)
- [Wireframes](#Wireframes)
- [MPV Sustainable MakeupBag Features](#SustainableMakeupBagWebappFeatures)
- [API data & details](#API)
- [Post-MVP](#Post-MVP)



## Introduction

Modern consumers have a growing global consciousness, and they care about social and environmental responsibility. As we become more ecologically aware, consumers demand natural, low-polluting beauty products.

My app aims to illustrate we can re-create the looks we love with sustainable cosmetics. Pick your desired look and we will yield a digital makeupbag with all the products needed to slay the desired look.

CSS grid will provide look for inspiration.
Custom dearch option to search by various categories.

## Wireframes
Mockups of your app on desktop, tablet, and mobile.
<p align="center">
<img src = "https://github.com/JordisGithub/Sustainable-Makeup-Bag/blob/master/images/Phone%20Wireframe.png" width=300 height=600>

  <img src = "https://github.com/JordisGithub/Sustainable-Makeup-Bag/blob/master/images/Sustainable%20Makeup%20Bag.png" width=300 height=600>
</p>





## MVP Sustainable MakeupBag Webapp Features

A few of the things you can do with the sustainable Makeupbag web app:

* Choose needed beauty products to recreate our looks
* Obtain a curated list of vegan and sustainable products
* Easy to purchase online links to personalize your makeup bag 
* Search makeupbag options by ocasion 
* Search makeupbag options by brand 
* Functionality in IOS , tablets & laptops


Developer Requirements
* Built with HTML, CSS, and JavaScript.
* Use Axios to consume data from an external source, and render that data into the DOM.
* Use flexbox (display: flex) and/or CSS grid (display: grid) for makeup look options.
* Implement responsive design on 3 screen sizes (including desktop) using 2 media queries (tablet and mobile).
* Host on Surge.


## API data & details

** About the Makeup API
* Protocol: The transport is HTTP. This API conforms to REST principals
* API Endpoints: The endpoint for the current API version is: http://makeup-api.herokuapp.com/api/v1/products.json
* There is currently one API call: Search makeup products
* Type: GET

**Search Parameters**: 
Search for products and filter them by brand, price, product category, tags and many more. 
This API also provides visual representation of the all of JSON data that is available as well.

Search parameters listed below!

Parameter | Data Type | Description
---------------------------------- | ----------------------------------- | -----------------------------------
product_type | string | The type of makeup being searched for (ie. lipstick, eyeliner).
product_category | string | Sub-category for each makeup-type. (ie. lip gloss is a category of lipstick).
product_tags | string | Options each product could be tagged with. (ie. vegan).
brand | string | Brand of the product. Will return all products for each brand.
price_greater_than | number | Will return a list of products with price greater than indicated number (exclusive)
price_less_than | number | Will return a list of products with price less than indicated number (exclusive)
rating_greater_than | number | Will return a list of products with a rating more than indicated number (exclusive)
rating_less_than | number | Will return a list of products with a rating less than indicated number (exclusive).


## Post-MVP

* Quiz to recommend a custom makeup bag
* Buying Guides
* Parameter for Zero Waste Makeup Brands
* Parameter for Natural & Organic Makeup
* Add instructional videos
* Look into localstorage so you can save data to the user's browser.
* Add a second API for environemtally friendly tools like vegan makeup brusher
* Get input from a UX student on how to make your app have intuitive UI and design.
