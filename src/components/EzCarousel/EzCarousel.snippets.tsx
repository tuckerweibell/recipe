const card = `
  <EzCard>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in
      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
    </p>
  </EzCard>
`;

export const snippets = [
  {
    group: 'Carousel',
    name: 'EzCarousel',
    code: `
      <EzCarousel>
        ${card}
        ${card}
        ${card}
        ${card}
        ${card}
        ${card}
      </EzCarousel>`,
  },
];
