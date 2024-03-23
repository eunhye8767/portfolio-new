import { Global, css } from '@emotion/react';
import 'fonts/fonts.css';

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        font-family: 'Pretendard', sans-serif;
        font-weight: 400;
        color: #000;
        line-height: 1.5;
      }

      html {
        -webkit-text-size-adjust: 100%;
        -moz-tab-size: 4;
        tab-size: 4;
      }

      hr {
        height: 0;
        color: inherit;
      }

      abbr[title] {
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bolder;
      }

      code,
      kbd,
      samp,
      pre {
        font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono',
          Menlo, monospace;
        font-size: 1em;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      table {
        text-indent: 0;
        border-color: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      select {
        text-transform: none;
      }

      button,
      [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button;
      }

      ::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      :-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      :-moz-ui-invalid {
        box-shadow: none;
      }

      legend {
        padding: 0;
      }

      progress {
        vertical-align: baseline;
      }

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        height: auto;
      }

      [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      summary {
        display: list-item;
      }
    `}
  />
);

export default GlobalStyles;
