"use client";

import { useState } from "react";
import { formatPrice, menuCategories, menuItems } from "@/lib/other-table";

export default function OtherTableMenu() {
  const [vegetarian, setVegetarian] = useState(false);
  return <>
    <div className="ot-menu-toolbar"><p>Seasonal sample menu · Prices are illustrative in INR</p><div className="ot-filter" aria-label="Menu filters"><button type="button" aria-pressed={!vegetarian} onClick={() => setVegetarian(false)}>All dishes</button><button type="button" aria-pressed={vegetarian} onClick={() => setVegetarian(true)}>Vegetarian</button></div></div>
    <div className="ot-menu-categories">{menuCategories.map(category => {
      const items = menuItems.filter(item => item.category === category && (!vegetarian || item.tags?.includes("Vegetarian")));
      if (items.length === 0) return null;
      return <section className="ot-menu-category" key={category} aria-labelledby={`ot-${category.replaceAll(" ", "-")}`}><h2 id={`ot-${category.replaceAll(" ", "-")}`}>{category}</h2><div>{items.map(item => <article className="ot-menu-item" key={item.name}><div><h3>{item.name}</h3><p>{item.description}</p>{item.tags && <small>{item.tags.join(" · ")}</small>}</div><strong>{formatPrice(item.price)}</strong></article>)}</div></section>;
    })}<p className="ot-menu-disclaimer">This is a fictional menu for a self-initiated concept. Ingredients, prices and dietary tags are illustrative. In a real restaurant, always tell the team about allergies; a filter cannot confirm allergen safety or prevent cross-contact.</p></div>
  </>;
}
