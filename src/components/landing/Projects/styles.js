import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;

export const Subtitle = styled.h4`
	color: #212121;
	font-weight: lighter;
	margin-bottom: 10px !important;
`
export const InfoList = styled.div`
	margin-bottom: 10px;
	& > div {
		display: flex;
		align-items: center;
		margin-bottom: 5px;
	}
	& > div > img {
		height: 15px;
		width: 15px;
		margin: 0 5px 0 0;
		padding: 0;
	}
	& > div > span {
		font-size: 13px;
		line-height: 15px;
	}
	& > div > a {
		color: #0074d9;
		text-decoration: none;
		font-size: 13px;
		line-height: 15px;
	}
	& > div > a:active {
		color: #0074d9;
	}
	& > div > a:focus {
		color: #0074d9;
	}
	& > div > a:visited {
		color: #0074d9;
	}
	& > div:last-child {
		margin-bottom: 0;
	}
`
