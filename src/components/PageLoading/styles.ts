import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	padding: 5rem 0;
	> span {
		width: 40vw;
		max-width: 50rem;
		border-radius: 8px;
		> span {
			background: #835afd;
		}
	}
`;

export const LogoIcon = styled.img`
	margin-bottom: 5rem;
`;