import React, {forwardRef, JSX, type SVGProps} from 'react';
import {EzLogoProps, Ref} from '../EzLogo.types';
import {ezColors} from '../../../themes/ezColors';

const COLOR_MAP = {
  default: ezColors.green.green100.color,
  black: ezColors.black.black.color,
  white: ezColors.white.white.color,
};

const SIZE_MAP = {
  small: 24,
  medium: 32,
  large: 48,
};

const EzLogoHorizontal = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg {...props}>
    <path d="M61.864 20.007a5.45 5.45 0 0 1-1.473 1.12c-.581.29-1.302.437-2.143.437-.773 0-1.477-.14-2.09-.413a4.732 4.732 0 0 1-1.582-1.134 5.295 5.295 0 0 1-1.03-1.712 6.007 6.007 0 0 1-.37-2.104c0-.738.108-1.477.322-2.167.21-.679.525-1.288.934-1.806.4-.508.907-.914 1.502-1.204.595-.29 1.31-.441 2.129-.441s1.568.147 2.163.44c.553.27 1.092.673 1.61 1.18.105-.315.221-.623.35-.927a12.416 12.416 0 0 1 1.86-3.025 8.567 8.567 0 0 0-1.992-1.103 10.575 10.575 0 0 0-3.84-.714c-1.432 0-2.749.242-3.922.718a8.976 8.976 0 0 0-3.038 2.01c-.84.853-1.502 1.89-1.968 3.076-.462 1.184-.696 2.493-.696 3.897s.234 2.71.696 3.879a8.75 8.75 0 0 0 1.992 3.042 9.088 9.088 0 0 0 3.056 1.967c1.17.462 2.475.697 3.88.697 1.326 0 2.6-.22 3.794-.655a7.714 7.714 0 0 0 2.065-1.145 12.048 12.048 0 0 1-2.205-3.913h-.004ZM112.982 16.093c0-1.166-.161-2.332-.48-3.462a8.94 8.94 0 0 0-1.579-3.12c-.731-.924-1.673-1.683-2.8-2.254-1.134-.574-2.528-.865-4.145-.865-1.358 0-2.636.249-3.798.739a9.114 9.114 0 0 0-3.018 2.044 9.498 9.498 0 0 0-1.981 3.067c-.476 1.17-.718 2.454-.718 3.812 0 1.359.22 2.633.658 3.799a9.06 9.06 0 0 0 1.887 3.073 8.665 8.665 0 0 0 3.007 2.052c1.176.49 2.496.738 3.928.738 3.459 0 6.189-1.267 8.122-3.763l.329-.427-3.336-2.549-.329.406c-.596.732-1.257 1.33-1.957 1.772-.669.42-1.471.633-2.391.633a6.188 6.188 0 0 1-2.024-.336 5.48 5.48 0 0 1-1.701-.934 4.613 4.613 0 0 1-1.166-1.429 3.7 3.7 0 0 1-.399-1.28h13.891v-1.716ZM99.098 14.09c.053-.34.154-.682.301-1.029.231-.536.56-1.033.977-1.474a4.927 4.927 0 0 1 1.537-1.07 4.771 4.771 0 0 1 1.995-.41c.725 0 1.421.115 1.978.346a3.772 3.772 0 0 1 1.365.928c.361.392.637.864.823 1.404.136.402.231.836.28 1.305h-9.256ZM125.682 6.76c-1.368-.459-2.492-.452-3.668-.105a7.208 7.208 0 0 0-1.607.693c-.49.29-.942.648-1.341 1.06-.01.011-.017.022-.028.029V6.833h-4.372V25.28h4.372v-9.26c0-1.754.382-3.049 1.134-3.843.757-.799 1.838-1.187 3.312-1.187 0 0 1.022-.01 2.198.413V6.76ZM91.859 6.833V2.342h-4.376v4.491h-2.377v4.093h2.377v14.346h4.376V10.926h2.377V6.833h-2.377Z" />
    <path d="M78.72 6.833v1.009a9.88 9.88 0 0 0-1.34-.69 9.794 9.794 0 0 0-3.837-.756 9.794 9.794 0 0 0-3.837.756 9.654 9.654 0 0 0-3.102 2.076 9.805 9.805 0 0 0-2.072 3.063 9.418 9.418 0 0 0-.76 3.767c0 1.334.256 2.608.76 3.784a9.557 9.557 0 0 0 2.076 3.063 9.854 9.854 0 0 0 3.098 2.055 9.746 9.746 0 0 0 3.837.76 9.806 9.806 0 0 0 5.18-1.443v1.005h4.373V6.833H78.72Zm0 9.221c0 .812-.126 1.572-.37 2.255a5.015 5.015 0 0 1-1.023 1.722c-.437.47-.98.844-1.617 1.12-.637.273-1.369.413-2.17.413-.802 0-1.534-.14-2.171-.413a4.698 4.698 0 0 1-1.614-1.12 4.928 4.928 0 0 1-1.022-1.722 6.636 6.636 0 0 1-.371-2.255c0-.815.126-1.575.37-2.254a4.993 4.993 0 0 1 1.023-1.723 4.691 4.691 0 0 1 1.614-1.116c.637-.277 1.369-.413 2.17-.413.802 0 1.53.14 2.17.413.638.273 1.18.65 1.615 1.116.437.47.78 1.05 1.022 1.723.245.682.37 1.442.37 2.254h.004ZM46.706 31.513H.441V.441h46.265v31.072ZM4.131 27.782h38.84V4.18H4.134v23.602h-.003Z" />
    <path d="m31.247 21.417 9.344-10.897V6.833H25.884v3.953h8.944l-9.273 10.862v3.722H41.11v-3.953h-9.862ZM24.61 16.138c0-1.173-.161-2.345-.48-3.48a8.954 8.954 0 0 0-1.585-3.133c-.732-.93-1.68-1.69-2.815-2.265-1.141-.574-2.542-.868-4.166-.868-1.369 0-2.653.249-3.82.742a9.149 9.149 0 0 0-3.03 2.055A9.647 9.647 0 0 0 6.72 12.27c-.48 1.176-.72 2.465-.72 3.83 0 1.365.22 2.646.66 3.816a9.16 9.16 0 0 0 1.898 3.09c.823.876 1.838 1.569 3.021 2.063 1.18.493 2.51.742 3.946.742 3.476 0 6.22-1.274 8.16-3.785l.332-.43-3.353-2.563-.33.406c-.598.736-1.26 1.334-1.967 1.782-.668.42-1.477.634-2.401.634a6.247 6.247 0 0 1-2.034-.34 5.51 5.51 0 0 1-1.712-.938 4.678 4.678 0 0 1-1.173-1.435 3.745 3.745 0 0 1-.402-1.288h13.96v-1.72l.004.004Zm-13.954-2.013c.053-.34.154-.686.301-1.032.231-.54.56-1.037.98-1.481a4.914 4.914 0 0 1 1.544-1.075 4.81 4.81 0 0 1 2.003-.413c.728 0 1.428.116 1.984.347.547.224 1.012.539 1.373.93.364.4.64.873.826 1.412.136.406.231.843.284 1.312h-9.298.003Z" />
  </svg>
);

