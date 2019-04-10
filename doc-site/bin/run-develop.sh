#!/bin/bash

DOC_SITE_DIR=$(cd "$(dirname "$0")" && cd ../ && pwd)

(

    cd "${DOC_SITE_DIR}" || exit

    PACKAGE_NAME="@ezcater/recipe"
    PACKGE_DIR="${DOC_SITE_DIR}/node_modules/${PACKAGE_NAME}"

    if [[ -d "${PACKGE_DIR}" && -h "${PACKGE_DIR}" ]]
    then
        echo "${PACKAGE_NAME} is already linked via npm link"
    else
        (cd ../ && npm link)
        npm link "${PACKAGE_NAME}"
    fi

    npx gatsby develop

)
