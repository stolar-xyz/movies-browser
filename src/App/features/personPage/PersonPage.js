import Subheader from '../../common/styled/Subheader';
import Tile from '../../common/structure/Tile';
import List from '../../common/styled/List';
import Section from '../../common/styled/Section';
import Movie from '../../common/structure/Movie';

//test structure

const PersonPage = () => (
  <>
    <Section>
      <Tile
        altImageText={'photo'}
        imageSource={'https://thisdoesnotexist.com/'}
        name={'Liu Yifei'}
        firstInformation={'Date of birth:'}
        firstInformationDetails={'25.08.1987'}
        secondInformation={'Place of birth:'}
        secondInformationDetails={'Wuhan, Hubei, China'}
        description={
          'Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.'
        }
      />
    </Section>
    <Section>
      <Subheader>Movies - cast</Subheader>
      <List movies>
        <Movie
          title={'Mulan'}
          year={'2020'}
          genres={'Action'}
          rate={'7,8'}
          votes={'35'}
        />
        <Movie
          title={'Mulan'}
          year={'2020'}
          genres={'Action'}
          rate={'7,8'}
          votes={'35'}
        />
        <Movie
          title={'Mulan'}
          year={'2020'}
          genres={'Action'}
          rate={'7,8'}
          votes={'35'}
        />
        <Movie
          title={'Mulan'}
          year={'2020'}
          genres={'Action'}
          rate={'7,8'}
          votes={'35'}
        />
      </List>
    </Section>
    <Section>
      <Subheader>Movies - crew</Subheader>
      <List movies>
        <Movie
          title={'Mulan'}
          year={'2020'}
          genres={'Action'}
          rate={'7,8'}
          votes={'35'}
        />
        <Movie
          title={'Mulan'}
          year={'2020'}
          genres={'Action'}
          rate={'7,8'}
          votes={'35'}
        />
        <Movie
          title={'Mulan'}
          year={'2020'}
          genres={'Action'}
          rate={'7,8'}
          votes={'35'}
        />
        <Movie
          title={'Mulan'}
          year={'2020'}
          genres={'Action'}
          rate={'7,8'}
          votes={'35'}
        />
      </List>
    </Section>
  </>
);

export default PersonPage;
