import * as React from 'react';
import 'jest-enzyme';
import {configure} from 'enzyme';
// @ts-ignore
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer, createMatchers} from 'jest-emotion';
import {toHaveNoViolations} from 'jest-axe';
import * as emotion from 'emotion';

configure({adapter: new Adapter()});

// Add custom matchers
expect.extend(toHaveNoViolations);

// Add a snapshot serializer that removes random hashes
// from emotion class names.
expect.addSnapshotSerializer(
  createSerializer(emotion, {
    classNameReplacer(className, index) {
      return `recipe-${index}`;
    },
  })
);

expect.extend(createMatchers(emotion));

