import React from 'react';

// Mocked icons for tests and playroom, so that we don't have to import icon libraries for tests, stories, and playroom for performance and dependency management reasons

// Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const MOCK_ICON_FA_CART_SHOPPING = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-testid="faCartShopping">
    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
  </svg>
);

// Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const MOCK_ICON_FA_CIRCLE = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-testid="faCircleIcon">
    <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
  </svg>
);

// Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const MOCK_ICON_FA_COFFEE = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-testid="faCoffeeIcon">
    <path d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224zM560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z" />
  </svg>
);

// Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const MOCK_ICON_FA_EMPTY_STAR = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-testid="faEmptyStarIcon">
    <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
  </svg>
);

// Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const MOCK_ICON_FA_FULL_STAR = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-testid="faFullStarIcon">
    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
  </svg>
);

// Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const MOCK_ICON_FA_HALF_STAR = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-testid="faHalfStarIcon">
    <path d="M463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7zM288 376.4L288.1 376.3L399.7 435.9L378.4 309.6L469.2 219.8L343.8 201.4L288.1 86.85L288 87.14V376.4z" />
  </svg>
);

// https://ezcater.github.io/icons/
export const MOCK_ICON_COFFEE = (
  <svg viewBox="0 0 100 100" data-testid="ezCaterCoffeeIcon">
    <path d="M92.0193205,30.2361217 C93.446717,30.2361217 94.6038505,31.3932552 94.6038505,32.8206517 C94.6038505,34.1931484 93.5340155,35.3157717 92.1827702,35.400097 L92.0193205,35.4051817 L27.723,35.405 L27.7231061,69.4313807 C27.7231061,84.3872339 35.7601513,93.5737035 48.3690806,93.7559373 L48.7525652,93.7587001 L68.4087774,93.7587001 C81.1067072,93.7587001 89.2703314,84.721297 89.4323341,69.8828043 L89.4347905,69.4313807 L89.4347905,41.0877017 C89.4347905,39.6603052 90.591924,38.5031717 92.0193205,38.5031717 C93.3918171,38.5031717 94.5144404,39.5730067 94.5987657,40.924252 L94.6038505,41.0877017 L94.6038505,69.4313807 C94.6038505,87.0879236 84.4400654,98.693913 68.8818837,98.9242671 L68.4087774,98.9277601 L48.7525652,98.9277601 C33.0830183,98.9277601 22.7620057,87.4989292 22.5571524,69.9645877 L22.5540461,69.4313807 L22.5546084,46.5129563 C20.1968973,45.0090714 17.2129169,44.5429004 14.7347257,45.2933313 C11.9710363,46.1302149 10.2864522,48.2892637 10.1897497,51.7086928 L10.1853471,52.0230204 L10.1853471,66.6014927 C10.1853471,70.9214553 12.9022551,73.3972216 16.8346245,72.1908992 C18.1992544,71.7722753 19.6448672,72.5391647 20.0634911,73.9037946 C20.482115,75.2684245 19.7152256,76.7140374 18.3505957,77.1326613 C10.9106144,79.4150045 5.15979366,74.2864795 5.01893206,66.8802827 L5.01628707,66.6014927 L5.01628707,52.0230204 C5.01628707,41.9773674 14.4636108,37.5656352 22.553804,40.7156046 L22.5540461,32.8206517 C22.5540461,31.4481551 23.6238811,30.3255318 24.9751264,30.2412065 L25.1385761,30.2361217 L92.0193205,30.2361217 Z M78.6754661,2.01273122 C79.3866783,3.2503249 78.9599617,4.83014414 77.722368,5.54135626 C71.0338003,9.38509798 70.5839896,15.2052888 76.137616,21.575309 C77.0756349,22.6512185 76.9638525,24.2838301 75.887943,25.221849 C74.8120335,26.159868 73.1794219,26.0480855 72.241403,24.972176 C64.6794577,16.2986101 65.4254345,6.64626657 75.1468411,1.05963312 C76.3844348,0.348420994 77.964254,0.775137552 78.6754661,2.01273122 Z M62.6585655,2.01564449 C63.3681686,3.25416139 62.9393993,4.83342475 61.7008824,5.54302792 C54.9928538,9.38636539 54.5430634,15.201641 60.1102925,21.573179 C61.0494878,22.6480617 60.9394914,24.2807946 59.8646086,25.2199899 C58.7897259,26.1591852 57.156993,26.0491888 56.2177977,24.9743061 C48.6366158,16.2978555 49.38339,6.64291888 59.131182,1.05796146 C60.3696989,0.348358287 61.9489623,0.777127584 62.6585655,2.01564449 Z M46.6185483,2.01370354 C47.3292234,3.25160565 46.9018215,4.83123961 45.6639194,5.54191474 C38.9685252,9.38571637 38.523592,15.2032982 44.0945817,21.5721162 C45.0343639,22.6464859 44.9252593,24.2792786 43.8508897,25.2190608 C42.7765201,26.1588431 41.1437273,26.0497385 40.2039451,24.9753688 C32.6183744,16.3034592 33.3569078,6.64700124 43.0903371,1.05907463 C44.3282392,0.348399506 45.9078732,0.775801424 46.6185483,2.01370354 Z" />
  </svg>
);

