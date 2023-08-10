import React, {FC} from 'react';
import {Unstyled} from '@storybook/blocks';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {EzAlert, EzIcon, EzLayout, EzLink} from '../../../src';
import {MigrationAlertProps} from './MigrationAlert.types';

const MigrationAlert: FC<MigrationAlertProps> = ({component}) => (
  <Unstyled>
    <EzAlert
      headline="This component doc page is in progress of being migrated from our old legacy doc site."
      tagline="See link below for more details."
      use="warning"
    />
    <div style={{marginTop: '10px'}}>
      <EzLink>
        <a
          href={`https://ezcater.github.io/recipe/components/${component}`}
          target="_blank"
          rel="noreferrer"
        >
          <EzLayout>
            <EzIcon color="common.blue90" icon={faLink} size="small" />
            Click here to navigate to old doc page.
          </EzLayout>
        </a>
      </EzLink>
    </div>
  </Unstyled>
);

export default MigrationAlert;