const EzLogoVertical = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg {...props}>
    <path d="M31.514 21.064H.52V.248h30.994v20.816Zm-28.521-2.5h26.02V2.754H2.992v15.81Z" />
    <path d="m21.157 14.3 6.26-7.3V4.53h-9.852V7.18h5.992l-6.214 7.276v2.494h10.42V14.3h-6.606ZM16.71 10.764c0-.786-.109-1.57-.322-2.33a5.988 5.988 0 0 0-1.063-2.1 5.587 5.587 0 0 0-1.885-1.517c-.763-.386-1.702-.581-2.79-.581-.916 0-1.777.167-2.558.496A6.13 6.13 0 0 0 6.06 6.11a6.426 6.426 0 0 0-1.334 2.065 6.772 6.772 0 0 0-.482 2.566c0 .915.148 1.772.442 2.557a6.1 6.1 0 0 0 1.272 2.07 5.836 5.836 0 0 0 2.024 1.382c.791.33 1.68.497 2.644.497 2.328 0 4.168-.852 5.467-2.534l.223-.288-2.246-1.717-.222.272c-.4.493-.843.895-1.318 1.193-.449.283-.99.426-1.609.426-.467 0-.926-.076-1.363-.227a3.673 3.673 0 0 1-1.146-.63 3.103 3.103 0 0 1-.785-.961 2.485 2.485 0 0 1-.269-.864h9.352v-1.152ZM7.362 9.416c.034-.228.102-.46.202-.692.154-.361.376-.696.657-.992a3.296 3.296 0 0 1 1.035-.72 3.22 3.22 0 0 1 1.342-.277c.488 0 .957.078 1.33.232.368.151.677.362.92.625.245.267.431.585.554.945.091.272.155.566.19.879h-6.23ZM5.52 29.434a2.221 2.221 0 0 1-.598.455c-.237.118-.53.178-.87.178-.314 0-.6-.056-.848-.168a1.918 1.918 0 0 1-.641-.46 2.127 2.127 0 0 1-.418-.695c-.1-.267-.15-.554-.15-.853 0-.3.044-.6.131-.88a2.28 2.28 0 0 1 .38-.733c.162-.206.367-.37.609-.489a1.95 1.95 0 0 1 .863-.178c.331 0 .636.06.877.178.224.11.443.272.653.479.042-.128.088-.254.142-.377.194-.45.447-.86.754-1.228a3.47 3.47 0 0 0-.81-.448 4.293 4.293 0 0 0-1.558-.29c-.58 0-1.115.098-1.592.292-.478.195-.892.47-1.232.815-.342.347-.61.766-.8 1.249a4.33 4.33 0 0 0-.282 1.581c0 .57.095 1.1.283 1.575.19.479.462.894.808 1.236.346.341.764.61 1.24.798a4.267 4.267 0 0 0 1.575.283c.537 0 1.056-.09 1.54-.266.3-.11.58-.266.837-.464a4.964 4.964 0 0 1-.895-1.588l.003-.002ZM26.265 27.845c0-.473-.066-.945-.195-1.405a3.608 3.608 0 0 0-.64-1.265 3.36 3.36 0 0 0-1.137-.915c-.46-.232-1.027-.35-1.682-.35-.551 0-1.07.1-1.543.299-.472.199-.883.478-1.224.83a3.87 3.87 0 0 0-.804 1.245c-.193.475-.29.995-.29 1.546s.09 1.07.266 1.542c.178.475.436.896.766 1.248.332.352.742.632 1.22.832.477.199 1.013.3 1.594.3 1.403 0 2.512-.514 3.295-1.527l.134-.173-1.354-1.035-.133.164c-.242.298-.51.54-.795.72-.27.17-.597.256-.97.256-.281 0-.558-.046-.82-.137a2.233 2.233 0 0 1-.692-.38 1.87 1.87 0 0 1-.473-.579 1.494 1.494 0 0 1-.162-.52h5.637v-.694l.002-.002Zm-5.635-.812a1.74 1.74 0 0 1 .122-.417 1.991 1.991 0 0 1 1.02-1.032 1.95 1.95 0 0 1 .81-.166c.294 0 .575.047.801.14.222.09.408.218.554.377a1.6 1.6 0 0 1 .333.57c.055.163.094.34.114.53H20.63l.001-.002ZM17.693 24.088v-1.823h-1.776v1.823h-.965v1.66h.965v5.822h1.776v-5.822h.965v-1.66h-.965Z" />
    <path d="M12.362 24.088v.41a3.97 3.97 0 0 0-2.102-.588 3.954 3.954 0 0 0-2.817 1.149 3.989 3.989 0 0 0-.841 1.242 3.823 3.823 0 0 0-.308 1.53 3.876 3.876 0 0 0 1.15 2.779 4 4 0 0 0 2.815 1.141 3.951 3.951 0 0 0 2.102-.587v.408h1.775v-7.485l-1.774.001Zm0 3.742c0 .33-.051.638-.151.915a2.023 2.023 0 0 1-.415.699 1.93 1.93 0 0 1-.656.454 2.22 2.22 0 0 1-.88.168 2.22 2.22 0 0 1-.88-.168 1.927 1.927 0 0 1-.656-.454 1.995 1.995 0 0 1-.415-.7c-.1-.275-.15-.582-.15-.914 0-.331.05-.639.151-.915.098-.273.238-.508.415-.699.177-.19.398-.342.655-.453.259-.112.556-.168.88-.168.325 0 .622.057.88.168.258.11.48.264.655.453.177.191.318.426.416.699.1.277.15.585.15.915ZM31.495 24.043c-.556-.187-1.011-.183-1.49-.042a2.86 2.86 0 0 0-.651.282 2.59 2.59 0 0 0-.543.43l-.012.012v-.65h-1.774v7.485h1.774v-3.757c0-.712.155-1.238.46-1.56.307-.325.746-.482 1.345-.482 0 0 .415-.005.892.168v-1.886Z" />
  </svg>
);

const EzLogoSvg = forwardRef<Ref, EzLogoProps>(({color, size, variant}, ref) => {
  const svgProps = {
    ref,
    xmlns: 'http://www.w3.org/2000/svg',
    height: size === 'inherit' ? '100%' : SIZE_MAP[size],
    viewBox: variant === 'horizontal' ? '0 0 126 32' : '0 0 32 32',
    fill: COLOR_MAP[color],
  };

  return variant === 'horizontal' ? (
    <EzLogoHorizontal {...svgProps} />
  ) : (
    <EzLogoVertical {...svgProps} />
  );
});

EzLogoSvg.displayName = 'EzLogoSvg';

export default EzLogoSvg;
