import { createRoot } from 'react-dom/client';
import { restaurants } from '../materials/mock';
import { createElement } from 'react';

createRoot(document.getElementById('root')).render(
  <main>
    <article>
      <h2>{restaurants[0].name}</h2>
      <h3>Menu</h3>
      <ul>{restaurants[0].menu.map((item) => createElement('li', {}, item.name))}</ul>
      <h3>Reviews</h3>
      <ul>{restaurants[0].reviews.map((item) => createElement('li', {}, item.text))}</ul>
    </article>

    <article>
      <h2>{restaurants[1].name}</h2>
      <h3>Menu</h3>
      <ul>{restaurants[1].menu.map((item) => createElement('li', {}, item.name))}</ul>
      <h3>Reviews</h3>
      <ul>{restaurants[1].reviews.map((item) => createElement('li', {}, item.text))}</ul>
    </article>

    <article>
      <h2>{restaurants[2].name}</h2>
      <h3>Menu</h3>
      <ul>{restaurants[2].menu.map((item) => createElement('li', {}, item.name))}</ul>
      <h3>Reviews</h3>
      <ul>{restaurants[2].reviews.map((item) => createElement('li', {}, item.text))}</ul>
    </article>

    <article>
      <h2>{restaurants[3].name}</h2>
      <h3>Menu</h3>
      <ul>{restaurants[3].menu.map((item) => createElement('li', {}, item.name))}</ul>
      <h3>Reviews</h3>
      <ul>{restaurants[3].reviews.map((item) => createElement('li', {}, item.text))}</ul>
    </article>
  </main>
)