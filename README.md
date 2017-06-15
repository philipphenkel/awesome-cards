# awesome-cards
Collection of Awesome Cards to run your Squad Health Check

### Ready-to-run Card Deck
[awesome-cards slide deck](https://philipphenkel.github.io/awesome-cards/)

### Spectacle Markup
The contribution of Awesome Cards is highly appreciated. This can be done by creating an issue or a pull request.

```jsx
<Slide notes='Contributed by X. Optional description goes here.'>
  <AwesomeCard
    question='Your Awesome Card'
    awesome='Example of happy'
    crappy='Example of crappy'
  />
</Slide>
```

You will find all cards in [presentation/index.js](https://github.com/philipphenkel/awesome-cards/blob/master/presentation/index.js).

### Development
This presentation is built with [Spectacle](https://github.com/FormidableLabs/spectacle), a ReactJS based presentation library.

Run `yarn install` to fetch the dependencies. Then, to start up the local server, run `yarn start`.
Open a browser and hit [http://localhost:3000](http://localhost:3000), and you are ready to roll.

### License
Copyright (C) 2017 Philipp Henkel

Licensed under the MIT License (MIT). See LICENSE file for more details.

Awesome Cards are released under [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). See [presentation/index.js](https://github.com/philipphenkel/awesome-cards/blob/master/presentation/index.js)
 for more details.
