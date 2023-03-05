import styled from "styled-components/native"
import { fontFamily } from '../../theme/fontFamily';

const EmptyStateContentContainer = styled.View`
    text-align: center;
    background: #1B1D22;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

`
const EmptyStateTitle = styled.Text`
  font-family: ${fontFamily.OverpassRegular};
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`
const ImageContainer = styled.View `
  width: 243px;
  height: 258px;
  margin: 18px 0px 18px 0px;
`

const EmptyStateText = styled.Text`
  font-family: ${fontFamily.OverpassLight};
  width: 328px;
  height: 98px;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #AFAFAF;
`

export default EmptyStateContentContainer;
export { EmptyStateTitle, ImageContainer, EmptyStateText }