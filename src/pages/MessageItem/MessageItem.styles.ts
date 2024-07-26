import styled from 'styled-components';

const MessageItemWrapper = styled.div`
  width: 348px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default MessageItemWrapper;
