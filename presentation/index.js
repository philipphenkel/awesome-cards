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
  Deck,
  Slide,
  Heading,
  Table,
  TableRow,
  TableItem,
  Link,
  Text,
  Notes
} from 'spectacle';

import AwesomeCard from './awesome-card.js'

import createTheme from 'spectacle/lib/themes/default';

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

        <Slide id='awesome-cards' transition={['zoom', 'fade']} bgColor='tertiary' >
          <Heading textColor='secondary' caps fit>Awesome Cards</Heading>
          <Text margin='20px auto' textColor='primary'>To run your Squad Health Check</Text>
          <Link href='https://github.com/philipphenkel/awesome-cards'>
            <Text margin='40px auto' textSize='.8em' caps textColor='primary'>View on Github</Text>
          </Link>
        </Slide>

        <Slide id='squad-health-check' transition={['zoom', 'fade']}>
          <Heading textColor='tertiary' fit caps>Squad Health Check</Heading>
          <Text margin='1em' />
          <Text fit margin='0.5em auto' textColor='secondary'>workshop and visualization technique</Text>
          <Text fit margin='0.5em auto' textColor='secondary'>invented and practised at Spotify</Text>
          <Text fit margin='0.5em auto' textColor='secondary'>helps teams to improve</Text>
          <Text fit margin='0.5em auto' textColor='secondary'>by assessing various health indicators</Text>
        </Slide>

        <Slide id='spotify-cards' transition={['zoom', 'fade']}>
          <Heading textColor='tertiary' caps fit>Spotify&apos;s Starter Set</Heading>
        </Slide>

        <Slide id='easy-to-release'>
          <AwesomeCard
            question='Easy to release'
            awesome='Releasing is simple, safe, painless and mostly automated.'
            crappy='Releasing is risky, painful, lots of manual work, and takes forever.'
          />
        </Slide>

        <Slide id='suitable-process'>
          <AwesomeCard
            question='Suitable process'
            awesome='Our way of working fits us perfectly.'
            crappy='Our way of working sucks.'
          />
        </Slide>

        <Slide id='tech-quality'>
          <AwesomeCard
            question='Tech quality '
            awesome='We’re proud of the quality of our code! It is clean, easy to read, and has great test coverage.'
            crappy='Our code is a pile of dung, and technical debt is raging out of control.'
          />
        </Slide>

        <Slide id='value'>
          <AwesomeCard
            question='Value'
            awesome='We deliver great stuff! We’re proud of it and our stakeholders are really happy.'
            crappy='We deliver crap. We feel ashamed to deliver it. Our stakeholders hate us.'
          />
        </Slide>

        <Slide id='speed'>
          <AwesomeCard
            question='Speed'
            awesome='We get stuff done really quickly.No waiting, no delays.'
            crappy='We never seem to get done with anything.We keep getting stuck or interrupted. Stories keep getting stuck on dependencies.'
          />
        </Slide>

        <Slide id='mission'>
          <AwesomeCard
            question='Mission'
            awesome='We know exactly why we are here, and we are really excited about it.'
            crappy='We have no idea why we are here, there is no high level picture or focus. Our so-called mission is completely unclear and uninspiring.'
          />
        </Slide>

        <Slide id='fun'>
          <AwesomeCard
            question='Fun'
            awesome='We love going to work, and have great fun working together.'
            crappy='Boooooooring.'
          />
        </Slide>

        <Slide id='learning'>
          <AwesomeCard
            question='Learning'
            awesome='We’re learning lots of interesting stuff all the time!'
            crappy='We never have time to learn anything.'
          />
        </Slide>

        <Slide id='support'>
          <AwesomeCard
            question='Support'
            awesome='We always get great support &amp; help when we ask for it!'
            crappy='We keep getting stuck because we can’t get the support &amp; help that we ask for.'
          />
        </Slide>

        <Slide id='pawns-or-players'>
          <AwesomeCard
            question='Pawns or players'
            awesome='We are in control of our destiny! We decide what to build and how to build it.'
            crappy='We are just pawns in a game of chess, with no influence over what we build or how we build it.'
          />
        </Slide>

        <Slide id='more-awesomeness' transition={['zoom', 'fade']} >
          <Heading textColor='tertiary' fit caps>More Awesomeness</Heading>
        </Slide>

        <Slide id='flow'>
          <Notes>
            Contributed by Alex Fürstenau
          </Notes>
          <AwesomeCard
            question='Flow'
            awesome='We have always the right amount of challenging tasks. Neither too difficult nor too easy.'
            crappy='We have tasks a 6 year old could handle or which are impossible to resolve.'
          />
        </Slide>

        <Slide id='stakeholders'>
          <Notes>
            Inspired by Nicolas Previale
          </Notes>
          <AwesomeCard
            question='Stakeholders'
            awesome='We meet. We understand what they want and why it is needed. We establish priorities together.'
            crappy='We don’t know who they are.'
          />
        </Slide>

        <Slide id='your-awesome-card'>
          <Notes>
            Contributed by X.
            Optional description goes here.
          </Notes>
          <AwesomeCard
            question='Your Awesome Card'
            awesome='Example of happy'
            crappy='Example of crappy'
          />
        </Slide>

        <Slide id='references' transition={['zoom', 'fade']} bgColor='primary'>
          <Heading size={2} textColor='tertiary' caps>References</Heading>
          <Text margin='1em' />
          <Link href='https://labs.spotify.com/2014/09/16/squad-health-check-model/'>Squad Health Check, Spotify Labs </Link>
        </Slide>

        <Slide id='credits' transition={['zoom', 'fade']} bgColor='primary'>
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
