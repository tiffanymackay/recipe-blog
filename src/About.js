import React from 'react';
import './App.css';
import bites from "./bites.png"

export default function About() {
  return (
    
      <main className="container px-5">
        <div className="row">
          <div className="col text-center pt-5">
            <img src={bites} alt="img-fluid about-photo text-center" width="350px" />
          </div>
          <div className="col">
        <h1 className="text-center py-1">About</h1>
        <p>
        <strong>Dessert</strong> (/dɪˈzɜːrt/) is a course that concludes a meal. The course consists of sweet foods, such as confections, and possibly a beverage such as dessert wine and liqueur. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.
        <br />
        <br />
        
        The term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, sweet soups, tarts and fruit salad. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.
        <br />
        <br />
        <strong>Etymology</strong>
        <br />
        The word "dessert" originated from the French word desservir, meaning "to clear the table".[1] Its first known use was in 1600, in a health education manual entitled Naturall and artificial Directions for Health, written by William Vaughan.
        <br />
        <br />
        The term dates from the 14th century but attained its current meaning around the beginning of the 20th century, when "service à la française" (setting a variety of dishes on the table at the same time) was replaced with "service à la russe" (presenting a meal in courses).

        </p>
        </div>
        </div>
  
      </main>

  );
}
