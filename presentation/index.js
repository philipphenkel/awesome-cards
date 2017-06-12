//
// This file is released under Creative Commons Attribution 4.0 International License
// http://creativecommons.org/licenses/by/4.0/
//
// Health Check Model:   Henrik Kniberg and Kristian Lindwall,
//                       with help from the other agile coaches at Spotify
// Spectacle Slide Deck: Philipp Henkel
//

import React from 'react';

import {
  BlockQuote,
  Cite,
  Table,
  TableRow,
  TableItem,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fit,
  Fill
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
import AwesomeCard from './awesome-card.js'

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme(
  {
    primary: '#E2BD8C',     // slide background
    secondary: '#1F1F1F',   // normal text
    tertiary: '#C95300',    // head line
    quarternary: '#F0F0F0'  // controls
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>

        <Slide transition={['zoom', 'fade']} bgColor='tertiary' >
          <Heading textColor='secondary' caps fit>Awesome Cards</Heading>
          <Text margin='20px auto' textColor='primary'>To run your Squad Health Check</Text>
          <Link href='https://github.com/philipphenkel/awesome-cards'>
            <Text margin='40px auto' textSize='.8em' caps textColor='primary'>View on Github</Text>
          </Link>
        </Slide>

        <Slide transition={['zoom', 'fade']}>
          <Heading textColor='tertiary' fit caps>Squad Health Check</Heading>
          <Text margin='1em' />
          <Text fit margin='0.5em auto' textColor='secondary'>workshop and visualization technique</Text>
          <Text fit margin='0.5em auto' textColor='secondary'>invented and practised at Spotify</Text>
          <Text fit margin='0.5em auto' textColor='secondary'>helps teams to improve</Text>
          <Text fit margin='0.5em auto' textColor='secondary'>by assessing various health indicators</Text>
        </Slide>

        <Slide transition={['zoom', 'fade']}>
          <Heading textColor='tertiary' caps fit>Spotify&apos;s Starter Set</Heading>
        </Slide>

        <Slide>
          <AwesomeCard
            question='Easy to release'
            awesome='Releasing is simple, safe, painless and mostly automated.'
            crappy='Releasing is risky, painful, lots of manual work, and takes forever.'
          />
        </Slide>

        <Slide transition={['zoom', 'fade']} >
          <Heading textColor='tertiary' fit caps>More Awesomeness</Heading>
        </Slide>

        <Slide >
          <AwesomeCard
            question='Your Awesome Card'
            awesome='Example of happy'
            crappy='Example of crappy'
          />
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading size={2} textColor='tertiary' caps>References</Heading>
          <Text margin='1em' />
          <Link href='https://labs.spotify.com/2014/09/16/squad-health-check-model/'>Squad Health Check, Spotify Labs </Link>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor='primary'>
          <Heading size={2} textColor='tertiary' caps>Credits</Heading>
          <Text margin='1em' />
          <Table>
            <TableRow>
              <TableItem><Text margin='0.5em' textSize='1.4rem' textColor='secondary' textAlign='right' bold>Health Check Model</Text></TableItem>
              <TableItem><Text margin='0.5em' textSize='2.0rem' textColor='secondary' textAlign='left'>Henrik Kniberg and Kristian Lindwall, with help from the other agile coaches at Spotify</Text></TableItem>
            </TableRow>
            <TableRow>
              <TableItem><Text margin='0.5em' textSize='1.4rem' textColor='secondary' textAlign='right' bold>Slide Deck</Text></TableItem>
              <TableItem><Text margin='0.5em' textSize='2.0rem' textColor='secondary' textAlign='left'>Philipp Henkel</Text></TableItem>
            </TableRow>
          </Table>
          <Text margin='1em' />
          <Link textSize='1.5rem' margin='0.5em' href='http://creativecommons.org/licenses/by/4.0/'> Creative Commons Attribution 4.0 International License </Link>
          <Text textSize='1.5rem' margin='0.5em' textColor='secondary' italic >
            Feel free to spread/modify/reuse this model!
          </Text>
        </Slide>

      </Deck>
    );
  }
}
