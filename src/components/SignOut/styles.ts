import { VscSignOut } from "react-icons/vsc";
import styled from "styled-components";

export const Container = styled.button`
	position: fixed;
	top: 1.5rem;
	right: 1.5rem;
	background: transparent;
	cursor: pointer;
	z-index: 50;
	border-radius: 8px;
	border: none;

	&:hover {
		filter: brightness(0.7);
	}

	img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const SignOutIcon = styled(VscSignOut)`
	font-size: 2.5rem;
	color: #835afd;
`;
