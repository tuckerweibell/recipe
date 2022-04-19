type Choice = {
  label: string;
  imageSrc: string;
  value: string;
  disabled?: boolean;
};

export type EzSuperRadioButtonsProps = {
  label: string;
  options: Choice[];
  value?: string;
  onChange: (value: string) => void;
};
