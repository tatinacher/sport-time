import * as React from "react";
import styled from "styled-components";

export const TaskTracker: React.FC<{ progress: any }> = ({ progress }) => {
  return (
    <Cover>
      {/* {from-to } */}

      {progress.map((deal: { id: number; name: string }) => (
        <Row key={deal.id}>{deal.name}</Row>
      ))}
    </Cover>
  );
};

export const Cover = styled.div`
  border: 2px solid #111;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Page = styled.div`
  display: flex;
`;

export const Row = styled.div`
  transform: rotate(90deg);
`;
