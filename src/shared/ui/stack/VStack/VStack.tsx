import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = ({ align = 'normal', ...props }: VStackProps) => {
  return <Flex {...props} direction={`column`} align={align} />;
};
