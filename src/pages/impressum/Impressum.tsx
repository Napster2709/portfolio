import { Grid, Huge, Section } from 'components';
import React from 'react';

const Impressum = (): React.ReactElement => {
  return (
    <Section>
      <Grid>
        <Grid.Column centered>
          <Huge>Impressum</Huge>
        </Grid.Column>
      </Grid>
    </Section>
  );
};

export { Impressum };
