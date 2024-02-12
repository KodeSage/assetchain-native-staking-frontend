import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getFormDetails } from "../methods/actions";

export const IconCard = ({ label, currency, icon, value, subvalue, info }) => {
  let dispatch = useDispatch();
  return (
    <CardContainer>
      <Title>
        {" "}
        {label}{" "}
        {info ? (
          <InfoIcons
            className="col-lg-4"
            onClick={() =>
              dispatch(
                getFormDetails({
                  props: ["stakingpoints"],
                  value: true,
                })
              )
            }
          >
            <img src="/assets/info.svg" alt="info" />
          </InfoIcons>
        ) : null}{" "}
      </Title>
      <Value>
        {value} <Currency> {currency}</Currency>
      </Value>
      <SubValue> {subvalue}</SubValue>
      <Badge>
        <img src={icon} height="20" alt="scale" />
      </Badge>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.highlight2};
  box-shadow: 0px 0px 8.17112px rgba(45, 58, 58, 0.02);
  border-radius: 8.17112px;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
  min-height: 150px;
`;
const Title = styled.p`
  color: ${({ theme }) => theme.grey2};
  font-size: ${({ theme }) => theme.textXs};
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.textBold};
  display: flex;
  align-content: center;
`;
const Value = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.textMd};
  font-weight: ${({ theme }) => theme.textBold};
  margin-bottom: 0px;
`;
const Currency = styled.span`
  font-size: ${({ theme }) => theme.textXXs};
`;
const SubValue = styled.span`
  color: ${({ theme }) => theme.grey2};
  font-size: ${({ theme }) => theme.textXXs};
  position: absolute;
  bottom: 10%;
  // opacity: 0.5;
`;
const Badge = styled.div`
  padding: 5px;
  background: ${({ theme }) => theme.highlight};
  border-radius: 0px 0px 4.95238px 4.95238px;
  position: absolute;
  top: 0;
  right: 10%;
`;
export const InfoIcons = styled.div`
  cursor: pointer;
  margin-left: 10px;
`;
