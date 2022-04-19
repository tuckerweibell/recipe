import React from 'react';
import {EzTooltip, EzLink} from '@ezcater/recipe';

const EditDocsButton = ({path}) => {
  if (!path || !path.fileAbsolutePath) {
    return null;
  }

  const gitPath = path.fileAbsolutePath.split('/recipe/')[1];

  const gitLink = `https://github.com/ezcater/recipe/edit/main/${gitPath}`;

  return (
    <EzTooltip message="Edit docs on GitHub">
      <EzLink>
        <a href={gitLink} target="_blank">
          <svg
            height="16"
            fill="#8b99a6"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref="#editPencil" />
          </svg>
        </a>
      </EzLink>
    </EzTooltip>
  );
};

export default EditDocsButton;
