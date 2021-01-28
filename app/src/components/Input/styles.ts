import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
// import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #b28d9f;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #3f1229;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #3f1229;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #3f1229;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

// export const Error = styled(Tooltip)`
//   height: 20px;
//   margin-left: 16px;

//   svg {
//     margin: 0;
//   }

//   span {
//     background: #c53030;
//     color: #f5f5f5;

//     &::before {
//       border-color: #c53030 transparent;
//     }
//   }
// `;