// https://ezcater.github.io/icons/
export const MOCK_ICON_FRIES = (
  <svg viewBox="0 0 100 100" data-testid="ezCaterFriesIcon">
    <path d="M23.777 30.135c.985 0 1.879.56 2.313 1.433l.076.167 5.363 13.008h35.214l5.367-13.008a2.585 2.585 0 012.205-1.593l.184-.007H89.27a2.585 2.585 0 01.164 5.164l-.164.006-13.042-.001-5.365 13.01a2.585 2.585 0 01-2.206 1.592l-.184.006H29.8c-.986 0-1.88-.56-2.314-1.432l-.076-.167-5.363-13.009H12.027l9.288 58.469h55.643l8.137-51.222a2.585 2.585 0 012.795-2.168l.163.021A2.585 2.585 0 0190.22 43.2l-.02.162-8.483 53.401a2.585 2.585 0 01-2.388 2.174l-.164.006H19.109a2.585 2.585 0 01-2.522-2.018l-.03-.161-10.11-63.639a2.585 2.585 0 012.39-2.984L9 30.135h14.777zM75.47 62.636a2.585 2.585 0 01-1.253 5.015c-16.33-4.081-31.185-4.081-43.652-1.642a64.193 64.193 0 00-4.27.978l-.457.124c-.278.078-.533.151-.764.22l-.696.219a5.74 5.74 0 00-.091.031 2.585 2.585 0 11-1.72-4.874l.391-.132c.363-.117.863-.268 1.494-.444a67.667 67.667 0 015.12-1.195c13.172-2.577 28.785-2.577 45.898 1.7zM49.135.731a2.585 2.585 0 012.58 2.421l.005.164v33.51a2.585 2.585 0 01-5.164.164l-.006-.163V3.316A2.585 2.585 0 0149.135.73zm13.906 1.071l.164.01a2.585 2.585 0 012.342 2.652l-.01.163-3.04 32.44a2.585 2.585 0 01-5.156-.318l.01-.163 3.04-32.441a2.585 2.585 0 012.489-2.343h.161zM37.86 3.982l.02.163 3.04 32.44a2.585 2.585 0 01-5.127.645l-.02-.162-3.04-32.441a2.585 2.585 0 015.095-.81l.032.165zm37.845 1.546a2.585 2.585 0 012.202 2.769l-.018.163-2.342 16.01a2.585 2.585 0 01-5.133-.586l.018-.162 2.342-16.01a2.585 2.585 0 012.931-2.184zm-61.684 6.476l.036.166 2.11 11.458a2.585 2.585 0 01-5.048 1.102l-.036-.166-2.11-11.458a2.585 2.585 0 015.002-1.264l.046.162zM25.47 7.55l.028.161 2.342 16.01a2.585 2.585 0 01-5.086.91l-.029-.161-2.341-16.01a2.585 2.585 0 015.086-.91zm61.753 2.546a2.585 2.585 0 012.1 2.841l-.026.169-2.109 11.458a2.585 2.585 0 01-5.109-.768l.025-.168 2.11-11.458a2.585 2.585 0 013.01-2.074z" />
  </svg>
);

