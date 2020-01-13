import styled from 'styled-components';
import Link from 'next/link';

const StyledCardFrame = styled.div`
  width: 22rem;
  /* background-color: #dddddd; */
  display: flex;
  flex-direction: column;
  margin: 0;
  margin: 0.5rem 0 0.5rem 0;
  &:hover {
    cursor: pointer;
  }
`

export const CardFrame = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <StyledCardFrame>
      {children}
    </StyledCardFrame>
  </Link>
)

export const CardImage = styled.img`
  width: 22rem;
`

export const CardTitle = styled.p`
  color: #000000;
  font-size: 1.5rem;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin: 0;
  margin: 0.5rem 0 0 0;
`

export const CardYear = styled.p`
  color: #666666;
  font-size: 1.2rem;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: medium;
  margin: 0;
  margin: 0.2rem 0 0 0;
`