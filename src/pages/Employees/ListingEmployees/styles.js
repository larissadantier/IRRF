import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
`;

export const Header = styled.header`
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Text = styled.p`
  color: #555;
  font-weight: 500;
  margin-top: 0.75rem;
  & + & {
    margin-top: 0.75rem;
  }
`;

export const SubTitle = styled.h3`
  margin-top: 2rem;
  font-weight: 600;
`;

export const Table = styled.table`
  min-width: 100%;
  table-layout: fixed;
  text-align: left;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const TBody = styled.tbody`
  min-width: 100%;
  table-layout: fixed;
  text-align: left;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const Tr = styled.tr`
  border: 1.5px solid #dee2e6;
`;

export const Th = styled.th`
  position: sticky;
  top: 0;
  padding: 0.55rem;

  background-color: #dee2e6;
  font-size: 0.95rem;
`;

export const Td = styled.td`
  padding: 0.55rem;
  border: 1.5px solid #dee2e6;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0.65rem;
`;

export const Button = styled.button`
  height: 30px;
  color: #fff;
  background-color: #495057;
  padding: 0 0.65rem;
  border: none;
  border-radius: 5px;
  font-weight: 500;

  transition: background 0.2s ease-in;

  &:hover {
    background-color: #222;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  height: 30px;
  color: #fff;
  background-color: #495057;
  padding: 0 0.65rem;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 0.85rem;
  text-decoration: none;

  transition: background 0.2s ease-in;

  &:hover {
    background-color: #222;
  }
`;