// https://ezcater.github.io/icons/
export const MOCK_ICON_PIZZA = (
  <svg viewBox="0 0 100 100" data-testid="ezCaterPizzaIcon">
    <path d="M43.17 2.006c30.929 0 56 25.074 56 56.002 0 2.717-1.415 5.76-3.866 8.327a2.585 2.585 0 01-3.738-3.57c1.591-1.666 2.436-3.482 2.436-4.757 0-28.074-22.758-50.833-50.833-50.833-2.545 0-5.973 2.44-7.869 6.575l-5.744 13.333-1.753 4.097c-1.696 3.972-3.23 7.6-4.71 11.148l-1.065 2.559c-.524 1.264-1.036 2.506-1.536 3.727l-1.389 3.408C14.81 62.626 11.501 71.44 9.267 78.39l-.174.545c-1.389 4.371-2.308 7.896-2.721 10.479-.203 1.267-.277 2.274-.231 2.978l.012.154.013.114.103.018c.34.047.787.065 1.33.048l.279-.01c1.56-.078 3.674-.408 6.287-.982l.496-.11c5.367-1.214 12.583-3.373 21.36-6.35l1.945-.663c13.742-4.722 30.151-10.996 47.569-18.02a2.585 2.585 0 011.933 4.795l-2.493 1.002C67.58 79.37 51.271 85.562 37.681 90.17l-3.055 1.026C15.74 97.476 5.578 99.58 2.4 96.4c-3.932-3.936.686-18.797 12.573-47.942l.737-1.803c.67-1.637 1.362-3.31 2.075-5.024l1.287-3.082c1.632-3.894 3.347-7.932 5.284-12.451l6.05-14.057c2.642-6.155 7.987-10.034 12.764-10.034zM25.84 50.648a15.409 15.409 0 0111.396 14.879c0 8.514-6.895 15.412-15.406 15.412a15.32 15.32 0 01-7.183-1.773 2.585 2.585 0 012.266-4.643l.153.074a10.15 10.15 0 004.764 1.173c5.655 0 10.236-4.583 10.236-10.243a10.24 10.24 0 00-7.568-9.888 2.585 2.585 0 111.343-4.991zm45.7.646c5.84 0 11.1 3.28 13.72 8.386a2.585 2.585 0 11-4.6 2.36 10.244 10.244 0 00-9.12-5.577c-5.656 0-10.243 4.587-10.243 10.243 0 1.113.182 2.21.532 3.254a2.585 2.585 0 01-4.9 1.645 15.387 15.387 0 01-.801-4.899c0-8.51 6.901-15.412 15.412-15.412zm-1.983-20.63c4.406 0 7.976 3.576 7.976 7.988a2.585 2.585 0 01-5.164.164l-.005-.164a2.812 2.812 0 00-2.807-2.818 2.812 2.812 0 00-.172 5.619l.172.005a2.585 2.585 0 010 5.169c-4.413 0-7.991-3.57-7.991-7.975a7.985 7.985 0 017.991-7.987zM42.683 13.333c8.51 0 15.41 6.9 15.41 15.411 0 8.51-6.9 15.407-15.41 15.407a15.39 15.39 0 01-12.777-6.79 2.585 2.585 0 014.282-2.895 10.223 10.223 0 008.495 4.516c5.656 0 10.241-4.584 10.241-10.238 0-5.655-4.586-10.242-10.241-10.242-.62 0-1.244.058-1.868.172a2.585 2.585 0 11-.927-5.085 15.571 15.571 0 012.795-.256z" />
  </svg>
);

