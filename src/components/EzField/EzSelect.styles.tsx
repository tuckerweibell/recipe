import {css} from '@emotion/core';

export const listbox = () => css`
  min-width: 230px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: scroll;
  max-height: 20rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [role='group'] {
    > :first-of-type {
      font-weight: var(--recipe-global-font-weight-bold);
      font-size: var(--recipe-global-font-size-75);
      line-height: 1.3em;
      color: var(--recipe-alias-deemphasis-text-color);
      margin: 0;
      padding: var(--recipe-global-static-size-100) var(--recipe-global-static-size-150);
    }
  }

  [role='option'] {
    cursor: default;
    margin: 0;
    padding: var(--recipe-global-static-size-100) var(--recipe-global-static-size-150);
    color: var(--recipe-global-color-static-blue-600);
    font-weight: bold;
    position: relative;
    padding-right: 2em;

    &[aria-selected='true'] {
      background-color: var(--recipe-global-color-static-blue-600);
      color: var(--recipe-global-color-static-white);

      &[aria-current='true'] {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24' width='12' height='12'%3e%3cpath d='M20.29 2L9 13.57 3.71 8.56 0 12.27 9 21 24 5.71z'/%3e%3c/svg%3e");
      }
    }

    &[aria-current='true'] {
      background-repeat: no-repeat;
      background-position: center right 12px;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%238b99a6' viewBox='0 0 24 24' width='12' height='12'%3e%3cpath d='M20.29 2L9 13.57 3.71 8.56 0 12.27 9 21 24 5.71z'/%3e%3c/svg%3e");
    }
  }
`;
