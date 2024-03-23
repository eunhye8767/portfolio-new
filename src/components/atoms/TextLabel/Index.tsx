import styled from '@emotion/styled';

interface TextLabelStyleProps {
  color?: string;
}

const Label = styled.p<TextLabelStyleProps>`
  font-size: 100px;
  font-weight: 400;
  color: ${({ color }) => color};
`;

interface TextLabelProps {
  label: string;
  color: string;
}

const TextLabel = ({ label, color }: TextLabelProps) => {
  return <Label color={color}>{label}</Label>;
};

export default TextLabel;
