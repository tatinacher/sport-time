import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import ReactPlayer from "react-player";
import * as DATA from "../../constants/index";

export const SportTime: React.FC<{}> = () => {
  const [isOpen, setOpen] = React.useState(false);
  const onClick = React.useCallback(() => {
    setOpen(!isOpen);
    console.log(1);
  }, [isOpen]);
  return (
    <Cover isOpen={isOpen}>
      <Header>Тренировка 1</Header>
      <Training>
        {DATA.trainings[0].week.map((exercise, number) => (
          <Exercise>
            <Title onClick={onClick}>{exercise.name}</Title>
            <Description isOpen={isOpen}>
              <Parameters>
                <Parameter>
                  <b>{DATA.APPROACH}:</b> {exercise.approach}
                </Parameter>
                <Parameter>
                  <b>{DATA.REPEAT}:</b> {exercise.repeat}
                </Parameter>
                <Parameter>
                  <b>{DATA.WEIGHT}:</b> {exercise.weight}
                </Parameter>
              </Parameters>
              <Technique>
                <div>
                  <b>{DATA.TECHNIQUE}:</b>
                </div>{" "}
                {exercise.technique}
              </Technique>

              {/* <Video>
                <ReactPlayer url={exercise.link} width="100%" height="auto" />
              </Video> */}
            </Description>
          </Exercise>
        ))}
        <Exercise>
          <div>
            <b>Бег на беговой дорожке</b>
          </div>
          <div>Время - 20 мин</div>
          <div>Без наклона (горизонтальная дорожка)</div>
          <div>Интервальный бег:</div>
          <div>5 мин - скорость 4 км/ч</div>
          <div>5 мин - скорость 7 км/ч</div>
        </Exercise>
      </Training>
    </Cover>
  );
};

interface Props {
  isOpen: boolean;
}

const map = (props: Props) => ({
  "data-open": props.isOpen
});

export const Cover: any = styled.div.attrs(map)`
  border-right: 111px solid var(--gray);
  border-radius: 3px;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;

  &[data-open="true"] {
    border-right: 0;
  }
`;

export const Page = styled.div`
  display: flex;
`;

export const Row = styled.div`
  transform: rotate(90deg);
`;

export const Header = styled.h3`
  background: var(--accent);
  padding: 22px;
  width: 100%;
  position: absolute;
  font-size: 26px;
`;
export const Technique = styled.div`
  white-space: pre-line;
  line-height: 1.4;
  padding-bottom: 20px;
`;
export const Title = styled.div`
  font-weight: bold;
  padding: 5px;
  background-color: var(--bubble-gum);
  font-weight: normal;
  cursor: pointer;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Exercise = styled.div`
  padding: 15px 15px 15px 0;
`;

export const Parameters = styled.div`
  padding: 20px 10px;
`;

export const Parameter = styled.div`
  padding: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Video = styled.div``;

export const Description: any = styled.div.attrs(map)`
  display: none;
  &[data-open="true"] {
    display: block;
  }
`;

export const Training = styled.div`
  padding-top: 120px;
`;