// https://ezcater.github.io/icons/
export const MOCK_ICON_RAMEN = (
  <svg viewBox="0 0 100 100" data-testid="ezCaterRamenIcon">
    <path d="M95.634 1.599a2.559 2.559 0 01.169 5.112l-.169.005H51.732c-.207 1.504-.612 3.024-1.257 5l-.778 2.356c-.19.6-.275.913-.391 1.394-.204.842-.304 1.569-.304 2.253 0 .678.098 1.39.3 2.215l.182.69c.121.433.238.793.61 1.89l.222.655c1.117 3.295 1.584 5.32 1.584 7.967 0 2.26-.38 3.89-1.448 7.069l-.423 1.257c-.313.948-.542 1.71-.703 2.378l43.737-.005a2.559 2.559 0 01.168 5.112l-.168.005-46.483.005a2.6 2.6 0 01-.136.004l-.136-.005-9.347.003a2.603 2.603 0 01-.11.002l-.108-.004-9.404.003h-.079l-.08-.002-19.233.002-.109.361a43.436 43.436 0 00-1.75 11.536l-.007.742c0 13.393 6.088 25.77 16.316 33.962l.191.15 53.985-.004.19-.15c10.084-8.078 16.144-20.225 16.31-33.4l.003-.558c0-1.714-.098-3.418-.293-5.105a2.559 2.559 0 015.083-.588c.218 1.882.328 3.782.328 5.693 0 15.377-7.19 29.567-19.193 38.704-.39.296-.855.474-1.34.514l-.21.008-55.741.004c-.56 0-1.104-.184-1.55-.523C8.155 89.17.964 74.98.964 59.6c0-5.527.923-10.926 2.71-16.041A2.559 2.559 0 015.91 41.85l.18-.007 18.822-.002c.193-1.125.528-2.32 1.045-3.893l.66-1.971c.738-2.257.984-3.42.984-4.84 0-1.851-.327-3.361-1.176-5.912l-.79-2.353a22.187 22.187 0 01-.365-1.248c-.373-1.386-.568-2.635-.568-3.905 0-.523.034-1.044.099-1.573h-6.762a2.559 2.559 0 01-.169-5.112l.169-.006h8.089l.155-.463c.526-1.577.872-2.77 1.077-3.85l-9.321.001a2.559 2.559 0 01-.168-5.112l.168-.005h77.596zM27.358 52.506a3.412 3.412 0 110 6.823h-1a3.412 3.412 0 110-6.823zm11.61-.001a3.412 3.412 0 010 6.823h-1a3.412 3.412 0 110-6.823zm11.61-.001a3.412 3.412 0 110 6.823h-1a3.412 3.412 0 010-6.823zm11.609-.002a3.412 3.412 0 010 6.824h-1a3.412 3.412 0 110-6.823zm11.61 0a3.412 3.412 0 110 6.822h-1a3.412 3.412 0 010-6.823zM36.95 6.715H32.55c-.207 1.504-.612 3.024-1.258 5l-.777 2.356-.043.141a2.539 2.539 0 01-.077.25c-.114.371-.183.64-.272 1.003-.203.842-.303 1.569-.303 2.253 0 .678.098 1.39.3 2.215l.16.613c.087.313.164.567.322 1.045l.531 1.577c1.118 3.295 1.585 5.32 1.585 7.967 0 2.167-.35 3.753-1.318 6.68l-.554 1.646a30.74 30.74 0 00-.703 2.38h4.36c.193-1.126.529-2.322 1.046-3.894l.556-1.657c.819-2.465 1.087-3.67 1.087-5.155 0-1.753-.293-3.2-1.045-5.517l-.92-2.747a22.187 22.187 0 01-.366-1.248c-.372-1.386-.567-2.635-.567-3.905 0-.984.118-1.965.344-3.006l.103-.45c.16-.662.266-1.051.526-1.859l.608-1.84c.525-1.576.872-2.768 1.077-3.848zm9.592 0H42.14c-.19 1.387-.55 2.788-1.11 4.547l-.924 2.81c-.191.599-.276.912-.392 1.393-.204.842-.304 1.569-.304 2.253 0 .678.098 1.39.3 2.215l.16.613c.109.392.202.69.458 1.45l.396 1.172c1.117 3.295 1.585 5.32 1.585 7.967 0 2.26-.381 3.89-1.449 7.069l-.191.567c-.435 1.28-.737 2.246-.936 3.07l4.362-.002c.192-1.124.528-2.32 1.045-3.892l.556-1.657c.783-2.358 1.063-3.562 1.085-4.962l.002-.193c0-1.753-.293-3.2-1.046-5.517l-.919-2.747a22.187 22.187 0 01-.366-1.248c-.372-1.386-.567-2.635-.567-3.905 0-.984.118-1.965.344-3.006l.169-.72a23.1 23.1 0 01.518-1.769l.55-1.66c.525-1.576.872-2.768 1.077-3.848zm49.091 4.312a2.559 2.559 0 01.169 5.112l-.169.005H55.697a2.559 2.559 0 01-.168-5.111l.168-.006h39.937z" />
  </svg>
);

