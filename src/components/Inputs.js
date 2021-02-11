import React,{useState} from 'react'
import { RightDiv, ArrowDiv,  BottomDiv, SelectButtonDiv, LeftDiv, InputsForm, InputsSection, SideDiv, SelectDiv, TopSection, WholeSection, RightDivParagraph } from '../styled-components/StyledElements';
import Arrow from "../Icons/select arrow.svg";

const Inputs = () =>
{
    
    const [showOptions, setShowOptions] = useState( false );
    const [activeIndex, setActiveIndex] = useState( "" );

    const checkOptions = () =>
    {
        setShowOptions( !showOptions );
    }

    const getActiveIndex = (e) =>
    {
        setActiveIndex( e.target.innerText );
    }

    return (
        <InputsSection>
            <InputsForm>
                <WholeSection>
                    <TopSection>
                        <input></input>
                        <SideDiv>
                            <p>sqm</p>
                        </SideDiv>
                    </TopSection>
                    <div>
                        <p>Current Ofice </p>
                    </div>
                </WholeSection>
                <WholeSection>
                    <TopSection>
                        <input></input>
                    </TopSection>
                    <div>
                        <p>Anticipated Headcount</p>
                    </div>
                </WholeSection>
                <WholeSection>
                    <TopSection>
                        <input></input>
                    </TopSection>
                    <div>
                        <p>Anticipated Headcount</p>
                    </div>
                </WholeSection>
                <WholeSection margin>
                    <TopSection border>
                        <SelectDiv onClick={checkOptions}>
                            <p>{activeIndex}</p>
                        </SelectDiv>
                        <SelectButtonDiv>
                            <img src={Arrow} onClick={checkOptions}/>
                        </SelectButtonDiv>
                    </TopSection>
                    <BottomDiv>
                        <LeftDiv>
                            <p>Region</p>
                        </LeftDiv>
                        {showOptions &&
                            <RightDiv>
                                <RightDivParagraph onClick={getActiveIndex}>NA</RightDivParagraph>
                                <RightDivParagraph onClick={getActiveIndex} active>LATAM</RightDivParagraph>
                                <RightDivParagraph onClick={getActiveIndex}>EMEA</RightDivParagraph>
                                <RightDivParagraph onClick={getActiveIndex}>ASIA PAC</RightDivParagraph>
                        </RightDiv>
                        }
                    </BottomDiv>
                </WholeSection>
            </InputsForm>
        </InputsSection>
    )
}

export default Inputs
