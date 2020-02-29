import styled from "styled-components";

export const Container = styled.div`
  padding: 100px;
  height: 100vh;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-left: 0;
`;
export const Element = styled.li`
  list-style-type: none;
  padding: 20px;
  a {
    text-decoration: none;
    color: var(--black);
    font-size: 14px;
  }
  a:hover {
    cursor: pointer;
    border-bottom: 5px solid #ccd5ff;
  }
`;