// https://ezcater.github.io/icons/
export const MOCK_ICON_WATER_GLASS = (
  <svg viewBox="0 0 100 100" data-testid="ezCaterWaterGlassIcon">
    <path d="M81.8137687,0.41547 C83.2411652,0.41547 84.3982987,1.5726035 84.3982987,3 C84.3982987,4.37249664 83.3284638,5.49511993 81.9772185,5.57944525 L81.8137687,5.58453 L20.786,5.584 L27.389,93.458 L72.41,93.458 L78.3487382,12.0851824 C78.4486334,10.716326 79.5973394,9.6745465 80.9511383,9.68879324 L81.1145246,9.69561843 C82.4833811,9.79551359 83.5251606,10.9442196 83.5109138,12.2980185 L83.5040886,12.4614049 L77.3908137,96.2311912 C77.2963422,97.5257268 76.2594927,98.5399469 74.9811859,98.6222177 L74.8131385,98.62761 L24.9920152,98.62761 C23.6960946,98.62761 22.6101221,97.6702754 22.4326862,96.403667 L22.4147521,96.2367565 L15.422737,3.19367654 C15.3140785,1.74775276 16.4132207,0.507089423 17.8401483,0.420314904 L18,0.41547 L81.8137687,0.41547 Z M58.8331618,22.2294201 C60.4850007,22.2294201 61.7484289,22.6763938 63.3804499,23.6218075 L64.3148736,24.1844251 C66.8186405,25.7114226 68.0012846,25.8765659 71.0676326,24.375805 C72.3497097,23.7483187 73.8977167,24.2789695 74.525203,25.5610466 C75.1526892,26.8431237 74.6220385,28.3911307 73.3399614,29.018617 C68.6146533,31.3313217 65.651618,30.9866953 61.8932646,28.7597628 L61.0498604,28.2483788 C59.9883791,27.6106189 59.4377406,27.3984801 58.8331618,27.3984801 C57.6730343,27.3984801 56.9615863,27.6420961 55.6937938,28.4047283 L54.9452861,28.8659403 C53.1142095,29.9908087 51.7780526,30.5033621 49.8665657,30.5033621 C48.0776727,30.5033621 46.7916873,30.0534558 45.1311625,29.0725234 L44.3016709,28.5647783 C42.8641969,27.676158 42.1352795,27.3984801 40.8965236,27.3984801 C40.3799632,27.3984801 39.9055186,27.5594832 39.0940497,28.0307834 L38.1640646,28.6017659 C34.2873442,31.0252773 31.2935842,31.4446652 26.4450237,28.9955177 C25.170946,28.3519444 24.6598212,26.797381 25.3033945,25.5233032 C25.9469679,24.2492255 27.5015312,23.7381007 28.775609,24.381674 C31.7265218,25.872265 32.8834575,25.7696923 35.1964646,24.3592633 L35.9795778,23.8720275 C37.79322,22.7527866 39.1115908,22.2294201 40.8965236,22.2294201 C43.1625667,22.2294201 44.6739962,22.759759 46.6804671,23.961477 L47.4974943,24.4636408 C48.5856582,25.1314418 49.1150895,25.3343021 49.8665657,25.3343021 C50.5699559,25.3343021 51.0778707,25.1574528 52.0288084,24.5893746 L52.7128262,24.1685257 C54.8919701,22.8202623 56.441592,22.2294201 58.8331618,22.2294201 Z" />
  </svg>
);

