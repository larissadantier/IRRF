import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
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

export const Table = styled.table`
  min-width: 1000px;
  table-layout: fixed;
  text-align: left;
  border-collapse: collapse;
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