// https://ezcater.github.io/icons/
export const MOCK_ICON_WINE_GLASS = (
  <svg viewBox="0 0 100 100" data-testid="ezCaterWineGlassIcon">
    <path d="M70.386098,93.6103889 C71.8134945,93.6103889 72.970628,94.7675224 72.970628,96.1949189 C72.970628,97.5674155 71.900793,98.6900388 70.5495477,98.7743641 L70.386098,98.7794489 L29.6108297,98.7794489 C28.1834331,98.7794489 27.0262997,97.6223154 27.0262997,96.1949189 C27.0262997,94.8224222 28.0961346,93.6997989 29.4473799,93.6154736 L29.6108297,93.6103889 L70.386098,93.6103889 Z M24.139,5.736 L23.9130571,6.23754417 L23.744616,6.61857138 C22.9256281,8.48615301 22.1050947,10.5695746 21.3393122,12.8112009 C19.2078112,19.0506077 17.9144478,25.2651464 17.8662029,30.992628 C17.7318663,46.9406539 26.9664342,56.2053477 50.0010483,56.2053477 C67.292974,56.2056923 76.8054324,50.8776046 80.4298091,41.4854546 C83.225504,34.2407372 82.4673309,24.8408383 79.2781342,14.6869033 C78.8504117,13.3250978 79.6076357,11.8743988 80.9694412,11.4466763 C82.3312468,11.0189539 83.7819458,11.7761779 84.2096682,13.1379834 C87.7171203,24.305197 88.5613002,34.7714161 85.2522592,43.3464104 C80.9868274,54.3997801 70.3062836,60.776767 52.5857968,61.3347489 L52.5855783,86.8304775 C52.5855783,88.257874 51.4284448,89.4150075 50.0010483,89.4150075 C48.6285517,89.4150075 47.5059284,88.3451725 47.4216031,86.9939272 L47.4165183,86.8304775 L47.4156343,61.334566 C23.3299775,60.5794399 12.5441266,49.1364752 12.6973263,30.9490885 C12.7508698,24.5925647 14.1518283,17.8610376 16.447806,11.1401686 C17.2628243,8.75441749 18.1360062,6.53731595 19.0107335,4.54262871 C19.3184388,3.84095193 19.6051294,3.21572775 19.8637542,2.67377167 L20.1678375,2.04987922 C20.1816957,2.02231011 20.1942168,1.99759864 20.2053681,1.97577654 C20.6195059,1.16534543 21.4266617,0.636561613 22.3258439,0.573629383 L22.5068182,0.56730887 L77.4970015,0.56730887 C78.924398,0.56730887 80.0815315,1.72444237 80.0815315,3.15183887 C80.0815315,4.52433551 79.0116965,5.6469588 77.6604512,5.73128412 L77.4970015,5.73636887 L50.0010483,5.73636887 L24.139,5.736 Z M74.2074117,33.6985712 C75.6348082,33.6985712 76.7919417,34.8557047 76.7919417,36.2831012 C76.7919417,37.6555979 75.7221067,38.7782212 74.3708615,38.8625465 L74.2074117,38.8676312 L29.974,38.867 L30.0924451,39.0515053 C32.95335,43.4061931 39.1128744,45.9081883 49.6473754,45.9853124 L50.1523295,45.9871499 C57.1805771,45.9871499 62.4012124,44.8803577 65.981027,42.8594682 C67.2240347,42.1577612 68.8005374,42.5965721 69.5022444,43.8395798 C70.2039514,45.0825874 69.7651406,46.6590902 68.5221329,47.3607972 C64.080833,49.8680153 58.0045394,51.1562099 50.1523295,51.1562099 C34.626173,51.1562099 25.9548754,46.0333147 23.5921993,36.9325494 C23.1814295,35.3503099 24.3222216,33.8050938 25.9262585,33.7038375 L26.0938012,33.6985712 L74.2074117,33.6985712 Z M31.0402216,10.5874163 C32.3709995,11.103644 33.0313229,12.6009379 32.5150952,13.9317157 C32.3083344,14.4647223 32.1062925,15.0214116 31.9092272,15.5992445 C31.2255762,17.6038393 30.6312153,19.7686401 30.1322783,21.935732 C29.9922966,22.5437311 29.868128,23.11645 29.7599434,23.6441019 L29.5797868,24.558025 C29.5605459,24.6606115 29.5460115,24.7407022 29.5362031,24.7968048 C29.2903811,26.2028746 27.9512582,27.1434413 26.5451884,26.8976193 C25.1391186,26.6517973 24.1985519,25.3126744 24.4443739,23.9066045 L24.5478299,23.3505601 L24.6117386,23.0244553 C24.7467787,22.3444055 24.9078625,21.5888035 25.0950011,20.7759824 C25.6306804,18.4493031 26.2701152,16.1203327 27.0168579,13.9307411 C27.2363039,13.2872836 27.4625858,12.6638053 27.6959222,12.06229 C28.2121499,10.7315121 29.7094437,10.0711887 31.0402216,10.5874163 Z" />
  </svg>
);
